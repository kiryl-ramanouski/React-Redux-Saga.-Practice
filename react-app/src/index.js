import React from 'react';
import ReactDOM from 'react-dom/client';

import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './Redux/rootReducer';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { forbiddenWordsMiddleware } from './Redux/middleware';
import { sagaWatcher } from './Redux/sagas';

const saga = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, forbiddenWordsMiddleware, saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

saga.run(sagaWatcher);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
