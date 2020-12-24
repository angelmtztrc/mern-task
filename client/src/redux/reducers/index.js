import { combineReducers } from 'redux';

// reducers
import AuthReducer from './AuthReducer';
import ProjectsReducer from './ProjectsReducer';

// combine all reducers
export default combineReducers({
  authentication: AuthReducer,
  projects: ProjectsReducer
});
