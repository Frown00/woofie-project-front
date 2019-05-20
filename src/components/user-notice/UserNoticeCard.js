import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';

class UserNoticeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    console.log(this.props.match.url);
    return (
      <div>
        Karta
        <br />
        <Link to={`${this.props.match.url}/${this.props.noticeInfo.id}/manage`}>Zarządzaj</Link>
        <br />
        <Link to={`${this.props.match.url}/${this.props.noticeInfo.id}/applications`}>Zgłoszenia</Link>
      </div>
    )
  }
}

export default UserNoticeCard;