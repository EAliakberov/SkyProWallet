import { useState } from 'react';
import Button from '../Button/Button';
import { Input } from '../Input/Input';
import { SSignInOutForm } from './SignInOutForm.styled';
import { Link } from 'react-router-dom';

export function SignInOutForm({ signup }) {
    const [fields, setFields] = useState({ name: '', email: '', password: '' });
    const [errors, setErrors] = useState({ name: null, email: 'ошибка', password: null });
    const [valid, setValid] = useState({ name: false, email: false, password: false });

    function isFieldValid(name, value){
        return true
    }

    function handleOnChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setFields({ ...fields, [name]: value });
        setErrors({ name: null, email: null, password: null });
        setValid({...valid, [name]:isFieldValid(name, value)});
    }

    return (
        <SSignInOutForm>
            <h2 className="form-tittle">{signup ? 'Регистрация' : 'Вход'}</h2>
            <div className="form_input-container">
                {signup ? (
                    <Input
                        name="name"
                        placeholder="Имя"
                        type="text"
                        error={errors.name}
                        valid={valid.name}
                        onChange={handleOnChange}
                        value={fields.name}
                    ></Input>
                ) : null}
                <Input
                    name="email"
                    placeholder="Эл. почта"
                    type="email"
                    error={errors.email}
                    onChange={handleOnChange}
                    value={fields.email}
                ></Input>
                <Input
                    name="password"
                    placeholder="Пароль"
                    type="password"
                    error={errors.password}
                    onChange={handleOnChange}
                    value={fields.password}
                ></Input>
                {(errors.name && signup) || errors.email || errors.password ? (
                    <p className="form_error">
                        Упс! Введенные вами данные некорректны.
                        <br /> Введите данные корректно и повторите попытку.
                    </p>
                ) : null}
            </div>
            <Button className="form_button">{signup ? 'Зарегистрироваться' : 'Войти'}</Button>
            <div className="form_text">
                <p>{signup ? 'Уже есть аккаунт?' : 'Нужно зарегистрироваться?'}</p>
                {signup ? (
                    <Link to={'/signin'}>Войдите здесь</Link>
                ) : (
                    <Link to={'/signup'}>Зарегистрируйтесь здесь</Link>
                )}
            </div>
        </SSignInOutForm>
    );
}
