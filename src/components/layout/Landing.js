import React, { Component } from 'react'

import Navbar from './Navbar';
import NoticeList from '../notice/NoticeList';

import messegesIcon from '../../img/icons/messeges.png';
import noticeIcon from '../../img/icons/notice.png';
import accountIcon from '../../img/icons/account.png';

import CSSModules from 'react-css-modules';
import styles from './Landing.module.scss';

import { notices } from '../mockup_data';

const navLinkList = [
  {
    to: "/communicator",
    icon: messegesIcon,
    text: "Wiadomości"
  },
  {
    to: "/announcements/add",
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
        <div styleName="panel__filter-button" className="button button-secondary">Filtry</div>
        <div styleName="panel__content">
          <NoticeList />
        </div>
        <Navbar navLinks={navLinkList} />
      </div>
    )
  }
}

export default CSSModules(Landing, styles);