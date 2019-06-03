import React from 'react';
import TimeLine from './TimeLine';
import CSSModules from 'react-css-modules';
import styles from './DateTimeLine.module.scss';

import 'moment/locale/pl';
import moment from 'moment';
moment.locale('pl');


function DateTimeLine(props) {
  return (
    <div styleName="date-time">
      <div>
        <p styleName="date">
          {moment(props.dateFrom).format('DD MMMM')}
        </p>
        <p styleName="time">
          {moment(props.dateFrom).format("dddd HH:mm")}
        </p>
      </div>
      <div styleName="time-line">
        <TimeLine />
      </div>
      <div>
        <p styleName="date">
          {moment(props.dateTo).format('DD MMMM')}
        </p>
        <p styleName="time">
          {moment(props.dateTo).format('dddd HH:mm')}
        </p>
      </div>
    </div>
  )
}

export default CSSModules(DateTimeLine, styles);