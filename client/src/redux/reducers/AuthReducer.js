// constants
import {
  AUTH_USER_FAIL,
  AUTH_USER_INIT,
  AUTH_USER_SUCCESS
} from '../../constants';

// initial state
const initialState = {
  loading: false,
  user: null
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER_INIT:
      return { ...state, loading: true };
    case AUTH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: { ...action.payload }
      };
    case AUTH_USER_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
