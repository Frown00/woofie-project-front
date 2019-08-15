import React, { Component } from 'react'
import PersonList from './PersonList';
import { Route, withRouter } from 'react-router-dom';
import { messages } from '../mockup_data';
import CSSModules from 'react-css-modules';
import styles from './Messages.module.scss';

class Messages extends Component {
  render() {
    return (
      <div styleName="messages">
        <h2>Wiadomości</h2>
        <PersonList conversations={messages} match={this.props.match} />

      </div>
    )
  }
}

export default CSSModules(Messages, styles);
