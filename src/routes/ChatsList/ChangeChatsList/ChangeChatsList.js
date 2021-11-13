import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addInChatsListAction, removeFromChatsListAction } from '../../../store/ChatsList/Action';
import { removeMessageInChatListAction } from '../../../store/ChatList/Action';
import { getChatsListRootSelector } from '../../../store/ChatsList/Selectors';
import { useStyles } from '../../../styles/Style';
import { ChangeChatsListUI } from '../../../ui_components/ChangeChatsListUI.jsx';

export const ChangeChatsList = (props) => {
  const classes = useStyles();
  const [valueName, setValueName] = useState('');
  const [nameAlreadyExists, setNameAlreadyExists] = useState(false);
  const [nameNotFound, setNameNotFound] = useState(false);

  const nameAlreadyExistsForProps = nameAlreadyExists ? <p className={classes.textAttention}>Имя уже существует</p> : null;
  const nameNotFoundForProps = nameNotFound ? <p className={classes.textAttention}>Имя не найдено</p> : null

  const dispatch = useDispatch();
  const chatsListRed = useSelector(getChatsListRootSelector);

  const onSaveNameFromInput = (event) => {
    setValueName(event.target.value);
    setNameAlreadyExists(false);
    setNameNotFound(false);
  };

  const resetValue = () => {
    setValueName('');
  };

  const newContactId = () => {
    const now = new Date().getTime();
    const nowString = String(now);
    return nowString
  };

  const addContact = (newName) => {
    const now = newContactId();
    const newContact = {
      id: now,
      name: newName,
    };
    return newContact
  };

  const onSubmit = (event) => {
    event.preventDefault(); //* Cancel page reload.
    setNameNotFound(false);
    if (valueName !== '') {
      if (!(chatsListRed.find((item) => item.name === valueName))) {
        setNameAlreadyExists(false);
        const newContact = addContact(valueName);
        dispatch(addInChatsListAction(newContact));
        resetValue();
      } else {
        setNameAlreadyExists(true);
      }
    }
  };

  const deliteContact = () => {
    setNameAlreadyExists(false);
    if (chatsListRed.find((item) => item.name === valueName)) {
      setNameNotFound(false);
      const newChatsListRed = chatsListRed.filter((item) => item.name !== valueName);
      const [delChatsListRed] = chatsListRed.filter((item) => item.name === valueName);
      dispatch(removeMessageInChatListAction(delChatsListRed.id));
      dispatch(removeFromChatsListAction(newChatsListRed));
      resetValue();
    } else {
      setNameNotFound(true);
    }
  };

  return (
    <ChangeChatsListUI classes={classes} onSubmit={onSubmit} onSaveNameFromInput={onSaveNameFromInput} valueName={valueName} nameAlreadyExistsForProps={nameAlreadyExistsForProps} nameNotFoundForProps={nameNotFoundForProps} deliteContact={deliteContact}></ChangeChatsListUI>
  )
};
