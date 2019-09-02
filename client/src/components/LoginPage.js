import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logIn } from "../actions";

import Form from "./Form";

class LoginPage extends React.Component {
  onSubmit = () => {
    this.props.logIn();
  }
  
  render() {
    return(
      <div>
        <div className="ui secondary pointing menu">
          <Link to="/" className="item">Galleria</Link>
          <div className="right menu">
            <Link to="/sign-up" className="ui primary orange button">Sign Up</Link>
          </div>
        </div> 
        <h2>Log In!</h2>
        <Form input1="Username" input2="Password" onSubmit={this.onSubmit}/* add on submit */ />
      </div>
    );
  }
}

export default connect(null, { logIn })(LoginPage);

