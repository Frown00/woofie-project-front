import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserNoticeCard from './UserNoticeCard';
import { userNotices } from '../mockup_data';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import styles from './UserNotices.module.scss';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

class UserNotices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      announcements: []
    }
  }
  componentDidMount() {
    setAuthToken(localStorage.getItem('oauthToken'));
    const userId = this.props.oauth.user.id;
    axios.get(`http://localhost:8080/api/announcements/getByUserId?userId=${userId}`)
      .then((res) => {
        this.setState({
          announcements: res.data
        })
      })

  }
  render() {
    let userNotices =
      <div>
        Nie ma ogłoszeń
      </div>;
    if (this.state.announcements !== null && this.state.announcements !== undefined)
      userNotices =
        <ul styleName="user-notices__list">
          {
            this.state.announcements.map((announcement, key) =>
              <li key={key} styleName="user-notices__list__item">
                <UserNoticeCard
                  noticeId={announcement.id} noticeInfo={announcement} match={this.props.match} />
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

UserNotices.propTypes = {

  /** Required to check if user is currently log on*/
  oauth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  oauth: state.oauth,
})

export default connect(mapStateToProps)(
  withRouter(CSSModules(UserNotices, styles))
);

