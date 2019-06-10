import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { userNotices } from '../mockup_data';
import CSSModules from 'react-css-modules';
import styles from './ManageUserNotice.module.scss';
import Image from '../common/Image';
import DateTimeLine from '../common/DateTimeLine';

function getPetNames(pets) {
  return pets.map(pet => pet["specie"] + " " + pet["name"]).join(", ");
}

class ManageUserNotice extends Component {
  render() {
    const announcement = userNotices.filter((announcement) => announcement.id == this.props.match.params.id)[0];
    const { pets, keepingDateFrom, keepingDateTo } = announcement;
    console.log(announcement);
    const petNames = getPetNames(pets);
    return (
      <div styleName="announcement-manage">
        <h2>Zarządzanie</h2>
        <div styleName="announcement-manage__buttons">
          <button className="button" styleName="announcement-manage__edit-button">Edytuj</button>
          <button className="button" styleName="announcement-manage__delete-button">Usuń</button>
        </div>
        <div styleName="announcement-manage__image">
          <Image imageSrc={announcement.pets[0].image} width={300} height={200} />
        </div>
        <div styleName="announcement-manage__info">
          <p styleName="announcement-manage__name">{`${pets[0].specie} ${pets[0].name}`}</p>
          <p styleName="announcement-manage__breed">{`${pets[0].breed}`}</p>
          <div styleName="announcement-manage__datetime">
            <p styleName="announcement-manage__keeping">Okres opieki</p>
            <DateTimeLine dateFrom={keepingDateFrom} dateTo={keepingDateTo} />
          </div>
          <p styleName="announcement-manage__description">
            {pets[0].description}
          </p>
        </div>

      </div>
    )
  }
}

export default withRouter(CSSModules(ManageUserNotice, styles));