import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise'

import reducers from './reducers';
import TargetIndex from './components/TargetIndex'
import NewTarget from './components/NewTarget'
import ShowTarget from './components/ShowTarget'
import EditTarget from './components/EditTarget'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/targets/new' component={NewTarget} />
          <Route path='/targets/edit' component={EditTarget} />
          <Route path='/targets/:id' component={ShowTarget} />
          <Route path='/' component={TargetIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
