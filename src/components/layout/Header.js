import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authAction';

import CSSModules from 'react-css-modules';
import styles from './Header.module.scss';

import websiteLogo from '../../img/woofie_logo.png';

import Menu from './Menu';
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
class Header extends Component {

  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.oauth;

    const authButton =
      isAuthenticated ?
        <div>
          <div styleName="header__logout" onClick={this.logout}>Wyloguj się</div>
        </div>
        :
        <Link to="/login">
          <div styleName="header__login">Zaloguj się</div>
        </Link>
    console.log(isAuthenticated);
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
          {authButton}
        </div>

      </header>
    )
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  oauth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  oauth: state.oauth
});

export default connect(mapStateToProps, { logoutUser })(
  CSSModules(Header, styles)
);