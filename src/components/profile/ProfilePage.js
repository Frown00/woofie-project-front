import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

import SubNavbar from '../common/SubNavbar';
import RatingsPage from './RatingsPage';
import ApplicationList from './ApplicationList';
import EditProfile from './EditProfile';
import PetsList from './PetsList';
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

        <Route
          exact path={`${this.props.match.url}`}
          component={() => <ApplicationList match={this.props.match} applications={applications} />}
        />
        <Route
          path={`${this.props.match.url}/applications`}
          component={() => <ApplicationList match={this.props.match} applications={applications} />}
        />
        <Route
          path={`${this.props.match.url}/ratings`}
          component={() => <RatingsPage match={this.props.match} profile={users[0]} />}
        />
        <Route
          path={`${this.props.match.url}/profile/edit`}
          component={() => <EditProfile profile={users[0]} />}
        />
        <Route
          path={`${this.props.match.url}/profile/pets`}
          component={() => <PetsList profile={users[0]} />}
        />
      </div>
    )
  }
}
