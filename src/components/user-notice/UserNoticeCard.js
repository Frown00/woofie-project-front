import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { userNotices } from '../mockup_data';
import 'moment/locale/pl';
import moment from 'moment';
import Image from '../common/Image';
import CSSModules from 'react-css-modules';
import styles from './UserNoticeCard.module.scss';

import defaultDog from '../../img/images/default_dog.png';
import defaultCat from '../../img/images/default_cat.png';
import defaultHamster from '../../img/images/default_hamster.png';
import defaultPet from '../../img/images/default_pet.png';

moment.locale('pl');

function getPetNames(pets) {
  return pets.map(pet => pet["name"]).join(", ");
}

class UserNoticeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const pets = this.props.noticeInfo["petsList"];
    const publishDate = this.props.noticeInfo["issueDate"];
    const endDate = this.props.noticeInfo["endDate"];
    const status = this.props.noticeInfo["status"];
    const keepingDateFrom = this.props.noticeInfo["dateFrom"];
    const keepingDateTo = this.props.noticeInfo["dateTo"];
    const applications = this.props.noticeInfo["applicationsId"];

    const petNames = getPetNames(pets);
    let image;
    if (pets[0].image === undefined || pets[0].image === null) {
      switch (pets[0].speciesName) {
        case "Pies": image = defaultDog; break;
        case "Kot": image = defaultCat; break;
        case "Chomik": image = defaultHamster; break;
        default: image = defaultPet;
      }
    }
    else {
      image = pets[0].image
    }
    let statusName = '';
    if (status === "ACTIVE") {
      statusName = "Aktywny"
    }
    else if (status === "CLOSED") {
      statusName = "Zakończono"
    } else if (status === "CANCELLED") {
      statusName = "Anulowano"
    }
    let publishDates = '';
    let bottomButton = '';
    if (endDate) {
      publishDates =
        <div styleName="user-notice__info__published">
          <div>
            <p>Ogłoszono</p>
            <p>
              {moment(publishDate).format('DD.MM.YY HH:mm')}
            </p>
          </div>
          <div>
            <p>Zakończono</p>
            <p>{moment(endDate).format('DD.MM.YY HH:mm')}</p>
          </div>
        </div>

      bottomButton =
        <Link to={`${this.props.match.url}/${this.props.noticeInfo.id}/details`}>
          <div styleName="user-notice__controls__details">
            Szczegóły
          </div>
        </Link>

    } else {
      publishDates =
        <div styleName="user-notice__info__published">
          <p>
            <p>Ogłoszono</p>
            <p>
              {moment(publishDate).format('DD.MM.YY HH:mm')}
            </p>

          </p>
        </div>
      bottomButton =
        <Link
          to={{
            pathname: `${this.props.match.url}/${this.props.noticeInfo.id}/applications`,
            state: {
              noticeInfo: this.props.noticeInfo,
              applications: this.props.noticeInfo.applications
            }
          }}
        >
          <div styleName="user-notice__controls__applications">
            Zgłoszenia <span styleName="user-notice__controls__applications__number">{applications.length}</span>
          </div>
        </Link>
    }
    return (
      <div styleName="user-notice">
        <div styleName="user-notice__info">
          <p styleName="user-notice__info__status">{statusName}</p>
          {/* <p styleName="user-notice__info__pets">{petNames}</p> */}
          {publishDates}
          {
            endDate ?
              '' :
              <Link to={`${this.props.match.url}/${this.props.noticeInfo.id}/manage`}>
                <div styleName="user-notice__info__manage-button">
                  Zarządzaj
                </div>
              </Link>
          }

        </div>

        <div styleName="user-notice__controls">
          <Image imageSrc={image} width={300} height={200} />
          {bottomButton}
        </div>
      </div>
    )
  }
}

export default CSSModules(UserNoticeCard, styles);