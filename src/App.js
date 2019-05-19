import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'normalize.css';

import CSSModules from 'react-css-modules';
import styles from './App.module.scss';

import store from './store';

import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import messagesIcon from './img/icons/messeges.png';
import noticeIcon from './img/icons/notice.png';
import accountIcon from './img/icons/account.png';

import MessagesPage from './components/messages/MessagesPage';
import NoticesPage from './components/notice/NoticesPage';
import ProfilePage from './components/profile/ProfilePage';
import NoticeMoreInfo from './components/notice/NoticeMoreInfo';
import NoticeLandingPage from './components/notice-landing/NoticeLandingPage';


const navLinkList = [
  {
    to: "/communicator",
    icon: messagesIcon,
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

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <div styleName="content">
            <Switch>
              <Route exact path="/">
                <Redirect to="/announcements" />
              </Route>
              <Route path="/announcements" component={NoticeLandingPage} />
              <Route path="/communicator" component={MessagesPage} />
              <Route path="/notices" component={NoticesPage} />
              <Route path="/account" component={ProfilePage} />
            </Switch>
            <div styleName="navbar-dom-substitute"></div>

          </div>
          <Navbar navLinks={navLinkList} />

        </Router>
      </Provider>


    );
  }
}

export default CSSModules(App, styles);
