import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// containers
import PrivateRoute from '../containers/PrivateRoute';
import PublicRoute from '../containers/PublicRoute';

// components
import Loading from '../components/Loading';

// pages
import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';
import Login from '../pages/Login';

// actions
import { checkAuthAction } from '../redux/actions/AuthActions';

const MainRouter = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector(state => state.authentication);

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path="/authentication/login"
          component={Login}
          isAuthenticated={!!user}
        />
        <PublicRoute
          exact
          path="/authentication/register"
          component={Register}
          isAuthenticated={!!user}
        />
        <PrivateRoute
          exact
          path="/"
          component={Dashboard}
          isAuthenticated={!!user}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default MainRouter;
