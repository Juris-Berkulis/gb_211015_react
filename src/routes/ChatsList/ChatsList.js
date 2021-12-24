import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeChatsList } from './ChangeChatsList/ChangeChatsList';
import { getChatsListChatsKindOfListSelector } from '../../store/ChatsList/Selectors';
import { Box, ListItem } from '@material-ui/core';
import { useStyles } from '../../styles/Style';
import { ChatsListUI } from '../../ui_components/ChatsListUI.jsx';
import { offTrackingAddInChatsListWithThunkAction, offTrackingRemoveFromChatsListWithThunkAction, onTrackingAddInChatsListWithThunkAction, onTrackingRemoveFromChatsListWithThunkAction } from '../../store/ChatsList/Action';
import { offTrackingRemoveMessageInChatListWithThunkAction, onTrackingRemoveMessageInChatListWithThunkAction } from '../../store/ChatList/Action';
import { getBigChatIsOpenSelector } from '../../store/BigChatStatus/Selectors';
import { isMobileDevice } from '../../helper/helper';

export const ChatsList = () => {
    const classes = useStyles();

    const isMobileDeviceBoolean = isMobileDevice();

    const dispatch = useDispatch();

    const chatsListRed = useSelector(getChatsListChatsKindOfListSelector);

    const newChatsListRed = chatsListRed.map((item) => <ListItem className={classes.allChatsListItem} button to={`/messenger/${item.id}`} component={Link} key={item.id}>{item.name}</ListItem>);

    const isBigChatOpen = useSelector(getBigChatIsOpenSelector);

    useEffect(() => {
        dispatch(onTrackingAddInChatsListWithThunkAction);
        dispatch(onTrackingRemoveFromChatsListWithThunkAction);
        dispatch(onTrackingRemoveMessageInChatListWithThunkAction);

        return () => {
            dispatch(offTrackingAddInChatsListWithThunkAction);
            dispatch(offTrackingRemoveFromChatsListWithThunkAction);
            dispatch(offTrackingRemoveMessageInChatListWithThunkAction);
        }
    }, [dispatch]);

    return (
        <Box height='100%' width={isMobileDeviceBoolean ? '100%' : null} display={isBigChatOpen && isMobileDeviceBoolean ? 'none' : null}>
            <ChangeChatsList></ChangeChatsList>
            <ChatsListUI classes={classes} newChatsListRed={newChatsListRed}></ChatsListUI>
        </Box>
    )
};
