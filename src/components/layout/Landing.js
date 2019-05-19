import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './Navbar';
import NoticeList from '../notice/NoticeList';

import messegesIcon from '../../img/icons/messeges.png';
import noticeIcon from '../../img/icons/notice.png';
import accountIcon from '../../img/icons/account.png';

import CSSModules from 'react-css-modules';
import styles from './Landing.module.scss';

import NoticeMoreInfo from '../notice/NoticeMoreInfo';

const navLinkList = [
  {
    to: "/communicator",
    icon: messegesIcon,
    text: "Wiadomości"
  },
  {
    to: "/notices",
    icon: noticeIcon,
    text: "Dodaj ogłoszenie"
  },
  {
    to: "/account",
    icon: accountIcon,
    text: "Konto"
  }
];


class Landing extends Component {

  render() {
    return (
      <div styleName="panel">

        <div styleName="panel__content">
          <Route
            exact path={`${this.props.match.url}`}
            component={() => <NoticeList match={this.props.match} />}
          />
        </div>
      </div>
    )
  }
}

export default CSSModules(Landing, styles);