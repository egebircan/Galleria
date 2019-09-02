import history from "../history";
import { SIGN_UP,
         LOG_IN, 
         LOG_OUT, 
         FETCH_FOLDERS,
         FETCH_FOLDER, 
         CREATE_FOLDER,
         EDIT_FOLDER,
         DELETE_FOLDER,
         FETCH_IMAGES,
         FETCH_SINGLE_IMAGE,
         UPLOAD_IMAGE,
         DELETE_IMAGE } from "./types";

import db from "../api/db";

//TODO: write action creators
export const logIn = (id, password) => async dispatch => {
  dispatch({ type: LOG_IN, payload: true });

  history.push("/folders");
}

export const logOut = () => async dispatch => {
  dispatch({ type: LOG_OUT, payload: false });

  history.push("/");
}

export const fetchFolders = () => async dispatch => {
  const response = await db.get("/folders");
    
  dispatch({ type: FETCH_FOLDERS, payload: response.data });

}

export const fetchFolder = id => async dispatch => {
  const response = await db.get(`/folders/${id}`);
    
  dispatch({ type: FETCH_FOLDER, payload: response.data });
}

export const fetchImages = id => async dispatch => {
  console.log(id)
  const response = await db.get(`/folders/${id}`);
  console.log(response.data);

  dispatch({ type: FETCH_IMAGES, payload: response.data.images});
}

