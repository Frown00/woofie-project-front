import React from 'react'

export default function Person(props) {

  const person = props.person;

  return (
    <div styleName="person">
      <div>
        {person.name}
      </div>
    </div>
  )
}
