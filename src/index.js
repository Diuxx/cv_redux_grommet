import React from 'react';
import ReactDOM from 'react-dom';
import translations from './translations/translation'
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import { createStore, combineReducers } from 'redux'

import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

// router
import { BrowserRouter as Router } from 'react-router-dom';

// app
import App from './App';
// app css
import '../src/index.css';

let defaultLocale = localStorage.getItem('defaultLocale') ;
if(defaultLocale === null)
{
  defaultLocale = 'en' ;
  localStorage.setItem('defaultLocale', 'en') ;
}

console.log(defaultLocale) ;

let reducers = combineReducers(Object.assign({}, { Intl }))
let store = createStore(reducers, { Intl: { locale: defaultLocale }}) ;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <IntlProvider translations={translations}>
        <Router>
          <App />
        </Router>
      </IntlProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// <Provider store={store}></Provider>
serviceWorker.unregister();
