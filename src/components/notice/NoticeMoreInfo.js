import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './NoticeMoreInfo.module.scss';
import { Link, withRouter } from 'react-router-dom';

import { notices } from '../mockup_data';


const subNavbarLinks = [
  {
    to: '/owner',
    title: 'Właściciel'
  }
];

class NoticeMoreInfo extends Component {

  render() {
    console.log(this.props.match);
    return (
      <div>
        <Link to={`${this.props.match.params.id}/owner`}>Właściciel</Link>
        Wiecęj informacji
        Wiecęj informacjiWiecęj informacjiWiecęj informacjiWiecęj informacji
      </div>
    )
  }
}

export default withRouter(CSSModules(NoticeMoreInfo, styles));
