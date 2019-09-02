import React from "react";
import { Field, reduxForm } from "redux-form";

class Form extends React.Component {  
  renderError({ error, touched }) {
    if(touched && error) {
      return(
        <div className="ui message">
          <div className="header">
            {error}
          </div>
        </div>
      );
    }
  }
  
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = formValues => {
    this.props.onSubmit();
  }

  render() {
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)} >
        <Field name="input1" component={this.renderInput} label={`Enter ${this.props.input1}: `} />
        <Field name="input2" component={this.renderInput} label={`Enter ${this.props.input2}: `} />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate  = formValues => {
  const errors = {};
 
  if(!formValues.input1) {
    errors.input1 = `You must enter a value`;
  }

  if(!formValues.input2) {
    errors.input2 = `You must enter a value`;
  }

  return errors;
}

export default reduxForm({
  form: "form",
  validate
})(Form);