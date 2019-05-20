import React, { Component } from 'react'
import PersonList from './PersonList';
import { contacts } from '../mockup_data';

export default class Contacts extends Component {
  render() {
    return (
      <div>
        <h2>Kontakty</h2>
        <PersonList conversations={contacts} match={this.props.match} />
      </div>
    )
  }
}
