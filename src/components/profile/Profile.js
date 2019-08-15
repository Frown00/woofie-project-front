import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './Profile.module.scss';

class Profile extends Component {
  render() {
    return (
      <div styleName="profile">
        <h2>Profil</h2>
        <div styleName="profile__buttons">
          <Link to={`${this.props.match.url}/profile/edit`}>
            <div styleName="profile__buttons__edit" className="button button-primary">Edytuj</div>
          </Link>
          <Link to={`${this.props.match.url}/profile/pets`}>
            <div styleName="profile__buttons__pets" className="button">Moje zwierzęta</div>
          </Link>
        </div>
      </div>
    )
  }
}

export default CSSModules(Profile, styles);
