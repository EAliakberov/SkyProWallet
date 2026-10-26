import { useContext, useEffect, useState } from 'react';
import {
    Card,
    Cell,
    DeleteButton,
    Grid,
    GridHead,
    HeadWrapper,
    Row,
    TableWrapper,
} from './ExpensesTable.styled';
import { TransactionsContext } from '../../context/contextAPI';
import { categories } from '../../CategoriesData';

const TrashIcon = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M9.62 2.79003H9.42L7.73 1.10003C7.595 0.965029 7.375 0.965029 7.235 1.10003C7.1 1.23503 7.1 1.45503 7.235 1.59503L8.43 2.79003H3.57L4.765 1.59503C4.9 1.46003 4.9 1.24003 4.765 1.10003C4.63 0.965029 4.41 0.965029 4.27 1.10003L2.585 2.79003H2.385C1.935 2.79003 1 2.79003 1 4.07003C1 4.55503 1.1 4.87503 1.31 5.08503C1.43 5.21003 1.575 5.27503 1.73 5.31003C1.875 5.34503 2.03 5.35003 2.18 5.35003H9.82C9.975 5.35003 10.12 5.34003 10.26 5.31003C10.68 5.21003 11 4.91003 11 4.07003C11 2.79003 10.065 2.79003 9.62 2.79003Z"
            fill="#999999"
        />
        <path
            d="M9.52502 6H2.43502C2.12502 6 1.89002 6.275 1.94002 6.58L2.36002 9.15C2.50002 10.01 2.87502 11 4.54002 11H7.34502C9.03002 11 9.33002 10.155 9.51002 9.21L10.015 6.595C10.075 6.285 9.84002 6 9.52502 6ZM5.30502 9.225C5.30502 9.42 5.15002 9.575 4.96002 9.575C4.76502 9.575 4.61002 9.42 4.61002 9.225V7.575C4.61002 7.385 4.76502 7.225 4.96002 7.225C5.15002 7.225 5.30502 7.385 5.30502 7.575V9.225ZM7.44502 9.225C7.44502 9.42 7.29002 9.575 7.09502 9.575C6.90502 9.575 6.74502 9.42 6.74502 9.225V7.575C6.74502 7.385 6.90502 7.225 7.09502 7.225C7.29002 7.225 7.44502 7.385 7.44502 7.575V9.225Z"
            fill="#999999"
        />
    </svg>
);

const dateToDisplay = (date) => {
    if (!(date instanceof Date) || Number.isNaN(date.getTime())) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
};

export default function ExpensesTable() {
    const [options, setOptions] = useState({});
    const { transactions, loading, error, loadTransactions, removeTransaction } =
        useContext(TransactionsContext);

    useEffect(() => {
        loadTransactions(options).catch(() => {});
    }, [options, loadTransactions]);

    const handleDelete = (id) => {
        removeTransaction(id);
    };

    function handleFilterClick(sortBy) {
        if (options?.sortBy === sortBy) {
            setOptions({ ...options, sortBy: null});
        } else {
            setOptions({ ...options, sortBy: sortBy });
        }
    }

    return (
        <Card>
            <h2 className="title">Таблица расходов</h2>
            <HeadWrapper>
                <Grid role="table" aria-label="Таблица расходов">
                    <GridHead role="row">
                        <Cell role="columnheader" $head>
                            Описание
                        </Cell>
                        <Cell role="columnheader" $head>
                            Категория
                        </Cell>
                        <Cell
                            role="columnheader"
                            $head
                            onClick={() => {
                                handleFilterClick('date');
                            }}
                        >
                            <span style={options?.sortBy === 'date' ? {fontWeight: 600} : null}>
                                Дата
                            </span>
                        </Cell>
                        <Cell role="columnheader" $head onClick={() => {
                                handleFilterClick('sum');
                            }}>
                            <span style={options?.sortBy === 'sum' ? {fontWeight: 600} : null}>
                                Сумма
                            </span>
                        </Cell>
                        <Cell role="columnheader" $head $action></Cell>
                    </GridHead>
                </Grid>
            </HeadWrapper>
            <TableWrapper>
                <Grid role="table" aria-label="Таблица расходов">
                    {loading ? (
                        <div>Идет загрузка</div>
                    ) : Array.isArray(transactions) ? (
                        transactions.map((expense, index) => (
                            <Row key={index} role="row">
                                <Cell role="cell">{expense.description}</Cell>
                                <Cell role="cell">{categories[expense.category].label}</Cell>
                                <Cell role="cell">{dateToDisplay(new Date(expense.date))}</Cell>
                                <Cell role="cell">{`${expense.sum} ₽`}</Cell>

                                <Cell role="cell" $action>
                                    <DeleteButton
                                        type="button"
                                        aria-label={`Удалить ${expense.description}`}
                                        onClick={() => handleDelete(expense._id)}
                                    >
                                        <TrashIcon />
                                    </DeleteButton>
                                </Cell>
                            </Row>
                        ))
                    ) : (
                        JSON.stringify(transactions)
                    )}
                    {transactions.length < 1 ? <p>Нет транзакций</p> : null}
                    {error ? <p>{error.message}</p> : null}
                </Grid>
            </TableWrapper>
        </Card>
    );
}
