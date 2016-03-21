import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import GalleryImage from './GalleryImage';
import GalleryThumbs from './GalleryThumbs';

import * as ImageGalleryActions from "../actions";

export class Gallery extends Component {
  componentDidMount() {
    this.props.loadImages();
  }
  render() {
    const {images, selectImage, selectedImage} = this.props;
    return (
      <div className="image-gallery" hidden={!selectedImage}>
        <GalleryImage image={selectedImage} />
        <GalleryThumbs selectImage={selectImage} images={images} />
      </div>
    )
  }
}

export default connect(
  state => ({images: state.images, selectedImage: state.selectedImage}),
  dispatch => bindActionCreators(ImageGalleryActions, dispatch)
)(Gallery)