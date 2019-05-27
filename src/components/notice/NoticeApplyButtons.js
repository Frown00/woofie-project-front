import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import styles from './NoticeApplyButtons.module.scss';

class NoticeApplyButtons extends Component {

  constructor(props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this);
    this.apply = this.apply.bind(this);
  }

  sendMessage(e) {
    e.preventDefault();
  }

  apply(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div styleName="buttons">
        <button className="button" styleName="buttons__message" onClick={this.sendMessage}>Napisz do właściciela</button>
        <button className="button" styleName="buttons__apply" onClick={this.apply}>Zgłoś się</button>
      </div>
    )
  }
}

export default CSSModules(NoticeApplyButtons, styles);