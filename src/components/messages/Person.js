import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Person.module.scss';

function Person(props) {

  const person = props.conversation.person;
  return (
    <div styleName="person">
      <div styleName="person__unread">{props.conversation.unread}</div>
      <div styleName="person__container">
        <img styleName="person__container__image"
          src={person.image}
          alt={person.name} />
        <div styleName="person__container__overlay">
          <p styleName="person__container__overlay__name">{person.name}</p>
        </div>
      </div>
    </div>
  )
}

export default CSSModules(Person, styles);