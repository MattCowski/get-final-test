import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, browserHistory } from 'react-router';
import './index.css';
import App from './containers/App';
import reducer from './reducers'

let store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


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
