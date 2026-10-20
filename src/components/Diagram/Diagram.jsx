import { useState } from 'react';
import { DiagramCard, SColumn } from './Diagram.styled';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

function Column({ value, maxValue, name, color }) {
    return (
        <SColumn className="column-container" $size={(value / maxValue) * 100} $color={color}>
            <h3 className="column-header">{value} ₽</h3>
            <div className="column-body"></div>
            <p className="column-name">{name}</p>
        </SColumn>
    );
}

export function Diagram() {
    const [money] = useState(1000);
    const startDate = new Date();
    const endDate = new Date();

    const columns = [
        { value: 5000, maxValue: 10000, name: 'Еда', color: '#D9B6FF' },
        { value: 7500, maxValue: 10000, name: 'Транспорт', color: '#FFB53D' },
        { value: 5000, maxValue: 10000, name: 'Жилье', color: '#6EE4FE' },
        { value: 7500, maxValue: 10000, name: 'Развлечени', color: '#B0AEFF' },
        { value: 5000, maxValue: 10000, name: 'Образование', color: '#BCEC30' },
        { value: 0, maxValue: 10000, name: 'Другое', color: '#FFB9B8' },
    ];

    return (
        <DiagramCard>
            <h2 className="title">{money + ' ₽'}</h2>
            <p className="diagram-text">
                Расходы за{' '}
                <span className="diagram-date">
                    {startDate ? format(startDate, 'd MMM yyyy', { locale: ru }) : 'Начало'}
                </span>
                {' — '}
                <span className="diagram-date">
                    {endDate ? format(endDate, 'd MMM yyyy', { locale: ru }) : 'Конец'}
                </span>
            </p>
            <div className="diagram-columns">
                {columns.map((column) => (
                    <Column
                        key={column.name}
                        value={column.value}
                        maxValue={column.maxValue}
                        name={column.name}
                        color={column.color}
                    />
                ))}
            </div>
        </DiagramCard>
    );
}
