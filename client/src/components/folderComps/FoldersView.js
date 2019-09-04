import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchFolders } from "../../actions";
import "../styles/FoldersView.css";

class FoldersView extends React.Component {
  componentDidMount() {
    this.props.fetchFolders();
  }

  renderFolders = () => {
    console.log(this.props.folders);
    return (
      this.props.folders.map(folder =>
        <div className="card" key={folder.name}>
          <div className="img">
            <Link to={`/folders/${folder.id}`} className="img">
              <img src="https://image.freepik.com/free-vector/illustration-data-folder-icon_53876-6329.jpg" width="150" height="150" title="White flower" alt="Flower" />
            </Link> 
          </div>         
          <div className="content">
            <div className="folder-name">
              <Link to={`/folders/${folder.id}`} className="header">{folder.name}</Link>
            </div>
            <div className="meta">
              <span className="date">Created in 2019 August</span>
            </div>
            <div className="description">
              {folder.description}
            </div>
          </div>
        </div>      
      )
    );
  }
  
  render() {
    return(
      <div>
         <div className="ui secondary pointing menu">
          <Link to="/folders" className="item">Galleria</Link>
          <div className="right menu">
            <Link to="/folders/new" className="ui yellow button">New Folder</Link>
          </div>
        </div> 
        {this.renderFolders()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { folders:  Object.values(state.folders) }
}

export default connect(mapStateToProps, { fetchFolders })(FoldersView);