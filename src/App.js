import React, { useState, useEffect } from 'react';
import {CHAT_LIST as chatList} from './data/chat list'
import './styles/App.css';

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState('');

  const onSaveValueFromInput = (event) => {
    setValue(event.target.value);
  };

  const nextKey = () => {
    const now = new Date().getTime();
    return now
  };

  const sendMessage = (objectMessage) => {
        const newMessagesList = [...messageList, objectMessage];
        setMessageList(newMessagesList);
  };

  const resetValue = () => {
    setValue('');
  };

  const onSubmit = (event) => {
    event.preventDefault(); //* Cancel page reload.
    if (value !== '') {
        const moment = nextKey();
        const userMessage = {
            id: moment,
            author: 'User',
            text: value,
        };
        sendMessage(userMessage);
        resetValue();
    }
  };

  useEffect(() => {
      if (messageList.length !== 0) {
        const timerId = setTimeout(() => {
            const listLastElement = messageList[messageList.length - 1];
            if (listLastElement.author !== 'bot') {
              const moment = nextKey();
                const botMessage = {
                    id: moment,
                    author: 'bot',
                    text: `Ok, ${listLastElement.author}, принято!`,
                };
                sendMessage(botMessage);
            };
        }, 1500);

        return () => {clearTimeout(timerId)}
      };
  }, [messageList]);

  return (
    <div>
      <div>
        {
          chatList.map((item) => <li key={item.id}>{item.name}</li>)
        }
      </div>
      <div className='app'>
        <form className='app__form' onSubmit={onSubmit}>
          <input className='app__form_input' type="text" onChange={onSaveValueFromInput} value={value} />
          <button className='app__form_btn'>Отправить</button>
        </form>
        <ul className='app__ul'>
            {
              messageList.map((item) => <li className='app__ul_li' key={item.id}>{item.author}: {item.text}</li>)
            }
        </ul>
      </div>
    </div>
  );
};
