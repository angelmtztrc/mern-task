// constants
import { AUTH_USER_INIT } from '../../constants';

// initial state
const initialState = {
  loading: false,
  user: null
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER_INIT:
      return { ...state, loading: true };
    default:
      return state;
  }
}
