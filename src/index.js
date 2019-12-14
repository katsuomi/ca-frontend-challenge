import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './slick.css';
import TopComponent from './components/TopComponent';
import SeriesShowComponent from './components/SeriesShowComponent';
import BooksShowComponent from './components/BooksShowComponent';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './configureStore';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TopComponent} /> 
          <Route exact path="/series/:id" component={SeriesShowComponent} /> 
          <Route exact path="/books/:id" component={BooksShowComponent} /> 
        </Switch>
      </BrowserRouter>
    </PersistGate>
  </Provider>, 
  document.getElementById('root')
);
serviceWorker.unregister();

