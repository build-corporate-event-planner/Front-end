import { GET_START, GET_SUCCESS, GET_FAILED, GET_FRIEND } from "../actions/dataActions";

const initialState = {
	friends: [],
	friend: {},
    isLoading: false,
    errMsg: null
}

// Our reducer that handles the action(s)
export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    // action type FETCHING
    case GET_START: {
			return {
				...state,
				isLoading: true,
			}
    }
    // action type SUCCESS
		case GET_SUCCESS: {
			return {
                ...state,
                friends: action.payload,
				isLoading: false,
				errMsg: null
			}
		}
    // action type FAILURE
		case GET_FAILED: {
			return {
				...state,
				isLoading: false,
				errMsg: action.payload.message,
			}
		}
	// action type SUCCESS
		case GET_FRIEND: {
			return {
				...state,
				friend: action.payload,
				isLoading: false,
				errMsg: null
			}
		}
    default:
      return state;
  }
};
