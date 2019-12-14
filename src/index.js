import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TopComponent from './components/TopComponent';
import SeriesShowComponent from './components/SeriesShowComponent';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter,Route,Switch } from "react-router-dom";

const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={TopComponent} /> 
            <Route exact path="/series/:id" component={SeriesShowComponent} /> 
          </Switch>
      </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);
serviceWorker.unregister();
