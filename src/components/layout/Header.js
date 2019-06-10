import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CSSModules from 'react-css-modules';
import styles from './Header.module.scss';

import websiteLogo from '../../img/woofie_logo.png';
import menuIcon from '../../img/icons/menu.png';

import Menu from './Menu';
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
class Header extends Component {
  static propTypes = {
    /** Description of prop "foo". */
    foo: PropTypes.number,
    /** Description of prop "baz". */
    baz: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }

  static defaultProps = {
    foo: 42
  }


  render() {
    return (
      <header>
        <div styleName="header">
          <div styleName="header__background"></div>
          <div styleName="header__hamburger">
            <Menu />
          </div>
          <Link to="/announcements">
            <img styleName="header__logo" src={websiteLogo} alt="logo" />
          </Link>
          <Link to="/login">
            <div styleName="header__login">Zaloguj się</div>
          </Link>
        </div>

      </header>
    )
  }
}


export default CSSModules(Header, styles);