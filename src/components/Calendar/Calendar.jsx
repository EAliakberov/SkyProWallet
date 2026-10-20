import { useMemo, useRef, useState } from 'react';

import {
    addMonths,
    eachDayOfInterval,
    endOfMonth,
    endOfWeek,
    format,
    isBefore,
    isSameDay,
    isSameMonth,
    isWithinInterval,
    startOfMonth,
    startOfWeek,
} from 'date-fns';
import { ru } from 'date-fns/locale';

import {
    CalendarCard,
    CalendarScroll,
    DayButton,
    DayCell,
    DaysGrid,
    MonthSection,
    MonthTitle,
    Title,
    WeekDay,
    WeekHeader,
} from './Calendar.styled';

const WEEK_DAYS = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

const INITIAL_START = new Date();
const INITIAL_END = new Date();

function getMonthDays(month, showFullWeeks = true) {
    let first = startOfMonth(month);
    let last = endOfMonth(month);

    if (showFullWeeks) {
        first = startOfWeek(first, { weekStartsOn: 1 });
        last = endOfWeek(last, { weekStartsOn: 1 });
    }
    return eachDayOfInterval({ start: first, end: last });
}

function getMonthTitle(date) {
    const title = format(date, 'LLLL yyyy', { locale: ru });
    return title.charAt(0).toUpperCase() + title.slice(1);
}

export default function Calendar({
    initialStartDate = INITIAL_START,
    initialEndDate = INITIAL_END,
    monthsToShow = 18,
    onChange,
    title = 'Период',
}) {
    const [startDate, setStartDate] = useState(initialStartDate);
    const [endDate, setEndDate] = useState(initialEndDate);
    const [visibleMonth, setVisibleMonth] = useState(startOfMonth(initialStartDate || new Date()));

    const scrollRef = useRef(null);
    const monthRefs = useRef({});

    const months = useMemo(
        () => Array.from({ length: monthsToShow }, (_, index) => addMonths(visibleMonth, index)),
        [visibleMonth, monthsToShow]
    );

    const selectDate = (date) => {
        let nextStart;
        let nextEnd;

        if (!startDate || (startDate && endDate)) {
            nextStart = date;
            nextEnd = null;
        } else if (isBefore(date, startDate)) {
            nextStart = date;
            nextEnd = startDate;
        } else {
            nextStart = startDate;
            nextEnd = date;
        }

        setStartDate(nextStart);
        setEndDate(nextEnd);

        onChange?.({
            startDate: nextStart,
            endDate: nextEnd,
        });
    };

    const isSelected = (date) =>
        (startDate && isSameDay(date, startDate)) || (endDate && isSameDay(date, endDate));

    const isInRange = (date) => {
        if (!startDate || !endDate) return false;

        return (
            isWithinInterval(date, {
                start: startDate,
                end: endDate,
            }) && !isSelected(date)
        );
    };

    return (
        <CalendarCard>
            <Title>{title}</Title>

            <WeekHeader>
                {WEEK_DAYS.map((day) => (
                    <WeekDay key={day}>{day}</WeekDay>
                ))}
            </WeekHeader>

            <CalendarScroll ref={scrollRef}>
                {months.map((month) => {
                    const key = format(month, 'yyyy-MM');
                    const days = getMonthDays(month);

                    return (
                        <MonthSection
                            key={key}
                            ref={(node) => {
                                monthRefs.current[key] = node;
                            }}
                        >
                            <MonthTitle>{getMonthTitle(month)}</MonthTitle>

                            <DaysGrid>
                                {days.map((date) => {
                                    const inCurrentMonth = isSameMonth(date, month);
                                    const selected = Boolean(isSelected(date));
                                    const inRange = isInRange(date);
                                    const isStart = startDate && isSameDay(date, startDate);
                                    const isEnd = endDate && isSameDay(date, endDate);

                                    return inCurrentMonth ? (
                                        <DayCell
                                            key={date.toISOString()}
                                            $selected={selected}
                                            $inRange={inRange}
                                            $isStart={Boolean(isStart)}
                                            $isEnd={Boolean(isEnd)}
                                        >
                                            <DayButton
                                                type="button"
                                                $selected={selected}
                                                $inRange={inRange}
                                                $outside={!inCurrentMonth}
                                                aria-label={format(date, 'd MMMM yyyy', {
                                                    locale: ru,
                                                })}
                                                aria-pressed={selected}
                                                onClick={() => selectDate(date)}
                                            >
                                                {format(date, 'd')}
                                            </DayButton>
                                        </DayCell>
                                    ) : (
                                        <DayCell />
                                    );
                                })}
                            </DaysGrid>
                        </MonthSection>
                    );
                })}
            </CalendarScroll>
        </CalendarCard>
    );
}
