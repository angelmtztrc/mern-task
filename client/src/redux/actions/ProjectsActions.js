import Swal from 'sweetalert2';
import AxiosInstance from '../../config/axios';

// constants
import {
  CREATE_PROJECT_FAIL,
  CREATE_PROJECT_INIT,
  CREATE_PROJECT_SUCCESS
} from '../../constants';

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
