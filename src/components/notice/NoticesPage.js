import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import SubNavbar from '../common/SubNavbar';

import AddNoticeForm from './AddNoticeForm';
import UserNotices from '../user-notice/UserNotices';
import ManageUserNotice from '../user-notice/ManageUserNotice';
import NoticeApplicationList from '../user-notice/NoticeApplicationList';

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

class NoticesPage extends Component {
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
          exact path={`${this.props.match.url}/published`}
          component={() => <UserNotices match={this.props.match} />}
        />
        <Route
          path={`${this.props.match.url}/published/:id/manage`}
          component={() => <ManageUserNotice match={this.props.match} />}
        />
        <Route
          path={`${this.props.match.url}/published/:id/applications`}
          component={() => <NoticeApplicationList match={this.props.match} />}
        />
      </div>
    )
  }
}

export default NoticesPage;
