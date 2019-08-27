import React from "react";
import { Link } from "react-router-dom";

import Form from "./Form";

class SignUpPage extends React.Component {   
  render() {
    return(
      <div>
        <div className="ui secondary pointing menu">
          <Link to="/" className="item">Galleria</Link>
          <div className="right menu">
            <Link to="/login" className="ui primary orange button">Log In</Link>
          </div>
        </div> 
        <h2>Sign Up!</h2>
        <Form input1="Username" input2="Password" /* add on submit */ />        
      </div>
    );
  }
}

export default SignUpPage;