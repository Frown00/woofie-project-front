import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import styles from './Comment.module.scss';
import RatingBar from './RatingBar';

class Comment extends Component {
  render() {
    const { user, rating } = this.props.comment;
    return (
      <div styleName="comment">
        <p styleName="comment__name">
          {user.name}
        </p>
        <p styleName="comment__body">
          {user.body}
        </p>
        <p styleName="comment__rating">
          <RatingBar rating={rating} />
        </p>
      </div>
    )
  }
}

export default CSSModules(Comment, styles);