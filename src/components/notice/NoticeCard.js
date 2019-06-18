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
import DateTimeLine from '../common/DateTimeLine';
import Badge from '../common/Badge';

import defaultDog from '../../img/images/default_dog.png';
import defaultCat from '../../img/images/default_cat.png';
import defaultHamster from '../../img/images/default_hamster.png';
import defaultPet from '../../img/images/default_pet.png';

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
    const owner = this.props.notice["user"];
    const pets = this.props.notice["petsList"];
    console.log(pets);

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
    console.log(image);
    // if (image) {
    //   backgroundImage = {
    //     backgroundImage: `url(${image}`,
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundPosition: 'center'
    //   }
    // }
    // else {
    //   backgroundImage = {
    //     background: 'whitesmoke'
    //   }
    // }

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
              <Badge isPet={true} rating={3.9} />
            </p>

          </div>
          <div styleName="notice__who__owner">
            <p styleName="notice__who__owner__title">Wystawiający</p>
            <p styleName="notice__who__owner__name">
              {owner.username}
              <Badge rating={4.2} />
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
                <span styleName="notice__details__info__location__street">ul.Warszawska</span>
              </p>
            </div>
            <hr styleName="notice__details__selector" />
            <DateTimeLine dateFrom={notice.keepingDateFrom} dateTo={notice.keepingDateTo} />

            <hr styleName="notice__details__selector" />
            <div styleName="notice__details__info__reward">
              <p styleName="notice__details__info__reward__title">
                Wynagrodzenie:
              <span styleName="notice__details__info__reward__amount">300zł</span>
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