import { FETCH_FOLDERS,
         FETCH_IMAGES,
         CREATE_FOLDER,
         EDIT_FOLDER,
         DELETE_FOLDER } from "../actions/types";

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_FOLDERS:
      return 1;
    case FETCH_IMAGES:
      return 1;
    case CREATE_FOLDER:
      return 1;
    case EDIT_FOLDER:
      return 1;
    case DELETE_FOLDER:
      return 1;
    default:
      return state;
  }
}