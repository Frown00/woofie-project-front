import React, { Component } from 'react'
import { Route, Link, Redirect, withRouter } from 'react-router-dom';
import SubNavbar from '../common/SubNavbar';
import Messages from './Messages';
import Contacts from './Contacts';
import Conversation from './Conversation';

const subNavbarLinks = [
  {
    to: '/messages',
    title: 'Wiadomości'
  },
  {
    to: '/contacts',
    title: 'Kontakty'
  },
]


class MessagesPage extends Component {

  redirect = () => {
    this.props.history.push(`${this.props.match.url}/messages`);
  }


  render() {
    return (
      <div>
        <SubNavbar links={subNavbarLinks} match={this.props.match} />
        <Route
          exact path={`${this.props.match.url}`}
          component={Messages}
        />
        <Route
          path={`${this.props.match.url}/messages`}
          component={() => <Messages match={this.props.match} />}
        />
        <Route
          path={`${this.props.match.url}/contacts`}
          component={() => <Contacts match={this.props.match} />}
        />
        <Route
          path={`${this.props.match.url}/conversations/:id`}
          component={() => <Conversation match={this.props.match} />}
        />
      </div>
    )
  }
}

export default MessagesPage;
