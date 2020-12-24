import Swal from 'sweetalert2';
import AxiosInstance from '../../config/axios';

// constants
import {
  CREATE_PROJECT_FAIL,
  CREATE_PROJECT_INIT,
  CREATE_PROJECT_SUCCESS,
  GET_PROJECTS_INIT,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAIL
} from '../../constants';

// action - create project
export const createProjectAction = values => {
  return async dispatch => {
    dispatch(createProjectInit());

    try {
      // make the request
      const { data } = await AxiosInstance.post('projects', { ...values });

      // save in store
      dispatch(createProjectSuccess(data.data));
    } catch (error) {
      dispatch(createProjectFail());
      Swal.fire({
        title: 'Oops...',
        text: error.response.data.error,
        icon: 'error',
        confirmButtonText: 'Try again'
      });
    }
  };
};

const createProjectInit = () => ({
  type: CREATE_PROJECT_INIT
});
const createProjectSuccess = project => ({
  type: CREATE_PROJECT_SUCCESS,
  payload: project
});
const createProjectFail = () => ({
  type: CREATE_PROJECT_FAIL
});

// action - get project
export const getProjectsAction = () => {
  return async dispatch => {
    dispatch(getProjectsInit());

    try {
      // make the request
      const { data } = await AxiosInstance.get('projects');

      // save projects in the state
      dispatch(getProjectsSuccess(data.data));
    } catch (error) {
      dispatch(getProjectsFail());
      Swal.fire({
        title: 'Oops...',
        text: error.response.data.error,
        icon: 'error',
        confirmButtonText: 'Try again'
      });
    }
  };
};

const getProjectsInit = () => ({
  type: GET_PROJECTS_INIT
});
const getProjectsSuccess = projects => ({
  type: GET_PROJECTS_SUCCESS,
  payload: projects
});
const getProjectsFail = () => ({
  type: GET_PROJECTS_FAIL
});
