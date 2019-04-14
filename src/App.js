import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import CSSModules from 'react-css-modules';
import styles from './App.module.scss';

import store from './store';

import Header from './components/layout/Header';
import Landing from './components/layout/Landing';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Landing} />
            <Route path="/register" component={Landing} />

          </Switch>

        </Router>
      </Provider>


    );
  }
}

export default CSSModules(App, styles);
