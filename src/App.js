import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.module.scss';

import Header from './components/layout/Header';

class App extends Component {
  render() {
    return (
      <div styleName="app">
        WOOFIE
      </div>
    );
  }
}

export default CSSModules(App, styles);
