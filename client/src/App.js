import { Provider } from 'react-redux';

// store
import Store from './redux/store';

// routers
import MainRouter from './routers/MainRouter';

function App() {
  return (
    <Provider store={Store}>
      <MainRouter />
    </Provider>
  );
}

export default App;
