import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import SubNavbar from '../common/SubNavbar';

import NoticeList from '../notice/NoticeList';
import NoticeMoreInfo from '../notice/NoticeMoreInfo';
import NoticeMoreInfoOwner from '../notice/NoticeMoreInfoOwner';
import CSSModules from 'react-css-modules';
import styles from './NoticeLandingPage.module.scss';

const subNavbarLinks = [
  {
    to: '/owner',
    title: 'Właściciel'
  }
];

class NoticeLandingPage extends Component {
  redirect = () => {
    this.props.history.push(`${this.props.match.url}/announcements`);
  }

  render() {
    return (
      <div styleName="panel">
        <div styleName="panel__content">
          <Route
            exact path={`${this.props.match.url}`}
            component={() => <NoticeList match={this.props.match} />}
          />
          <Route
            exact path={`${this.props.match.url}/:id`}
            component={() => <NoticeMoreInfo match={this.props.match} />}
          />
          <Route
            path={`${this.props.match.url}/:id/owner`}
            component={() => <NoticeMoreInfoOwner match={this.props.match} />}
          />
        </div>
      </div>
    )
  }
}

export default withRouter(CSSModules(NoticeLandingPage, styles));