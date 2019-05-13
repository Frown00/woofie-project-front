import React, { Component } from 'react'
import { Route, Link, Redirect } from 'react-router-dom';
import SubNavbar from '../common/SubNavbar';
import NotificationList from './NotificationList';
import RatingsPage from './RatingsPage';
import { users, applications } from '../mockup_data';

const subNavbarLinks = [
  {
    to: '/applications',
    title: 'Zgłoszenia'
  },
  {
    to: '/ratings',
    title: 'Oceny'
  },
]


export default class ProfilePage extends Component {

  redirect = () => {
    this.props.history.push(`${this.props.match.url}/messages`);
  }

  render() {
    console.log(this.props.match.url);
    return (
      <div>
        <SubNavbar links={subNavbarLinks} match={this.props.match} />
        <div>
          <h2>Profil</h2>
          <Link to={`${this.props.match.url}/profile/edit`}>Edytuj</Link>
          <Link to={`${this.props.match.url}/profile/pets`}>Moje zwierzęta</Link>
        </div>
        <Route
          exact path={`${this.props.match.url}`}
          component={() => <NotificationList applicationSent={applications} />}
        />
        <Route
          path={`${this.props.match.url}/applications`}
          component={NotificationList}
        />
        <Route
          path={`${this.props.match.url}/ratings`}
          component={RatingsPage}
        />
        <Route
          path={`${this.props.match.url}/profile/edit`}
          component={RatingsPage}
        />
        <Route
          path={`${this.props.match.url}/profile/pets`}
          component={RatingsPage}
        />
      </div>
    )
  }
}
