// constants
import {
  AUTH_USER_FAIL,
  AUTH_USER_INIT,
  AUTH_USER_SUCCESS,
  CHECK_USER_FAIL,
  CHECK_USER_INIT,
  CHECK_USER_SUCCESS
} from '../../constants';

// initial state
const initialState = {
  loading: false,
  user: null
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER_INIT:
    case CHECK_USER_INIT:
      return { ...state, loading: true };
    case AUTH_USER_SUCCESS:
    case CHECK_USER_SUCCESS:
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
    case CHECK_USER_FAIL:
      return {
        loading: false,
        user: null
      };
    default:
      return state;
  }
}
