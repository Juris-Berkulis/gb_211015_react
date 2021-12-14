import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from '../../styles/Style';
import { newUsers } from '../../store/ApiUsers/NewUsersApi';
import { ApiUsersUI } from '../../ui_components/ApiUsersUI.jsx';
import { UsersLoader } from './UsersLoader/UsersLoader';
import { UsersError } from './UsersError/UsersError';
import { UsersList } from './UsersList/UsersList';

export const ApiUsers = () => {
    const classes = useStyles();

    const isError = useSelector(newUsers.selectors.getError);
    const isLoading = useSelector(newUsers.selectors.getLoading);
    const data = useSelector(newUsers.selectors.getData);
    const dispatch = useDispatch();

    const isLoadingForProps = isLoading ? <UsersLoader /> : null;
    const isErrorForProps = isError ? <UsersError /> : null;
    const dataForProps = (!isLoading && data.length > 0) ? <UsersList /> : null;

    const getData = useCallback(() => {
        dispatch(newUsers.actions.getDataWithThunk);
    }, [dispatch]);

    useEffect(() => {
        getData();
    }, [getData]);

    return (
        <ApiUsersUI classes={classes} getData={getData} dataForProps={dataForProps} isLoadingForProps={isLoadingForProps} isErrorForProps={isErrorForProps}></ApiUsersUI>
    )
};
