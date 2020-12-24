import {
  CREATE_PROJECT_FAIL,
  CREATE_PROJECT_INIT,
  CREATE_PROJECT_SUCCESS
} from '../../constants';

// initial state
const initialState = {
  loading: false,
  projects: [],
  project: null
};

export default function ProjectsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_PROJECT_INIT:
      return {
        ...state,
        loading: true
      };
    case CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: [action.payload, ...state.projects],
        loading: false
      };
    case CREATE_PROJECT_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
