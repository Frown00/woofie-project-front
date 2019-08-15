import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import Person from './Person';

import CSSModules from 'react-css-modules';
import styles from './PersonList.module.scss';

function PersonList(props) {

  const conversationList =
    <ul styleName="person-list">
      {
        props.conversations.map((conversation, key) => {
          return (
            <Link to={`${props.match.url}/conversations/${conversation.conversation.id}`} key={key} styleName="person-list__item">
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