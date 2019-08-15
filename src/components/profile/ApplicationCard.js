import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from '../common/Image';
import DateTimeLine from '../common/DateTimeLine';

import CSSModules from 'react-css-modules';
import styles from './ApplicationCard.module.scss';

function parseStatus(status) {
  switch (status) {
    case "DURING": return "W trakcie";
    case "PENDING": return "Oczekiwanie na odpowiedź";
    case "ACCEPTED": return "Zaakceptowane";
    case "CLOSED": return "Odrzucono";
    default: return "Zgłoszenie przetwarzane";
  }
}

class ApplicationCard extends Component {
  render() {
    const { status, applicationDate, announcement } = this.props.application;
    const { pets } = announcement;
    console.log(this.props.application);
    return (
      <div styleName="application">
        <div styleName="application__info">
          <p styleName="application__date-title">Wysłano</p>
          <p styleName="application__date">{applicationDate}</p>
          <button styleName="application__cancel-button">Anuluj zgłoszenie</button>
          <p styleName="application__status">
            {parseStatus(status)}
          </p>
        </div>
        <div styleName="application__details">
          <Image imageSrc={pets[0].image} width={300} height={200} />
          <div styleName="application__details__info">

            <div styleName="application__details__info__location">
              <p styleName="application__details__info__location__title">
                Miejsce:
                <span styleName="application__details__info__location__city">{announcement.city},</span>
                <span styleName="application__details__info__location__street">ul.{announcement.street}</span>
              </p>
            </div>
            <hr styleName="application__details__selector" />
            <DateTimeLine dateFrom={announcement.keepingDateFrom} dateTo={announcement.keepingDateTo} />

            <hr styleName="application__details__selector" />
            <div styleName="application__details__info__reward">
              <p styleName="application__details__info__reward__title">
                Wynagrodzenie:
                <span styleName="application__details__info__reward__amount">{announcement.reward}zł</span>
              </p>
            </div>
            <Link to={`#`}>
              <div className="button" styleName="application__details__info__more-info-button">Szczegóły</div>
            </Link>
          </div>
          <button className="button" styleName="application__message-button">Napisz do właściciela</button>
        </div>

      </div>
    )
  }
}

export default CSSModules(ApplicationCard, styles);