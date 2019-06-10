import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { messages } from '../mockup_data';
import ConversationMessage from './ConversationMessage';
import Image from '../common/Image';
import CSSModules from 'react-css-modules';
import styles from './Conversation.module.scss';
import TextAreaField from '../common/form/TextareaField';

class Conversation extends Component {


  render() {
    const { person, conversation } = messages.filter((msg) => msg.conversation.id.toString() === this.props.match.params.id.toString())[0];
    const personInfo =
      <div styleName="person">
        <div styleName="person__image">
          <Image imageSrc={person.image} width={100} height={100} />
        </div>
        <div styleName="person__info">
          <p>
            {person.name}
          </p>
        </div>
      </div>
    const messagesList =
      <div styleName="message-list">
        {conversation.messages.map((msg, key) =>
          <div>
            <ConversationMessage key={key} message={msg} isCurrentUser={msg.userId === 1000} />
          </div>
        )}
      </div>
    return (
      <div styleName="conversation">
        {personInfo}
        {messagesList}
        <form styleName="conversation__send-message">
          <TextAreaField
            name="message"
            placeholder="Napisz coś..."
            rows={2}
            minRows={2}
            maxRows={10}
            noRadius={true}
          />
          <button styleName="send-button">Wyślij</button>
        </form>
      </div>
    )
  }
}

export default withRouter(CSSModules(Conversation, styles));