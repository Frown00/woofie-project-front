import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './NoticeMoreInfo.module.scss';
import { Link, withRouter } from 'react-router-dom';

import { notices } from '../mockup_data';
import cityMap from '../../img/mockup_data/citymap.jpg';

import Image from '../common/Image';
import TimeLine from '../common/TimeLine';

import moment from 'moment';
import 'moment/locale/pl';

const subNavbarLinks = [
  {
    to: '/owner',
    title: 'Właściciel'
  }
];

class NoticeMoreInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      city: "",
      keepingDateFrom: '',
      keepingDateTo: '',
      owner: {},
      pets: [],
      remarks: '',
      reward: '',
      status: '',
      street: ''
    }
  }
  componentDidMount() {
    const notice = notices.filter((notice) => notice.id === this.props.match.params.id)[0];
    console.log(notice);
    this.setState({
      city: notice.city,
      keepingDateFrom: notice.keepingDateFrom,
      keepingDateTo: notice.keepingDateTo,
      owner: notice.owner,
      pets: notice.pets,
      remarks: notice.remarks,
      reward: notice.reward,
      status: notice.status,
      street: notice.street
    })
  }
  render() {
    const {
      city, keepingDateFrom, keepingDateTo, owner, pets,
      remarks, reward, status, street } = this.state;
    return (
      <div styleName="notice-info">
        <Link to={`${this.props.match.params.id}/owner`}>
          <div styleName="notice-info__owner-button">
            Właściciel
          </div>
        </Link>
        <div styleName="notice-info__container">
          <div styleName="notice-info__container__image">
            <Image imageSrc={pets[0] ? pets[0].image : null} width={110} height={110} />
          </div>
          <div styleName="notice-info__container__header">
            <p styleName="notice-info__container__header__name">
              {pets[0] ? pets[0].specie : ''} {pets[0] ? pets[0].name : ''}
            </p>
            <p styleName="notice-info__container__header__specie-title">Gatunek</p>
            <p styleName="notice-info__container__header__breed">{pets[0] ? pets[0].breed : ''}</p>
            <p styleName="notice-info__container__header__rating-container">
              <span styleName="notice-info__container__header__rating-container__rating">{pets[0] ? pets[0].rating : ''}</span>
              <span styleName="notice-info__container__header__rating-container__count">{pets[0] ? pets[0].allRatings.length : ''} ocen</span>
            </p>
          </div>
        </div>

        <div styleName="notice-info__keeping">
          <p styleName="notice-info__keeping__title">Okres opieki</p>
          <hr styleName="notice-info__selector" />
          <div styleName="notice-info__keeping__date">
            <div styleName="notice-info__keeping__date__from">
              <p styleName="date">{moment(keepingDateFrom).format('DD MMMM')}</p>
              <p styleName="time">{moment(keepingDateFrom).format("dddd HH:mm")}</p>
            </div>
            <div styleName="notice-info__keeping__date__timeline">
              <TimeLine />
            </div>
            <div styleName="notice-info__keeping__date__to">
              <p styleName="date">{moment(keepingDateTo).format('DD MMMM')}</p>
              <p styleName="time">{moment(keepingDateTo).format("dddd h:mm")}</p>
            </div>
          </div>
        </div>
        <div styleName="notice-info__description">
          <p styleName="notice-info__description__title">
            Opis
          </p>
          <hr styleName="notice-info__selector" />
          <p styleName="notice-info__description__content">
            {pets[0] ? pets[0].description : ''}
          </p>
        </div>
        <div styleName="notice-info__description">
          <p styleName="notice-info__description__title">
            Dodatkowe uwagi
          </p>
          <hr styleName="notice-info__selector" />
          <p styleName="notice-info__description__content">
            {remarks}
          </p>
        </div>
        <div styleName="notice-info__place">
          <p styleName="notice-info__place__title">
            Przybliżone miejsce spotkania
          </p>
          <hr styleName="notice-info__selector" />
          <div styleName="notice-info__place__image">
            <Image imageSrc={cityMap} width={300} height={200} />
          </div>
          <p styleName="notice-info__place__street">
            {city}, ul. {street}
          </p>
          <p styleName="notice-info__place__info">
            Aby poznać dokładną lokalizację należy skontakotwać się z właścicielem
          </p>
        </div>
      </div >
    )
  }
}

export default withRouter(CSSModules(NoticeMoreInfo, styles));
