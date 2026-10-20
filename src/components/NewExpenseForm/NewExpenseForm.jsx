import Button from '../Button/Button';
import { Categories } from '../Categories/Categories';
import { Input } from '../Input/Input';
import { SNewExpressionForm } from './NewExpressionForm.styled';

export function NewExpenseForm() {
    return (
        <SNewExpressionForm>
            <h2 className="title">Новый расход</h2>
            <h3 className="subtitle">Описание</h3>
            <Input className="input" placeholder="Введите описание" type="textarea"></Input>
            <h3 className="subtitle">Категория</h3>
            <Categories>                
            </Categories>
            <h3 className="subtitle">Дата</h3>
            <Input className="input" type="date"></Input>
            <h3 className="subtitle">Сумма</h3>
            <Input
                className="input"
                placeholder="Введите сумму"
                type="number"
                step="0.01"
            ></Input>
            <Button>Добавить новый расход</Button>
        </SNewExpressionForm>
    );
}
