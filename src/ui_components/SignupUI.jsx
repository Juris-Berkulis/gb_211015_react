import React from 'react';
import { Link } from 'react-router-dom';

export const SignupUI = (props) => {
    return (
    <div>
        <form onSubmit={props.handleSubmit}>
        <p>Заполните форму ниже, чтобы зарегистрировать новую учетную запись.</p>
        <div>
            <input
            placeholder="Email"
            name="email"
            type="email"
            onChange={props.handleEmailChange}
            value={props.email}
            />
        </div>
        <div>
            <input
            placeholder="Password"
            name="password"
            type="password"
            onChange={props.handlePassChange}
            value={props.password}
            />
        </div>
        <div>
            {props.error && <p>{props.error}</p>}
            <button type="submit">Зарегистрироваться</button>
        </div>
        <hr />
        <p>
            <span>Уже есть аккаунт? </span>
            <Link to="/login">Войти</Link>
        </p>
        </form>
    </div>
    )
};