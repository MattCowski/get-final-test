import React from 'react';
import {render} from 'react-dom';
import App from './App';
import Transaction from './Transaction'

import './index.css';
import reducer from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, browserHistory } from 'react-router';

let store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() =>
  console.log(store.getState())
)
{/* <Transaction transaction={transaction}/> */}

const Root = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route exact path="/" component={App} />
        <Route exact path="/(:activityType)" component={App} />
    </Router>
  </Provider>
);

render(
  <Root />,
  document.getElementById('root')
);
