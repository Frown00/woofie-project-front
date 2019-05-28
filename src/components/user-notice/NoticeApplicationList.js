import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class NoticeApplicationList extends Component {
  render() {
    return (
      <div>
        <h2>Zgłoszenia</h2>
        {this.props.match.params.id}
      </div>
    )
  }
}

export default withRouter(NoticeApplicationList);