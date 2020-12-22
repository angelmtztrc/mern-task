import { Redirect, Route, Switch } from 'react-router-dom';

// pages
import Login from '../pages/Login';
import Register from '../pages/Register';

const AuthRouter = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <Switch>
        <Route exact path="/authentication/login" component={Login} />
        <Route exact path="/authentication/register" component={Register} />
        <Redirect to="/authentication/login" />
      </Switch>
    </div>
  );
};

export default AuthRouter;
