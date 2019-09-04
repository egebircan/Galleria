import _ from "lodash";

import { FETCH_FOLDERS,
         FETCH_FOLDER,
         CREATE_FOLDER,
         EDIT_FOLDER,
         DELETE_FOLDER } from "../actions/types";

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_FOLDERS:
      return {..._.mapKeys(action.payload, "id")};
    case FETCH_FOLDER:
      return {...action.payload};
    case CREATE_FOLDER:
      return {...state, [action.payload.id]: action.payload};
    case EDIT_FOLDER:
      return {...state, [action.payload.id]: action.payload};
    case DELETE_FOLDER:
      return _.omit(state, `${action.payload}`);
    default:
      return state;
  }
}