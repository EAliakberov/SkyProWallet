import { useContext, useState } from 'react';
import Button from '../Button/Button';
import { Categories } from '../Categories/Categories';
import { Input } from '../Input/Input';
import { SNewExpressionForm } from './NewExpressionForm.styled';
import { TransactionsContext } from '../../context/contextAPI';
import { toApiDate } from '../../Services/api';

export function NewExpenseForm() {
    const { addNewTransaction } = useContext(TransactionsContext);
    const [newTransaction, setNewTransaction] = useState({
        description: '',
        sum: 0,
        category: null,
        date: new Date(),
    });

    function handleAddTransaction() {
        addNewTransaction({
            ...newTransaction,
            date: toApiDate(newTransaction.date),
        }).catch(() => {});
    }

    function handleInputChange(e) {
        let newValue;
        switch (e.target.name) {
            case 'date':
                newValue = new Date(e.target.value);
                break;
            case 'sum':
                newValue = +e.target.value;
                break;
            case 'description':
                newValue = e.target.value;
                break;
            default:
                return;
        }
        setNewTransaction({ ...newTransaction, [e.target.name]: newValue });
    }

    function handleCategoryChange(key) {
        setNewTransaction({ ...newTransaction, ['category']: key });
    }

    return (
        <SNewExpressionForm>
            <h2 className="title">Новый расход</h2>
            <h3 className="subtitle">Описание</h3>
            <Input
                className="input"
                name="description"
                placeholder="Введите описание"
                type="textarea"
                value={newTransaction.description}
                onChange={handleInputChange}
            ></Input>
            <h3 className="subtitle">Категория</h3>
            <Categories
                value={newTransaction.category}
                onChange={handleCategoryChange}
            ></Categories>
            <h3 className="subtitle">Дата</h3>
            <Input
                className="input"
                type="date"
                name="date"
                value={newTransaction.date.toISOString().split('T')[0]}
                onChange={handleInputChange}
            ></Input>
            <h3 className="subtitle">Сумма</h3>
            <Input
                className="input"
                placeholder="Введите сумму"
                type="number"
                name="sum"
                step="0.01"
                value={newTransaction.sum.toString()}
                onChange={handleInputChange}
            ></Input>
            <Button onClick={handleAddTransaction}>Добавить новый расход</Button>
        </SNewExpressionForm>
    );
}
