import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED } from '../actions/loginActions';
import { LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_FAILED } from '../actions/loginActions';

const initialState = {
	isLoading: false,
  successfulLogin: false,
  errMsg: null
}

// Our reducer that handles the action(s)
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
		case LOGIN_START: {
			return {
				...state,
				isLoading: true,
			}
		}
		case LOGIN_SUCCESS: {
			return {
				...state,
				isLoading: false,
				successfulLogin: true,
				errMsg: null,
			}
		}
		case LOGIN_FAILED: {
			return {
				...state,
				isLoading: false,
				errMsg: action.payload.message,
			}
		}
		case LOGOUT_START: {
			return {
				...state,
				isLoading: true,
			}
		}
		case LOGOUT_SUCCESS: {
			return {
				...state,
				isLoading: false,
				errMsg: null,
			}
		}
		case LOGOUT_FAILED: {
			return {
				...state,
				isLoading: false,
				errMsg: action.payload.message,
			}
		}
    default:
      return state;
  }
};
