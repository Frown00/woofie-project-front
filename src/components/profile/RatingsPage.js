import React, { Component } from 'react'
import SubNavbar from '../common/SubNavbar';

export default class RatingsPage extends Component {
  render() {
    return (
      <div>
        <SubNavbar links={this.props.subNavbarLinks} match={this.props.match} />
        <h2>Oceny</h2>
      </div>
    )
  }
}
