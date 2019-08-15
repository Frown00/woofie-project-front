import React, { Component } from 'react'
import ProfileNavbar from './ProfileNavbar';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CSSModules from 'react-css-modules';
import styles from './PetsList.module.scss';
import { users } from '../mockup_data';
import Pet from './Pet';

class PetsList extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }


  render() {
    const pets = this.props.oauth.user.petList;
    let petList = '';
    if (pets.length === 0) {
      petList = <div>Nie masz żadnego dodanego zwierzęcia</div>
    }
    else {
      petList =
        <ul styleName="pet-list">
          {
            pets.map((pet, key) =>
              <li styleName="pet-list__item" key={key}>
                <Pet pet={pet} />
              </li>
            )
          }
        </ul>

    }
    console.log(this.props.match);

    return (
      <div styleName="pets-page">
        <ul styleName="profile-navbar">
          <li onClick={this.goBack} styleName="profile-navbar__item go-back">
            Powrót
          </li>
        </ul>

        <h2>Moje zwierzęta</h2>
        <Link to={`${this.props.match.url}/add`}>
          <button styleName="pets-page__add-button">Dodaj zwierzę</button>
        </Link>
        {petList}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  oauth: state.oauth,
})

export default connect(mapStateToProps)
  (
    withRouter(CSSModules(PetsList, styles, { allowMultiple: true }))
  )