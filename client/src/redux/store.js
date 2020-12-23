import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

// reducers
import reducers from './reducers';

// create store
const Store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),

    typeof window === 'object' &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

export default Store;
