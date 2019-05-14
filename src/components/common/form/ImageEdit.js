import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './ImageEdit.module.scss';
import defaultAvatar from '../../../img/images/default_avatar.jpg';


class ImageEdit extends Component {

  constructor(props) {
    super(props);
    this.changeImage = this.changeImage.bind(this);
    this.buildFileSelector = this.buildFileSelector.bind(this);
  }

  changeImage(e) {
    e.preventDefault();
  }

  buildFileSelector() {
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('multiple', 'multiple');


    return fileSelector;
  }

  componentDidMount() {
    this.fileSelector = this.buildFileSelector();
  }

  handleFileSelect = (e) => {
    e.preventDefault();
    this.fileSelector.click();
    console.log(this.fileSelector);
    this.props.onChange();
  }

  render() {
    return (
      <div styleName="form__container">
        <div styleName="form__container__image-container">
          <img styleName="form__container__image-container__image" src={this.props.imageSrc} alt={this.props.imageAlt} />
        </div>
        <button className="button" styleName="form__container__button-change" onClick={this.handleFileSelect}>Zmień zdjęcie</button>
      </div>
    )
  }
}

ImageEdit.propTypes = {
  imageSrc: PropTypes.string,
  alt: PropTypes.string,
  defaultImageSrc: PropTypes.string
}

ImageEdit.defaultProps = {
  imageSrc: defaultAvatar
}

export default CSSModules(ImageEdit, styles);