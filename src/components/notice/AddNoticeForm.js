import React, { Component } from 'react'

export default class AddNoticeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateFrom: '',
      dateTo: '',
      reward: '',
      animals: [],

    }
  }

  render() {
    return (
      <div>
        <h2>Dodaj ogłoszenie</h2>
      </div>
    )
  }
}
