import React, { Component } from 'react'
import UserNoticeCard from './UserNoticeCard';
import { userNotices } from '../mockup_data';
import { withRouter } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './UserNotices.module.scss';

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
        <ul styleName="user-notices__list">
          {
            this.state.notices.map((notice, key) =>
              <li key={key} styleName="user-notices__list__item">
                <UserNoticeCard
                  noticeId={notice.id} noticeInfo={notice} match={this.props.match} />
              </li>
            )
          }
        </ul>
    return (
      <div styleName="user-notices">
        <h2 styleName="user-notices__title">Moje ogłoszenia</h2>
        {userNotices}
      </div>
    )
  }

}

export default withRouter(CSSModules(UserNotices, styles));
