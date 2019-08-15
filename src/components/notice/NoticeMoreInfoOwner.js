import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './NoticeMoreInfoOwner.module.scss';
import { notices } from '../mockup_data';
import Image from '../common/Image';
import PetList from './PetList';
import CommentList from './CommentList';
import NoticeApplyButtons from './NoticeApplyButtons';

class NoticeMoreInfoOwner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Janusz Kowalski",
      rating: 4.7,
      allRatings: [],
      phoneNumber: "",
      city: "",
      street: "",
      pets: [],
      avatar: null,
      buildingNumber: "",
      birthDate: "1987-10-10"
    }
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    // const notice = notices.filter((notice) => notice.id === this.props.match.params.id)[0];
    // const owner = notice.owner;
    // console.log(notice);
    // this.setState({
    //   name: owner.name,
    //   city: owner.city,
    //   rating: owner.rating,
    //   allRatings: owner.allRatings,
    //   pets: owner.pets,
    //   avatar: owner.avatar,
    //   birthDate: owner.birthDate
    // });
  }

  goBack() {
    this.props.history.goBack();
  }
  render() {
    const { name, avatar, rating, allRatings, city, pets, birthDate } = this.state;
    return (

      <div styleName="owner-info">
        <button styleName="owner-info__owner-button" onClick={this.goBack}>
          Wróć do ogłoszenia
        </button>
        <h2>Właściciel</h2>

        <div styleName="owner-info__container">
          <div styleName="owner-info__container__image">
            <Image imageSrc={avatar ? avatar : null} width={110} height={110} />
          </div>
          <div styleName="owner-info__container__header">
            <p styleName="owner-info__container__header__name">
              {name}
            </p>
            <p styleName="owner-info__container__header__place-title">Miejsce Zamieszkania</p>
            <p styleName="owner-info__container__header__place">{city}</p>
            <p styleName="owner-info__container__header__rating-container">
              <span styleName="owner-info__container__header__rating-container__rating">{rating}</span>
              <span styleName="owner-info__container__header__rating-container__count">{allRatings ? allRatings.length : ''} ocen</span>
            </p>
          </div>
        </div>
        <div styleName="owner-info__pets">
          <p styleName="owner-info__pets__title">
            Zwierzęta
          </p>
          <hr styleName="owner-info__selector" />
          <p styleName="owner-info__pets__content">
            <PetList pets={pets} />
          </p>
        </div>

        <div styleName="owner-info__comments">
          <p styleName="owner-info__comments__title">
            Ostatnie oceny
          </p>
          <hr styleName="owner-info__selector" />
          <div styleName="owner-info__comments__content">
            <CommentList comments={allRatings} />
          </div>
        </div>
        <NoticeApplyButtons />
      </div >

    )
  }
}

export default withRouter(CSSModules(NoticeMoreInfoOwner, styles));