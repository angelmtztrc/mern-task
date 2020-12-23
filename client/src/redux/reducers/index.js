import { combineReducers } from 'redux';

// reducers
import AuthReducer from './AuthReducer';

// combine all reducers
export default combineReducers({
  authentication: AuthReducer
});
