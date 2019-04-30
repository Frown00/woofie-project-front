import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import styles from './AddNoticeForm.module.scss';

class AddNoticeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      dateFrom: '',
      dateTo: '',
      reward: '',
      animals: [],

    }
    this.nextStep = this.nextStep.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState({
      step: 1
    });
  }

  nextStep() {
    const currentStep = this.state.step + 1;
    this.setState({
      step: currentStep
    });
  }

  render() {

    let form = <h3>Loading</h3>

    switch (this.state.step) {
      case 1:
        form = (
          <div styleName="form">
            <div styleName="form__animal">
              <select styleName="form__animal__select">
                <option>
                  Pimpek
              </option>
                <option>
                  Azor
              </option>
                <option>
                  Misiek
              </option>
              </select>
              <div
                className="button"
                styleName="form__animal__add">
                +
              </div>

            </div>
            <div styleName="form__animal-list">
              Lista
            </div>
            <textarea placeholder="Dodatkowe uwagi" />
            <div
              styleName="form__button"
              className="button button-primary"
              onClick={this.nextStep}>
              Dalej
            </div>
          </div>
        )
        break;
      case 2:
        form = (
          <div styleName="form">
            <div styleName="form__keeping">
              <p styleName="form__keeping__title">Data opieki</p>
              <div styleName="form__keeping__date">
                <input type="date" placeholder="Od" />
                <input type="date" placeholder="Do" />
              </div>
            </div>
            <div>
              <input type="number" placeholder="Nagroda" />
              <div>
                <p>Do uzgodnienia</p>
                <input type="checkbox" />
              </div>
            </div>
            <div
              styleName="form__button"
              className="button button-primary">
              Dodaj
            </div>
          </div>
        )
        break;
      default: form = <div>Loading</div>
    }


    return (
      <div>
        <h2>Dodaj ogłoszenie {`(${this.state.step}/2)`}</h2>
        <form>
          {form}
        </form>
      </div>
    )
  }
}

export default CSSModules(AddNoticeForm, styles);