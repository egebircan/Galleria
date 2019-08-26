import { combineReducers } from "redux" ;

import loginReducer from "./loginReducer";
import folderReducer from "./folderReducer";
import imageReducer from "./imageReducer";

export default combineReducers({
  login: loginReducer,
  folder: folderReducer,
  image: imageReducer
})