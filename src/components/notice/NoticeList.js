import React, { Component } from 'react';
import { notices } from '../mockup_data';
import NoticeCard from './NoticeCard';

import CSSModules from 'react-css-modules';
import styles from './NoticeList.module.scss';

class NoticeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notices: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({
      notices
    });
  }
  render() {
    console.log(this.state.notices);
    const noticeList =
      <ul styleName="notice-list">

        {
          this.state.notices.map((notice) =>
            <li styleName="notice-list__item">
              <NoticeCard notice={notice} />
            </li>
          )
        }

      </ul>

    return (
      <div styleName="notice-list-container">
        {noticeList}
      </div>
    )
  }
}

export default CSSModules(NoticeList, styles);