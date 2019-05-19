import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/pl';

import CSSModules from 'react-css-modules';
import styles from './NoticeCard.module.scss';
import TimeLine from '../common/TimeLine';
import NoticeMoreInfo from '../notice/NoticeMoreInfo';

moment.locale('pl');
function NoticeCard(props) {

  let backgroundImage;
  const notice = props.notice;
  const owner = props.notice.owner;
  const animal = props.notice.animal;
  const image = props.notice.animal.image;
  if (image) {
    backgroundImage = {
      backgroundImage: `url(${image}`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }
  }
  else {
    backgroundImage = {
      background: 'whitesmoke'
    }
  }



  return (
    <div styleName="notice">
      <div styleName="notice__who">
        <div styleName="notice__who__animal">
          <p styleName="notice__who__animal__name">
            {animal.name}
            <span styleName="notice__who__animal__rating">3.5</span>
          </p>

        </div>
        <div styleName="notice__who__owner">
          <p styleName="notice__who__owner__title">Wystawiający</p>
          <p styleName="notice__who__owner__name">
            {owner.name}
            <span styleName="notice__who__owner__rating">3.5</span>
          </p>
        </div>
      </div>

      <div styleName="notice__details">
        <div styleName="notice__details__image" style={backgroundImage}></div>
        <div styleName="notice__details__info">

          <div styleName="notice__details__info__location">
            <p styleName="notice__details__info__location__title">
              Miejsce:
              <span styleName="notice__details__info__location__city">{notice.city},</span>
              <span styleName="notice__details__info__location__street">ul.{notice.street}</span>
            </p>
          </div>
          <hr styleName="notice__details__selector" />
          <div styleName="notice__details__info__keeping">
            <div styleName="notice__details__info__keeping__date-from">
              <p styleName="date">{moment('2017-03-10').format('DD MMMM')}</p>
              <p styleName="time">{moment('2017-03-10 10:00').format("dddd h:mm")}</p>
            </div>
            <div styleName="notice__details__info__keeping__timeline">
              <TimeLine />
            </div>
            <div styleName="notice__details__info__keeping__date-to">
              <p styleName="date">{moment('2017-03-10').format('DD MMMM')}</p>
              <p styleName="time">{moment('2017-03-10 10:00').format("dddd h:mm")}</p>
            </div>
          </div>
          <hr styleName="notice__details__selector" />
          <div styleName="notice__details__info__reward">
            <p styleName="notice__details__info__reward__title">
              Wynagrodzenie:
            <span styleName="notice__details__info__reward__amount">{notice.reward}zł</span>
            </p>
          </div>
          <Link to={`${props.match.url}/${props.notice.id}`}>
            <div className="button" styleName="notice__details__info__more-info-button">Szczegóły</div>
          </Link>
        </div>
        <div
          className="button button-primary"
          styleName="notice__details__info__button-submit">
          <span>Zgłoś się</span>
        </div>

      </div>
    </div>
  )
}

export default withRouter(CSSModules(NoticeCard, styles));