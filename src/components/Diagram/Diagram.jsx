import { useContext, useEffect, useMemo } from 'react';
import { DiagramCard, SColumn } from './Diagram.styled';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { TransactionsContext } from '../../context/contextAPI';
import { categories } from '../../CategoriesData';

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
    const {
        transactionsPeriod,
        transactions,
        loadTransactions,
        loadTransactionsByPeriod,
        setPeriod,
    } = useContext(TransactionsContext);

    useEffect(() => {
        transactionsPeriod
            ? loadTransactionsByPeriod(transactionsPeriod).catch(() => {})
            : loadTransactions().catch(() => {});
    }, [loadTransactions, loadTransactionsByPeriod, transactionsPeriod]);

    const { startDate, endDate } = useMemo(() => {
        return transactionsPeriod
            ? { startDate: transactionsPeriod.start, endDate: transactionsPeriod.end }
            : { start: null, end: null };
    }, [transactionsPeriod]);

    const columns = useMemo(() => {
        const columns = Object.keys(categories).reduce((acc, category) => {
            acc[category] = {
                value: 0,
                maxValue: 0,
                name: categories[category].label,
            };
            return acc;
        }, {});

        transactions &&
            transactions.forEach((spend) => {
                columns[spend.category].value += +spend.sum;
            });
        const res = [
            { ...columns['food'], color: '#D9B6FF' },
            { ...columns['transport'], color: '#FFB53D' },
            { ...columns['housing'], color: '#6EE4FE' },
            { ...columns['joy'], color: '#B0AEFF' },
            { ...columns['education'], color: '#BCEC30' },
            { ...columns['others'], color: '#FFB9B8' },
        ];

        const maxValue = res.reduce((acc, value) => {
            return value.value > acc ? value.value : acc;
        }, 0);

        res.forEach((value) => {
            value.maxValue = maxValue;
        });
        return res;
    }, [transactions]);

    const money = useMemo(() => {
        return columns.reduce((acc, value) => {
            acc += value.value;
            return acc;
        }, 0);
    }, [columns]);

    return (
        <DiagramCard>
            <h2
                className="title"
                onClick={() => {
                    setPeriod(null);
                }}
            >
                {money + ' ₽'}
            </h2>
            {transactionsPeriod ? (
                <p className="diagram-text">
                    Расходы за{' '}
                    <span className="diagram-date">
                        {startDate ? format(startDate, 'd MMM yyyy', { locale: ru }) : 'Начало'}
                    </span>{' '}
                    {startDate.getDate() !== endDate.getDate() ? ' — ' : null}
                    {startDate.getDate() !== endDate.getDate() ? (
                        <span className="diagram-date">
                            {endDate ? format(endDate, 'd MMM yyyy', { locale: ru }) : 'Конец'}
                        </span>
                    ) : null}
                </p>
            ) : (
                <p className="diagram-text"> Расходы за все время</p>
            )}
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
