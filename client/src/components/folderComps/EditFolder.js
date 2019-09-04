import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";

import Form from "../Form";
import { editFolder, fetchFolder } from "../../actions";

class EditFolder extends React.Component { 
  componentDidMount() {
    this.props.fetchFolder(this.props.match.params.folderId);
  }
  
  onSubmit = formValues => {
    this.props.editFolder(this.props.match.params.folderId, formValues);
  }
  
  render() {
    console.log(this.props.name);
    console.log(this.props.description);
    return (
      <div>
        <div className="ui secondary pointing menu">
          <Link to="/folders" className="item">Galleria</Link>
        </div>
        <h2>Edit Folder!</h2> 
        <Form input1="Folder Name" input2="Folder Description" onSubmit={this.onSubmit} initialValues={{ "input1": this.props.name, "input2": this.props.description}} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { name: state.folders.name, description: state.folders.description };
}

export default connect(mapStateToProps, { editFolder, fetchFolder })(EditFolder);