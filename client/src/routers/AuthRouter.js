import { Redirect, Route, Switch } from 'react-router-dom';

// pages
import Login from '../pages/Login';
import Register from '../pages/Register';

const AuthRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/authentication/login" component={Login} />
        <Route exact path="/authentication/register" component={Register} />
        <Redirect to="/authentication/login" />
      </Switch>
    </div>
  );
};

export default AuthRouter;
