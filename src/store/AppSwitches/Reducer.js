import { 
    appDarkTheme,
    aquariumStatus,
    countdownForLetterRequest, 
    emailVerificationConfirmationWaitingIsFalse, 
    emailVerificationConfirmationWaitingIsTrue, 
    lastAuthorization,
    valueInChatsListInput
} from './Action';

const initialState = {};

export const statusesInTheAppReducer = (state = initialState, action) => {
    switch(action.type) {
        case emailVerificationConfirmationWaitingIsTrue.type: {
            return {
                ...state, 
                isEmailVerificationConfirmationWaiting: true,
            }
        }
        case emailVerificationConfirmationWaitingIsFalse.type: {
            return {
                ...state, 
                isEmailVerificationConfirmationWaiting: false,
            }
        }
        case countdownForLetterRequest.type: {
            return {
                ...state, 
                countdownForLetterRequestIsNumber: action.payload,
            }
        }
        case lastAuthorization.type: {
            return {
                ...state,
                lastAuthorizationDateAndTime: action.payload,
            }
        }
        case valueInChatsListInput.type: {
            return {
                ...state,
                valueInChatsListInputIs: action.payload,
            }
        }
        case aquariumStatus.type: {
            return {
                ...state,
                isAquariumOpen: action.payload,
            }
        }
        case appDarkTheme.type: {
            return {
                ...state,
                isDarkTheme: action.payload,
            }
        }
        default: {
            return state
        }
    }
};
