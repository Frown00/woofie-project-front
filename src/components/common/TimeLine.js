import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './TimeLine.module.scss';

function TimeLine() {
  return (
    <div styleName="timeline">
      <div styleName="circle-1"></div>
      <div styleName="line"></div>
      <div styleName="circle-2"></div>
    </div>
  )
}

export default CSSModules(TimeLine, styles);
