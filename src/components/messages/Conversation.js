import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Conversation extends Component {
  render() {
    return (
      <div>
        Konwersacja
        {this.props.match.params.id}
      </div>
    )
  }
}

export default withRouter(Conversation);