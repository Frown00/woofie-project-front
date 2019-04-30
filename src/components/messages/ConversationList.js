import React from 'react'
import { Link } from 'react-router-dom';
import Person from './Person';

export default function ConversationList(props) {

  const conversationList =
    <ul>
      {
        props.conversations.map((conversationList, key) => {
          return (
            <Link to="#" key={key}>
              <li>
                <Person person={conversationList.person} />
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
