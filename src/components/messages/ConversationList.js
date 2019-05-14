import React from 'react'
import { Link } from 'react-router-dom';
import Person from './Person';

import CSSModules from 'react-css-modules';
import styles from './ConversationList.module.scss';

function ConversationList(props) {

  const conversationList =
    <ul styleName="conversation-list">
      {
        props.conversations.map((conversation, key) => {
          return (
            <Link to="#" key={key} styleName="conversation-list__item">
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

export default CSSModules(ConversationList, styles);