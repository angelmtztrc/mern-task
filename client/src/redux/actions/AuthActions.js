// constants
import { AUTH_USER_INIT } from '../../constants';

export const authenticateAction = credentials => {
  return dispatch => {
    // initialize the action
    dispatch(authenticateInit());
    try {
      console.log(credentials);
      // make the request
    } catch (error) {
      console.log(error);
    }
  };
};

const authenticateInit = () => ({
  type: AUTH_USER_INIT
});
