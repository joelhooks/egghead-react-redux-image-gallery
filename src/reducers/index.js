export default function images(state = {images:[]}, action) {
  switch (action.type) {
    case 'IMAGES_RECEIVED':
      console.log(JSON.stringify(action.images));
      return {...state, images: action.images};
    case 'LOAD_IMAGES_FAILURE':
      return state;
    case 'SELECT_IMAGE':
      return {...state, selectedImage: action.image};
    default:
      return state
  }
}
