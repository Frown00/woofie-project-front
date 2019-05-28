import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class ManageUserNotice extends Component {
  render() {
    return (
      <div>
        <h2>Zarządzanie</h2>
        {this.props.match.params.id}
      </div>
    )
  }
}

export default withRouter(ManageUserNotice);