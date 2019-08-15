import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './Badge.module.scss';

function Badge(props) {
  return (
    <span styleName={props.isPet ? "rating rating_pet" : "rating"}>{props.rating}</span>
  )
}

export default CSSModules(Badge, styles, { allowMultiple: true })
