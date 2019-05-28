import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './ConversationMessage.module.scss';

function ConversationMessage(props) {
  const { body, createdAt } = props.message;
  const isCurrentUserMsg = props.isCurrentUser;
  if (isCurrentUserMsg) {
    return (
      <div styleName="user-message-container">
        <div styleName="user-message">
          <p styleName="user-message__body">{body}</p>
          <p styleName="user-message__date">{createdAt}</p>
        </div>
      </div>

    )
  }
  else {
    return (
      <div styleName="message">
        <p styleName="message__body">{body}</p>
        <p styleName="message__date">{createdAt}</p>
      </div>
    )
  }

}

export default CSSModules(ConversationMessage, styles);