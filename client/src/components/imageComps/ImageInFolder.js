import React from "react";
import { Link } from "react-router-dom";

class ImageInFolder extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }
  
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);

    this.setState({ spans });
  }
  
  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
        <Link to={`/folders/${this.props.folderId}/${this.props.image.title}`} >
          <img ref={this.imageRef} src={`${this.props.image.url}`}  width="250" title={`${this.props.image.title}`} alt={`${this.props.image.title}`} />
        </Link> 
      </div>
    );
  }
}


export default ImageInFolder;