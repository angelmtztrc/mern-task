import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

// routers
import AuthRouter from './AuthRouter';
// pages
import Dashboard from '../pages/Dashboard';

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/authentication" component={AuthRouter} />
        <Route exact path="/" component={Dashboard} />
        <Redirect to="/authentication/login" />
      </Switch>
    </Router>
  );
};

export default MainRouter;
