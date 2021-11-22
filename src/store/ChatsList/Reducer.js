import { ADD_IN_CHATS_LIST, REMOVE_FROM_CHATS_LIST } from './Action';
import { CHAT_LIST  } from '../../data/chat list';

const initialState = CHAT_LIST;

export const chatsListReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_IN_CHATS_LIST: {
            return {
                chats: {
                    ...state.chats,
                    [action.payload.name]: action.payload,
                }
            }
        }
        case REMOVE_FROM_CHATS_LIST: {
            if (!action.payload) {
                return state
            };
            const chats = {...state.chats};
            delete chats[action.payload];
            // delete state[chats];
            return {
                chats
                // state
            }
        }
        default: {
            return state
        }
    }
};
