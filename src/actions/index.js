const LOAD_IMAGES = 'LOAD_IMAGES';
const SELECT_IMAGE = 'SELECT_IMAGE';

export function selectImage(image) {
  return {
    type: SELECT_IMAGE,
    image
  }
}

export function loadImages() {
  return {
    type: LOAD_IMAGES
  }
}