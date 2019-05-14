import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import styles from './AddNoticeForm.module.scss';
import CheckboxField from '../common/form/CheckboxField';
import InputField from '../common/form/InputField';
import MultipleSelectField from '../common/form/MultipleSelectField';
import TextAreaField from '../common/form/TextareaField';

class AddNoticeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      dateFrom: '',
      dateTo: '',
      reward: '',
      animals: [],
      remarks: ''
    }
    this.nextStep = this.nextStep.bind(this);
    this.reset = this.reset.bind(this);

    this.onChangeValue = this.onChangeValue.bind(this);
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

  onChangeValue(e) {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {

    let form = <h3>Loading</h3>

    switch (this.state.step) {
      case 1:
        form = (
          <div styleName="form">
            <MultipleSelectField />
            <TextAreaField
              minRows={3}
              maxRows={10}
              rows={3}
              name="remarks"
              placeholder="Dodatkowe uwagi"
              onChange={this.onChangeValue} />
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
              <div styleName="form__keeping__date">
                <InputField label="Data od" name="datetime-from" type="datetime-local" placeholder="Od" />
                <InputField label="Data do" name="datetime-to" type="datetime-local" placeholder="Do" />
              </div>
            </div>
            <div styleName="form__reward">
              <div styleName="form__reward__input">
                <InputField label="Nagroda" name="reward" type="number" />
              </div>
              <div styleName="form__reward__checkbox">
                <CheckboxField label="Do uzgodnienia" />
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
      <div styleName="form-container">
        <h2>Dodaj ogłoszenie {`(${this.state.step}/2)`}</h2>
        <form>
          {form}
        </form>

      </div>
    )
  }
}

export default CSSModules(AddNoticeForm, styles);