import React from "react";
import Modal from "../Modal";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchFolder, deleteFolder } from "../../actions";
import history from "../../history";

class DeleteFolder extends React.Component {
  componentDidMount() {
    this.props.fetchFolder(this.props.match.params.folderId);
  }

  renderContent = () => {
    if(!this.props.folder) {
      return "Are you sure to delete this folder?"
    }
    return `Are you sure to delete this folder: ${this.props.folder.name}`
  }

  renderActions = () => {
    return (
      <>
        <Link className="ui button" to={`/folders/${this.props.match.params.folderId}`}>Cancel</Link>
        <button className="ui negative button" onClick={() => this.props.deleteFolder(this.props.match.params.folderId)}>Delete</button>
      </>
    );
  }
  
  render() {
    return (
      <Modal
        onDismiss={() => history.push("/folders")}
        title={this.props.folder.name}
        content={this.renderContent()}
        actions={this.renderActions()}
      />
    );
  }
}

const mapStateToProps = state => {
  return { folder: state.folders }
}

export default connect(mapStateToProps, { fetchFolder, deleteFolder })(DeleteFolder);