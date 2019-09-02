import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchImages, fetchFolder } from "../../actions";

class SingleFolder extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.folderId);
    this.props.fetchImages(this.props.match.params.folderId);
    this.props.fetchFolder(this.props.match.params.folderId);
  }
  
  renderImages() {
    return (
      this.props.images.map(image =>
        <Link to={`/folders/${this.props.id}/${image.title}`} className="img">
            <img src={`${image.url}`} width="150" height="150" title="White flower" alt="Flower" />
          </Link> 
      )
    );
  }
  
  render() {
    console.log(this.props.images);
    return (
      <div>
        <div className="ui secondary pointing menu">
          <Link to="/" className="item">Galleria</Link>
          <div className="right menu">
            <Link to="/folders/edit/:folderId" className="ui yellow button">Edit Folder</Link>
            <Link to="/folders/delete/:folderId" className="ui red button">Delete Folder</Link>
          </div>
        </div> 
       {this.renderImages()} 
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { images: Object.values(state.images), id: state.folders.id }
}

export default connect(mapStateToProps, { fetchImages, fetchFolder })(SingleFolder);