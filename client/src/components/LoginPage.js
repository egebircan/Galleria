import React from "react";
import { Link } from "react-router-dom";

import Form from "./Form";

class LoginPage extends React.Component {
  render() {
    return(
      <div>
        <div className="ui secondary pointing menu">
          <Link to="/" className="item">Galleria</Link>
          <div className="right menu">
            <Link to="/" className="ui primary orange button">Sign Up</Link>
          </div>
        </div> 
        <h2>Log In!</h2>
        <Form input1="Username" input2="Password" /* add on submit */ />
      </div>
    );
  }
}

export default LoginPage;