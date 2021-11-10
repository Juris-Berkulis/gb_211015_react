import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Header } from './routes/Header/Header';
import { Home } from './routes/Home/Home';
import { Profile } from './routes/Profile/Profile';
import { ChatsList } from './routes/ChatsList/ChatsList';
import { Chat } from './routes/Chat/Chat';
import { Error404 } from './routes/Error404/Error404';
import { store } from './store/Store';
import { Box } from '@material-ui/core';

export const App = () => {
  return (
    <Provider store={store}>
    <Switch>
    <>
      <Header></Header>
      <Box mx='10vw' p={1}>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/profile'>
          <Profile></Profile>
        </Route>
        <Route path='/messenger'>
          <Box display="flex" justifyContent="space-between" bgcolor="trancend" color="white">
            <ChatsList></ChatsList>
            <Route path='/messenger/error404'>
              <Error404></Error404>
            </Route>
            <Route path='/messenger/:chatId'>
              <Chat></Chat>
            </Route>
          </Box>
        </Route>
      </Box>
    </>
    </Switch>
    </Provider>
  );
};
