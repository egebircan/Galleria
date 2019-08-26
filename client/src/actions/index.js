import history from "../history";
import { SIGN_IN, 
         SIGN_OUT, 
         FETCH_FOLDERS, 
         CREATE_FOLDER,
         EDIT_FOLDER,
         DELETE_FOLDER,
         FETCH_IMAGES,
         FETCH_SINGLE_IMAGE,
         UPLOAD_IMAGE,
         DELETE_IMAGE } from "./types";

//TODO: write action creators
export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

