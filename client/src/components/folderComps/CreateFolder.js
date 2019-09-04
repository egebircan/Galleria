import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Form from "../Form";
import { createFolder } from "../../actions";

class CreateFolder extends React.Component {
  onSubmit = formValues => {
    this.props.createFolder(formValues);
  }
  
  render() {
    return (
      <div>
        <div className="ui secondary pointing menu">
          <Link to="/folders" className="item">Galleria</Link>
        </div>
        <h2>Create a New Folder!</h2> 
        <Form input1="Folder Name" input2="Folder Description" onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createFolder })(CreateFolder);