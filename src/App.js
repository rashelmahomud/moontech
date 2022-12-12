import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './app/store';
import routes from './routes/Routes';
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={routes}>
        </RouterProvider>
      </Provider>
    </div>
  );
};

export default App;