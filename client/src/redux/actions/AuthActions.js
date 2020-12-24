import Swal from 'sweetalert2';

// axios
import AxiosInstance from '../../config/axios';

// constants
import {
  AUTH_USER_FAIL,
  AUTH_USER_INIT,
  AUTH_USER_SUCCESS,
  CHECK_USER_FAIL,
  CHECK_USER_INIT,
  CHECK_USER_SUCCESS
} from '../../constants';

export const authenticateAction = credentials => {
  return async dispatch => {
    // initialize the action
    dispatch(authenticateInit());
    try {
      // make the request
      const { data } = await AxiosInstance.post('authentication', {
        ...credentials
      });

      // send token to local storage
      localStorage.setItem('x-auth-token', data.data.token);
      localStorage.setItem('x-auth-token-init', new Date().getTime());

      // save user in the store
      dispatch(authenticateSuccess(data.data.user));
    } catch (error) {
      dispatch(authenticateFail());
      Swal.fire({
        title: 'Oops...',
        text: error.response.data.error,
        icon: 'error',
        confirmButtonText: 'Try again'
      });
    }
  };
};

const authenticateInit = () => ({
  type: AUTH_USER_INIT
});

const authenticateSuccess = user => ({
  type: AUTH_USER_SUCCESS,
  payload: user
});

const authenticateFail = () => ({
  type: AUTH_USER_FAIL
});

export const checkAuthAction = () => {
  return async dispatch => {};
};

const checkAuthInit = () => ({
  type: CHECK_USER_INIT
});

const checkAuthSuccess = user => ({
  type: CHECK_USER_SUCCESS,
  payload: user
});

const checkAuthFail = () => ({
  type: CHECK_USER_FAIL
});
