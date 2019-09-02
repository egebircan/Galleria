import { FETCH_IMAGES,
         FETCH_SINGLE_IMAGE,
         UPLOAD_IMAGE,
         DELETE_IMAGE } from "../actions/types";

export default (state={}, action) => {
  switch(action.type) {
    case FETCH_IMAGES:
      return {...action.payload};
    case FETCH_SINGLE_IMAGE:
      return 1;
    case UPLOAD_IMAGE:
      return 1;
    case DELETE_IMAGE:
      return 1;
    default:
      return state;
  }
}