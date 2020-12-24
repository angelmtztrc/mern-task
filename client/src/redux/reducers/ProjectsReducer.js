import {
  CREATE_PROJECT_FAIL,
  CREATE_PROJECT_INIT,
  CREATE_PROJECT_SUCCESS,
  GET_PROJECTS_FAIL,
  GET_PROJECTS_INIT,
  GET_PROJECTS_SUCCESS
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
    case GET_PROJECTS_INIT:
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
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: [...action.payload]
      };
    case CREATE_PROJECT_FAIL:
    case GET_PROJECTS_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
