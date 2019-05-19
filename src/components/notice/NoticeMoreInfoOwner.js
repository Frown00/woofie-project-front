import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './NoticeMoreInfoOwner.module.scss';

class NoticeMoreInfoOwner extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }
  render() {
    return (
      <div>
        <button onClick={this.goBack}>Wróć do ogłoszenia</button>
        Właściciel
      </div>
    )
  }
}

export default withRouter(CSSModules(NoticeMoreInfoOwner, styles));