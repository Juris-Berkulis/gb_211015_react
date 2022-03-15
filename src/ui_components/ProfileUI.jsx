import React from 'react';

export const ProfileUI = (props) => {
    return (
        <div>
            <h1>{props.componentTitle}</h1>
            <input type='checkbox' checked={props.isChecked} onChange={props.toggleChecked} />
            <p>
                <span>Мой Email: </span>
                {props.myEmailForProps}
            </p>
            <p>Страница еще не готова! Развитие этой страницы предполагается в дальнейшем.</p>
        </div>
    )
};
