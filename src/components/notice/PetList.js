import React, { Component } from 'react'
import Pet from './Pet';
import CSSModules from 'react-css-modules';
import styles from './PetList.module.scss';

class PetList extends Component {
  render() {
    const petList = this.props.pets.map((pet, key) =>
      <li styleName="pet-list__item" key={key}>
        <Pet pet={pet} />
      </li>
    )
    return (
      <ul styleName="pet-list">
        {petList}
      </ul>
    )
  }
}

export default CSSModules(PetList, styles);