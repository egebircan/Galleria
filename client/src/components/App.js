import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import FoldersView from "./folderComps/FoldersView";
import CreateFolder from "./folderComps/CreateFolder";
import EditFolder from "./folderComps/EditFolder";
import DeleteFolder from "./folderComps/DeleteFolder";
import SingleFolder from "./folderComps/SingleFolder";
import UploadImage from "./imageComps/UploadImage";
import ImageView from "./imageComps/ImageView";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/sign-up" exact component={SignUpPage} />
          <Route path="/folders" exact component={FoldersView} />
          <Route path="/folders/new" exact component={CreateFolder} />
          <Route path="/folders/edit/:folderId" exact component={EditFolder} />
          <Route path="/folders/delete/:folderId" exact component={DeleteFolder} />
          <Route path="/folders/:folderId" exact component={SingleFolder} />
          <Route path="/folders/:folderId/upload" exact component={UploadImage} />
          <Route path="folders/:folderId/:imgId" exact component={ImageView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;