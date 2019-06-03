import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Application from './Application';
import { userNotices } from '../mockup_data';
import CSSModules from 'react-css-modules';
import styles from './NoticeApplicationList.module.scss';

import DateTimeLine from '../common/DateTimeLine';

function getPetNames(pets) {
  return pets.map(pet => pet["specie"] + " " + pet["name"]).join(", ");
}

class NoticeApplicationList extends Component {
  render() {
    console.log(this.props.match.params.id);
    let applicationNoticeList;
    const applications = userNotices.filter(notice => notice.id !== this.props.match.params.id)[0].applications;
    const notice = userNotices.filter(notice => notice.id !== this.props.match.params.id)[0];
    console.log(notice);

    if (applications !== undefined && applications !== null) {
      applicationNoticeList =
        <ul styleName="application-list">
          {
            applications.map((application, key) =>
              <li styleName="application-list__item" key={key}>
                <Application application={application} />
              </li>
            )
          }

        </ul>
    }

    const petNames = getPetNames(notice.pets);
    return (
      <div>
        <h2>Zgłoszenia</h2>
        <div>
          <p>{petNames}</p>
          <p>Data opieki</p>
          <DateTimeLine
            dateFrom={notice.keepingDateFrom}
            dateTo={notice.keepingDateTo}
          />
        </div>
        <h3>Możliwi opiekuni ({notice.applications.length})</h3>
        {applicationNoticeList}
      </div>
    )
  }
}

export default withRouter(CSSModules(NoticeApplicationList, styles));