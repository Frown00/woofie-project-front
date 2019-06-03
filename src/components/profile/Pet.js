import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './Pet.module.scss';
import Image from '../common/Image';

function Pet(props) {
  return (
    <div styleName="pet">
      <div styleName="pet__image">
        <Image imageSrc={props.pet.image} width={120} height={120} />
      </div>
      <p styleName="pet__name">{props.pet.name}</p>
      <p styleName="pet__breed">{props.pet.breed}</p>
      <button styleName="pet__edit-button">Edytuj</button>
    </div>
  )
}

export default CSSModules(Pet, styles);
