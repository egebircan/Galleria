import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchImages, fetchFolder } from "../../actions";
import "../styles/SingleFolder.css";
import ImageInFolder from "../imageComps/ImageInFolder";

class SingleFolder extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.folderId);
    this.props.fetchImages(this.props.match.params.folderId);
    this.props.fetchFolder(this.props.match.params.folderId);
    
  }

  renderImages() {
    return (
      this.props.images.map(image => {
        return <ImageInFolder key={image.title} image={image} folderId={this.props.id} />
      })
    );
  }
  
  render() {
    console.log(this.props.images);
    return (
      <div>
        <div className="ui secondary pointing menu">
          <Link to="/folders" className="item">Galleria</Link>
          <div className="right menu">
            <Link to={`/folders/edit/${this.props.id}`} className="ui yellow button">Edit Folder</Link>
            <Link to={`/folders/delete/${this.props.id}`} className="ui red button">Delete Folder</Link>
          </div>
        </div> 
        <div className="image-list">
          {this.renderImages()} 
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { images: Object.values(state.images), id: state.folders.id }
}

export default connect(mapStateToProps, { fetchImages, fetchFolder })(SingleFolder);