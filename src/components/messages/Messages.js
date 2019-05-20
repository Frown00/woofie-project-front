import React, { Component } from 'react'
import PersonList from './PersonList';
import { Route, withRouter } from 'react-router-dom';
import { messages } from '../mockup_data';
import Conversation from './Conversation';

class Messages extends Component {
  render() {
    return (
      <div>
        <h2>Wiadomości</h2>
        <PersonList conversations={messages} match={this.props.match} />

      </div>
    )
  }
}

export default Messages;
