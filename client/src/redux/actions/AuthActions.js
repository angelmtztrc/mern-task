// constants
import AxiosInstance from '../../config/axios';
import { AUTH_USER_INIT } from '../../constants';

export const authenticateAction = credentials => {
  return async dispatch => {
    // initialize the action
    dispatch(authenticateInit());
    try {
      const response = await AxiosInstance.post('users/', credentials);
      console.log(response);

      // make the request
    } catch (error) {
      console.log(error);
    }
  };
};

const authenticateInit = () => ({
  type: AUTH_USER_INIT
});
