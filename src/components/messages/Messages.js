import React, { Component } from 'react'
import ConversationList from './ConversationList';
import { messages } from '../mockup_data';

export default class Messages extends Component {
  render() {
    return (
      <div>
        <h2>Wiadomości</h2>
        <ConversationList conversations={messages} />
      </div>
    )
  }
}
