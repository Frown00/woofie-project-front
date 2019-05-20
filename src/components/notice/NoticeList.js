import React, { Component } from 'react';
import { notices } from '../mockup_data';
import NoticeCard from './NoticeCard';
import { Route, Link } from 'react-router-dom';
import NoticeMoreInfo from '../notice/NoticeMoreInfo';

import CSSModules from 'react-css-modules';
import styles from './NoticeList.module.scss';

class NoticeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notices: [],
      isLoading: false
    }

    this.getNoticeById = this.getNoticeById.bind(this);
  }

  getNoticeById(id) {
    return this.state.notices.filter((notice) => notice.id !== id)[0];
  }

  componentDidMount() {
    this.setState({
      notices
    });
  }
  render() {
    const noticeList =
      <ul styleName="notice-list">

        {
          this.state.notices.map((notice, key) =>
            <li styleName="notice-list__item" key={key}>
              <NoticeCard notice={notice} match={this.props.match} />
            </li>
          )
        }

      </ul>
    console.log(this.props.match.url);
    return (
      <div styleName="panel">
        <div styleName="panel__filter-button" className="button button-secondary">Filtry</div>
        <div styleName="notice-list-container">
          {noticeList}
        </div>

      </div>
    )
  }
}

export default CSSModules(NoticeList, styles);