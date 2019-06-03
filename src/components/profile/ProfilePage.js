import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

import SubNavbar from '../common/SubNavbar';
import RatingsPage from './RatingsPage';
import ApplicationList from './ApplicationList';
import EditProfile from './EditProfile';
import PetsList from './PetsList';
import AddPet from './AddPet';
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

const editProfile = [
  {
    to: 'BACK',
    title: 'Powrót'
  },
  {
    to: '/pets',
    title: 'Zwierzęta'
  },
]


export default class ProfilePage extends Component {

  redirect = () => {
    this.props.history.push(`${this.props.match.url}/messages`);
  }

  render() {
    return (
      <div>

        <Route
          exact path={`${this.props.match.url}`}
          component={() => <ApplicationList match={this.props.match} applications={applications} subNavbarLinks={subNavbarLinks} />}
        />
        <Route
          path={`${this.props.match.url}/applications`}
          component={() => <ApplicationList applications={applications} match={this.props.match} subNavbarLinks={subNavbarLinks} />}
        />
        <Route
          path={`${this.props.match.url}/ratings`}
          component={() => <RatingsPage profile={users[0]} match={this.props.match} subNavbarLinks={subNavbarLinks} />}
        />
        <Route
          exact path={`${this.props.match.url}/profile/edit`}
          component={() => <EditProfile profile={users[0]} match={this.props.match} />}
        />
        <Route
          exact path={`${this.props.match.url}/profile/edit/pets`}
          component={() => <PetsList profile={users[0]} match={this.props.match} />}
        />
        <Route
          exact path={`${this.props.match.url}/profile/pets`}
          component={() => <PetsList profile={users[0]} match={this.props.match} />}
        />
        <Route
          exact path={`${this.props.match.url}/profile/pets/add`}
          component={() => <AddPet profile={users[0]} match={this.props.match} />}
        />
      </div>
    )
  }
}
