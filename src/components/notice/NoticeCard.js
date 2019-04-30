import React from 'react'


import CSSModules from 'react-css-modules';
import styles from './NoticeCard.module.scss';

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
    <div styleName="notice" style={backgroundImage}>
      <div styleName="notice__owner">
        <p styleName="notice__owner__paragraph">Wystawiający</p>
        <p styleName="notice__owner__name">{owner.name}</p>
      </div>
      <div
        className="button button-primary"
        styleName="notice__button-submit">
        <span>Zgłoś się</span>
      </div>
      <div styleName="notice__info">
        <div styleName="notice__info__animal">
          <p styleName="notice__info__animal__name">{animal.name}</p>
          <p styleName="notice__info__animal__specie">{animal.specie}</p>
          <p styleName="notice__info__animal__breed">{animal.breed}</p>
        </div>
        <div styleName="notice__info__location">
          <p styleName="notice__info__location__title">Lokalizacja</p>
          <p styleName="notice__info__location__city">{notice.city}</p>
          <p styleName="notice__info__location__street">ul.{notice.street}</p>
        </div>
        <div styleName="notice__info__keeping">
          <p styleName="notice__info__keeping__title">Data opieki</p>
          <p styleName="notice__info__keeping__date-from">{notice.keepingDateFrom}</p>
          <p styleName="notice__info__keeping__date-to">{notice.keepingDateTo}</p>
        </div>
        <div styleName="notice__info__reward">
          <p styleName="notice__info__reward__title">Nagroda</p>
          <p styleName="notice__info__reward__amount">{notice.reward}zł</p>
        </div>
      </div>
    </div>
  )
}

export default CSSModules(NoticeCard, styles);