import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/pl';

import CSSModules from 'react-css-modules';
import styles from './NoticeCard.module.scss';
import TimeLine from '../common/TimeLine';
import NoticeMoreInfo from '../notice/NoticeMoreInfo';
import Image from '../common/Image';
import Prompt from '../common/Prompt';

moment.locale('pl');

function getPetNames(pets) {
  return pets.map(pet => pet["name"]).join(", ");
}

class NoticeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayPrompt: false
    }
    this.handleAnswer = this.handleAnswer.bind(this);
    this.displayPrompt = this.displayPrompt.bind(this);

  }

  handleAnswer(e) {
    console.log(e.target.name);
    const answer = e.target.name;
    if (answer === "no") {
      this.setState({
        isDisplayPrompt: false
      })
    } else {
      // TODO
    }
  }

  displayPrompt() {
    this.setState({
      isDisplayPrompt: true
    })
  }

  render() {
    let backgroundImage;
    const notice = this.props.notice;
    const owner = this.props.notice.owner;
    const petNames = getPetNames(this.props.notice.pets);
    console.log(petNames);
    const image = this.props.notice.pets[0].image;
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
        <Prompt
          display={this.state.isDisplayPrompt ? "block" : "none"}
          question={`Czy na pewno chcesz zaopiekować się ${petNames}?`}
          yes="Zgłaszam się"
          no="Jednak nie"
          handleAnswer={this.handleAnswer}
        />
        <div styleName="notice__who">
          <div styleName="notice__who__pet">
            <p styleName="notice__who__pet__name">
              {petNames}
              <span styleName="notice__who__pet__rating">3.5</span>
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
          <Link
            to={{
              pathname: `${this.props.match.url}/${this.props.notice.id}`,
              state: {
                notice: this.props.notice
              }
            }}
          >
            <Image imageSrc={image} width={300} height={200} />
          </Link>

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
            <Link to={`${this.props.match.url}/${this.props.notice.id}`}>
              <div className="button" styleName="notice__details__info__more-info-button">Szczegóły</div>
            </Link>
          </div>
          <div
            onClick={this.displayPrompt}
            className="button button-primary"
            styleName="notice__details__info__button-submit">
            <span>Zgłoś się</span>
          </div>
        </div>

      </div>
    )
  }

}

export default withRouter(CSSModules(NoticeCard, styles));