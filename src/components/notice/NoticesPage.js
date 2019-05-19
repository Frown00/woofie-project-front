import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SubNavbar from '../common/SubNavbar';

import AddNoticeForm from './AddNoticeForm';
import UserNotices from './UserNotices';

const subNavbarLinks = [
  {
    to: '/add',
    title: 'Dodaj ogłoszenie'
  },
  {
    to: '/published',
    title: 'Moje ogłoszenia'
  },
];

export default class NoticesPage extends Component {
  redirect = () => {
    this.props.history.push(`${this.props.match.url}/messages`);
  }

  render() {
    return (
      <div>
        <SubNavbar links={subNavbarLinks} match={this.props.match} />
        <Route
          exact path={`${this.props.match.url}`}
          component={AddNoticeForm}
        />
        <Route
          path={`${this.props.match.url}/add`}
          component={AddNoticeForm}
        />
        <Route
          path={`${this.props.match.url}/published`}
          component={UserNotices}
        />
      </div>
    )
  }
}
