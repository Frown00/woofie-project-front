import React, { Component } from 'react'
import { Route, Link, Redirect } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './ApplicationList.module.scss';

class ApplicationList extends Component {
  render() {
    return (
      <div>
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
        <h2>Zgłoszenia</h2>
      </div>
    )
  }
}

export default CSSModules(ApplicationList, styles);