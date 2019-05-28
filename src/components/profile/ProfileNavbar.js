import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './ProfileNavbar.module.scss';

class ProfileNavbar extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <ul styleName="profile-navbar">
        <li onClick={this.goBack} styleName="profile-navbar__item go-back">
          Powrót
        </li>
        <li>
          <Link to={`${this.props.match.url}/pets`} styleName="profile-navbar__item">
            Zwierzęta
          </Link>
        </li>

      </ul>
    )
  }
}

export default withRouter(CSSModules(ProfileNavbar, styles, { allowMultiple: true }));