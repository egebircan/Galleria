import { combineReducers } from "redux" ;
import { reducer as formReducer } from "redux-form";

import loginReducer from "./loginReducer";
import folderReducer from "./folderReducer";
import imageReducer from "./imageReducer";

export default combineReducers({
  login: loginReducer,
  folders: folderReducer,
  images: imageReducer,
  form: formReducer
})