import React, { Component } from 'react'
import PersonList from './PersonList';
import { contacts } from '../mockup_data';
import CSSModules from 'react-css-modules';
import styles from './Contacts.module.scss';

class Contacts extends Component {
  render() {
    return (
      <div styleName="contacts">
        <h2>Kontakty</h2>
        <PersonList conversations={contacts} match={this.props.match} />
      </div>
    )
  }
}

export default CSSModules(Contacts, styles);
