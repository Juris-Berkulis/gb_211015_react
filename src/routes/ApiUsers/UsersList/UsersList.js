import React from 'react';
import { useSelector } from 'react-redux';
import { newUsers } from '../../../store/ApiUsers/NewUsersApi.js';
import { useStyles } from '../../../styles/Style.js';
import { UsersListUI } from '../../../ui_components/UsersListUI.jsx';

export const UsersList = (props) => {
    const classes = useStyles();

    const data = useSelector(newUsers.selectors.getData);
    const dataUI = data.map((item) => (
        <li className={classes.users_list__item} key={item.id}>
            <p className={`${classes.users_list__name} ${props.ismobileDeviceProps ? classes.users_list__name__mobile_device : null}`}>{item.name}</p>
            <p className={`${classes.users_list__additionally} ${props.ismobileDeviceProps ? classes.users_list__additionally__mobile_device : null}`}>
                <span className={classes.users_list__phone}>Телефон: {item.phone}</span>
                <span className={classes.users_list__delimiter}> - </span>
                <span className={classes.users_list__email}>Email: {item.email}</span>
            </p>
        </li>
    ));

    return (
        <UsersListUI classes={classes} dataUI={dataUI} screenHeightLessThan450={props.screenHeightLessThan450}></UsersListUI>
    )
};
