import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './Pet.module.scss';
import Image from '../common/Image';
import defaultDog from '../../img/images/default_dog.png';
import defaultCat from '../../img/images/default_cat.png';
import defaultHamster from '../../img/images/default_hamster.png';
import defaultPet from '../../img/images/default_pet.png';

function Pet(props) {
  let defaultImage;
  switch (props.pet.speciesName) {
    case "Pies": defaultImage = defaultDog; break;
    case "Kot": defaultImage = defaultCat; break;
    case "Chomik": defaultImage = defaultHamster; break;
    default: defaultImage = defaultPet;
  }
  return (
    <div styleName="pet">
      <div styleName="pet__image">
        <Image imageSrc={props.pet.image ? props.pet.image : defaultImage} width={120} height={120} />
      </div>
      <p styleName="pet__name">{props.pet.name}</p>
      <p styleName="pet__breed">{props.pet.breed}</p>
      <button styleName="pet__edit-button">Edytuj</button>
    </div>
  )
}

export default CSSModules(Pet, styles);
