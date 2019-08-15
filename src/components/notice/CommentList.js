import React, { Component } from 'react';
import Comment from './Comment';
import CSSModules from 'react-css-modules';
import styles from './CommentList.module.scss';

class CommentList extends Component {
  render() {
    const commentList = this.props.comments.map((comment, key) =>
      <li key={key} styleName="comment-list__item">
        <Comment comment={comment} />
      </li>
    )
    return (
      <ul styleName="comment-list">
        {commentList}
      </ul>
    )
  }
}

export default CSSModules(CommentList, styles);