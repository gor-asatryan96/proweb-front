import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './template/App';
import { store, persistor } from './redux/store';
import * as serviceWorker from './serviceWorker';
import './assets/styles/index.scss';
import LanguageProvider from './context/LanguageProvider';
import { setupAxios } from './api/axios';

setupAxios();

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <LanguageProvider>
            <App />
          </LanguageProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
