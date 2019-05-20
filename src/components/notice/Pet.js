import React, { Component } from 'react'
import Image from '../common/Image';
import CSSModules from 'react-css-modules';
import styles from './Pet.module.scss';

class Pet extends Component {
  render() {
    return (
      <div styleName="pet">
        <div styleName="pet__image">
          <Image imageSrc={this.props.pet.image} width={100} height={100} />
        </div>
        <p styleName="pet__name">{this.props.pet.name}</p>
        <p styleName="pet__breed">{this.props.pet.breed}</p>
      </div>
    )
  }
}

export default CSSModules(Pet, styles);