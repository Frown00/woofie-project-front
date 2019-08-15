import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import styles from './Prompt.module.scss';

class Prompt extends Component {


  render() {
    return (
      <div styleName="prompt" style={{ display: this.props.display ? this.props.display : 'block' }}>
        <div styleName="prompt__content">
          <p styleName="prompt__text">
            {this.props.question}
          </p>
          <div styleName="prompt__buttons">
            <button onClick={this.props.handleAnswer} name="yes" styleName="prompt__button prompt__button_yes">{this.props.yes}</button>
            <button onClick={this.props.handleAnswer} name="no" styleName="prompt__button prompt__button_no">{this.props.no}</button>
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(Prompt, styles, { allowMultiple: true });
