import React, { Component } from 'react'
import UserNoticeCard from './UserNoticeCard';
import { userNotices } from '../mockup_data';
import { withRouter } from 'react-router-dom';


class UserNotices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notices: []
    }
  }
  componentDidMount() {
    this.setState({
      notices: userNotices
    })
  }
  render() {
    let userNotices =
      <div>
        Nie ma ogłoszeń
      </div>;
    if (this.state.notices !== null && this.state.notices !== undefined)
      userNotices =
        <ul>

          {
            this.state.notices.map((notice, key) =>
              <li key={key}>
                <UserNoticeCard
                  noticeId={notice.id} noticeInfo={notice} match={this.props.match} />
              </li>
            )
          }

        </ul>
    return (
      <div>
        <h2>Moje ogłoszenia</h2>
        {userNotices}
      </div>
    )
  }

}

export default withRouter(UserNotices);
