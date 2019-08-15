import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import checkToken from './utils/checkToken';
import 'normalize.css';

import CSSModules from 'react-css-modules';
import styles from './App.module.scss';

import store from './store';
import PrivateRoute from './components/common/PrivateRoute';

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
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const navLinkList = [
  {
    to: "/communicator",
    icon: messagesIcon,
    text: "Wiadomości"
  },
  {
    to: "/my-announcements",
    icon: noticeIcon,
    text: "Ogłoszenia"
  },
  {
    to: "/account",
    icon: accountIcon,
    text: "Konto"
  }
];

checkToken();

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
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/announcements" component={NoticeLandingPage} />
              <PrivateRoute path="/communicator" component={MessagesPage} />
              <PrivateRoute path="/my-announcements" component={NoticesPage} />
              <PrivateRoute path="/account" component={ProfilePage} />
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
