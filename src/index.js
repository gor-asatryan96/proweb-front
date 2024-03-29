import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './template/App';
import { store } from './redux/store';
import * as serviceWorker from './serviceWorker';
import './assets/styles/index.scss';
import TranslationProvider from './context/TranslationProvider';
import { setupAxios } from './api/axios';

setupAxios();

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <TranslationProvider>
        <App />
      </TranslationProvider>
    </Provider>
  </BrowserRouter>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
