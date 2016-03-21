import {call, put, take} from 'redux-saga/effects';
import {fetchImages} from '../api/flickr';

export function* loadImages() {
  try {
    const images = yield call(fetchImages);
    yield put({type: 'IMAGES_RECEIVED', images});
    yield put({type: 'SELECT_IMAGE', image: images[0]})
  } catch (error) {
    yield put({type: 'LOAD_IMAGES_FAILURE', error})
  }
}

export function* watchLoadImages() {
  while (true) {
    yield take('LOAD_IMAGES');
    yield call(loadImages);
  }
}
