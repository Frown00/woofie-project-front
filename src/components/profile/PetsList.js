import React, { Component } from 'react'
import ProfileNavbar from './ProfileNavbar';

export default class PetsList extends Component {
  render() {
    return (
      <div>
        <ProfileNavbar match={this.props.match} />

        <h2>Moje zwierzęta</h2>
      </div>
    )
  }
}
