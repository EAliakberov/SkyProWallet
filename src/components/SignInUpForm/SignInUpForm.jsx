import { useContext, useMemo, useState } from 'react';
import Button from '../Button/Button';
import { Input } from '../Input/Input';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/contextAPI';
import { SSignInUpForm } from './SignInUpForm.styled';

export function SignInUpForm({ signup }) {
    const [fields, setFields] = useState({ name: '', email: '', password: '' });
    const [errors, setErrors] = useState({ name: null, email: null, password: null });
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const { logIn, signUp } = useContext(UserContext);

    const error = useMemo(() => {
        return errors.email || errors.password || (signup && errors.name);
    }, [errors, signup]);

    const valid = useMemo(
        () => ({
            name: isFieldValid('name', fields.name),
            email: isFieldValid('email', fields.email),
            password: isFieldValid('password', fields.password),
        }),
        [fields]
    );

    function isFieldValid(name, value) {
        if (name === 'name') {
            return value.length > 3 && !value.includes(' ');
        }
        if (name === 'password') {
            return value.length > 3 && !value.includes(' ');
        }
        if (name === 'email') {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailRegex.test(value);
        }
        return false;
    }

    function isFieldsOK() {
        const nextErrors = {
            name: !isFieldValid('name', fields['name']),
            password: !isFieldValid('password', fields['password']),
            email: !isFieldValid('email', fields['email']),
        };
        setErrors(nextErrors);
        return !nextErrors.email && !nextErrors.password && (!nextErrors.name || !signup);
    }

    function handleOnChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setFields((prev) => ({ ...prev, [name]: value }));
        setErrors({ name: null, email: null, password: null });
        setErrorMessage(null);
    }

    async function handleSignInClick() {
        if (isFieldsOK()) {
            try {
                await logIn({ login: fields.email, password: fields.password });
                navigate('/analysis');
            } catch (err) {
                setErrorMessage(err.message);
            }
        }
    }
    async function handleSignUpClick() {
        if (isFieldsOK()) {
            try {
                await signUp({ login: fields.email, password: fields.password, name: fields.name });
                navigate('/analysis');
            } catch (err) {
                setErrorMessage(err.message);
            }
        }
    }

    return (
        <SSignInUpForm>
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
                    valid={valid.email}
                    onChange={handleOnChange}
                    value={fields.email}
                ></Input>
                <Input
                    name="password"
                    placeholder="Пароль"
                    type="password"
                    error={errors.password}
                    valid={valid.password}
                    onChange={handleOnChange}
                    value={fields.password}
                ></Input>
                {error || errorMessage ? (
                    <p className="form_error">
                        Упс! {errorMessage ? errorMessage : 'Введенные вами данные некорректны.'}
                        <br /> Введите данные корректно и повторите попытку.
                    </p>
                ) : null}
            </div>
            <Button
                className="form_button"
                onClick={signup ? handleSignUpClick : handleSignInClick}
            >
                {signup ? 'Зарегистрироваться' : 'Войти'}
            </Button>
            <div className="form_text">
                <p>{signup ? 'Уже есть аккаунт?' : 'Нужно зарегистрироваться?'}</p>
                {signup ? (
                    <Link to={'/signin'}>Войдите здесь</Link>
                ) : (
                    <Link to={'/signup'}>Зарегистрируйтесь здесь</Link>
                )}
            </div>
        </SSignInUpForm>
    );
}
