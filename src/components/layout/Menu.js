import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './Menu.module.scss';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }

    this.toggleActivateHamburger = this.toggleActivateHamburger.bind(this);
  }

  toggleActivateHamburger() {
    this.setState((prevState, props) => ({
      isActive: !(prevState.isActive)
    }))
  }

  render() {
    return (
      <div styleName="menu">
        <button onClick={this.toggleActivateHamburger} styleName={`hamburger ${this.state.isActive ? "hamburger--active" : ""}`} aria-label="Menu">
          <span styleName="hamburger__container" tabIndex="-1">
            <span styleName="hamburger__bars"></span>
          </span>
        </button>
        <div styleName={`menu__content ${this.state.isActive ? "menu__content--active" : ""}`}>
          <nav styleName="menu__content__nav">
            <p styleName="menu__content__nav__title">Menu</p>
            <ul styleName="menu__content__links">
              <li styleName="menu__content__links__item" onClick={this.toggleActivateHamburger}>
                <Link to="/announcements"><p>Przejdź do ogłoszeń</p></Link>
              </li>
              <li styleName="menu__content__links__item" onClick={this.toggleActivateHamburger}>
                <Link to="/my-announcements/add"><p>Dodaj ogłoszenie</p></Link>
              </li>
              <li styleName="menu__content__links__item" onClick={this.toggleActivateHamburger}>
                <Link to="/my-announcements/published"><p>Moje ogłoszenia</p></Link>
              </li>
              <li styleName="menu__content__links__item" onClick={this.toggleActivateHamburger}>
                <Link to="/communicator/messages"><p>Wiadomości</p></Link>
              </li>
              <li styleName="menu__content__links__item" onClick={this.toggleActivateHamburger}>
                <Link to="/account"><p>Konto</p></Link>
              </li>
              <li styleName="menu__content__links__item" onClick={this.toggleActivateHamburger}>
                <Link to="/account/profile/pets/add"><p>Dodaj zwierzę</p></Link>
              </li>
              <li styleName="menu__content__links__item" onClick={this.toggleActivateHamburger}>
                <Link to="/account/profile/pets"><p>Moje zwierzęta</p></Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default CSSModules(Menu, styles, { allowMultiple: true });