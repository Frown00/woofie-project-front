import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'normalize.css';

import CSSModules from 'react-css-modules';
import styles from './App.module.scss';

import store from './store';

import Header from './components/layout/Header';
import Landing from './components/layout/Landing';
import MessagesPage from './components/messages/MessagesPage';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/communicator" component={MessagesPage} />

          </Switch>

        </Router>
      </Provider>


    );
  }
}

export default CSSModules(App, styles);
