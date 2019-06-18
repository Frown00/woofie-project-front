import React, { Component } from 'react';
import { notices } from '../mockup_data';
import NoticeCard from './NoticeCard';


import CSSModules from 'react-css-modules';
import styles from './NoticeList.module.scss';
import axios from 'axios';
import isEmpty from '../../validation/isEmpty';

class NoticeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      announcements: null,
      isLoading: false
    }

    this.getNoticeById = this.getNoticeById.bind(this);
  }

  getNoticeById(id) {
    return this.state.notices.filter((notice) => notice.id !== id)[0];
  }

  componentDidMount() {
    axios.get('http://localhost:8080/announcements/getAll')
      .then((res) => this.setState({ announcements: res.data }))

  }
  render() {
    let announcementList = <div>Loading...</div>
    const announcements = this.state.announcements;
    if (this.state.announcements !== null && this.state.announcements !== undefined) {
      console.log(announcements)
      announcementList =
        <ul styleName="notice-list">
          {
            this.state.announcements.map((announcement, key) =>
              <li styleName="notice-list__item" key={key}>
                <NoticeCard notice={announcement} match={this.props.match} />
              </li>
            )
          }

        </ul>
    }

    return (
      <div styleName="panel">
        <div styleName="panel__filter-button" className="button button-secondary">Filtry</div>
        <div styleName="notice-list-container">
          {announcementList}
        </div>

      </div>
    )
  }
}

export default CSSModules(NoticeList, styles);