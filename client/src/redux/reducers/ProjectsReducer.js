import {
  CREATE_PROJECT_FAIL,
  CREATE_PROJECT_INIT,
  CREATE_PROJECT_SUCCESS,
  GET_PROJECTS_FAIL,
  GET_PROJECTS_INIT,
  GET_PROJECTS_SUCCESS,
  REMOVE_PROJECT_FAIL,
  REMOVE_PROJECT_INIT,
  REMOVE_PROJECT_SUCCESS,
  SET_PROJECT_SUCCESS
} from '../../constants';

// initial state
const initialState = {
  loading: false,
  projects: [],
  active: null
};

export default function ProjectsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_PROJECT_INIT:
    case GET_PROJECTS_INIT:
    case REMOVE_PROJECT_INIT:
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
    case SET_PROJECT_SUCCESS:
      return {
        ...state,
        active: state.projects.find(project => project._id === action.payload)
      };
    case REMOVE_PROJECT_SUCCESS:
      return {
        ...state,
        active: null,
        projects: [...state.projects].filter(
          project => project._id !== action.payload
        )
      };
    case CREATE_PROJECT_FAIL:
    case GET_PROJECTS_FAIL:
    case REMOVE_PROJECT_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
