import React, { Component } from 'react'
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
      <div>
        <button onClick={this.toggleActivateHamburger} styleName={`hamburger ${this.state.isActive ? "hamburger--active" : ""}`} aria-label="Menu">
          <span styleName="hamburger__container" tabIndex="-1">
            <span styleName="hamburger__bars"></span>
          </span>
        </button>
        <div styleName={`menu__content ${this.state.isActive ? "menu__content--active" : ""}`}>
          <div styleName="menu__content__links">
            Menu
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(Menu, styles, { allowMultiple: true });