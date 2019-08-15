import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Application.module.scss';
import Image from '../common/Image';
import Badge from '../common/Badge';
import Prompt from '../common/Prompt';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayAcceptPrompt: false,
      isDisplayDeclinePrompt: false
    }

    this.handleAcceptAnswer = this.handleAcceptAnswer.bind(this);
    this.handleDeclineAnswer = this.handleDeclineAnswer.bind(this);

    this.displayAcceptPrompt = this.displayAcceptPrompt.bind(this);
    this.displayDeclinePrompt = this.displayDeclinePrompt.bind(this);

  }

  handleAcceptAnswer(e) {
    const answer = e.target.name;
    if (answer === "no") {
      this.setState({
        isDisplayAcceptPrompt: false
      })
    } else if (answer === "yes") {
      // TODO
    }
  }

  handleDeclineAnswer(e) {
    const answer = e.target.name;
    if (answer === "no") {
      this.setState({
        isDisplayDeclinePrompt: false
      })
    } else if (answer === "yes") {
      // TODO
    }

  }

  displayAcceptPrompt() {
    this.setState({
      isDisplayAcceptPrompt: true
    })
  }

  displayDeclinePrompt() {
    this.setState({
      isDisplayDeclinePrompt: true
    })
  }

  render() {

    console.log(this.props.application);
    const user = this.props.application.user;
    console.log(user);
    return (
      <div styleName="application">
        <Prompt
          question="Czy na pewno chcesz wybrać tego opiekuna?"
          yes="Tak"
          no="Nie"
          handleAnswer={this.handleAcceptAnswer}
          display={this.state.isDisplayAcceptPrompt ? "block" : "none"}
        />
        <Prompt
          question="Czy na pewno chcesz odrzucić opiekuna?"
          yes="Tak"
          no="Nie"
          handleAnswer={this.handleDeclineAnswer}
          display={this.state.isDisplayDeclinePrompt ? "block" : "none"}
        />
        <div styleName="application__image">
          <Image imageSrc={user.avatar} width={100} height={100} />
        </div>
        <p styleName="application__name">{user.name}</p>
        <p styleName="application__city">{user.city}</p>
        <div styleName="application__rating">
          <p styleName="application__rating__title">Ocena</p>
          <div styleName="application__rating__container">
            <Badge rating={user.rating} />
            <p styleName="application__rating__quantity">{user.allRatings.length} ocen</p>
          </div>

        </div>
        <div styleName="application__buttons">
          <button onClick={this.displayAcceptPrompt} className="button" styleName="application__accept-button">Zaakceptuj</button>
          <button onClick={this.displayDeclinePrompt} className="button" styleName="application__decline-button">Odrzuć</button>
        </div>
      </div>
    )
  }
}

export default CSSModules(Application, styles);