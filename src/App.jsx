import { RouterProvider } from 'react-router-dom';
import RootRouter from '@src/pages/router';
import { Provider } from 'react-redux';
import { store } from './services/store';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={RootRouter} />;
    </Provider>
  );
}

export default App;
