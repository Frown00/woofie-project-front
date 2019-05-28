import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import Person from './Person';

import CSSModules from 'react-css-modules';
import styles from './ConversationList.module.scss';

function PersonList(props) {

  const conversationList =
    <ul styleName="conversation-list">
      {
        props.conversations.map((conversation, key) => {
          return (
            <Link to={`${props.match.url}/conversations/${conversation.conversation.id}`} key={key} styleName="conversation-list__item">
              <li>
                <Person conversation={conversation} />
              </li>
            </Link>
          )
        })
      }

    </ul>
  return (
    <div>
      {conversationList}
    </div>
  )
}

export default CSSModules(PersonList, styles);