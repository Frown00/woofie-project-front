import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import styles from './RatingBar.module.scss';

class RatingBar extends Component {

  constructor(props) {
    super(props);
    this.makeBar = this.makeBar.bind(this);
  }

  makeBar(rating, max, colors) {
    let bar = [];

    for (let i = 0; i < rating; i++) {
      bar.push(<div styleName="bar__item" style={{ backgroundColor: colors[i] }}></div>)
    }
    for (let i = 0; i < max - rating; i++) {
      bar.push(<div styleName="bar__item" style={{ backgroundColor: '#EEE' }}></div>)
    }
    return bar;
  }

  render() {
    const colors = ['#FFF71B', '#FFEA2A', '#FFD60C', '#F8CF00', '#FDBA00'];
    let bar = this.makeBar(this.props.rating, 5, colors);
    return (
      <div styleName="bar">
        {bar}
      </div>
    )
  }
}

export default CSSModules(RatingBar, styles);