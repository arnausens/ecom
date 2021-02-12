import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

class SignInForm extends Component {
    render() {
        const { className } = this.props;
        return (
            <form className={`${className} sign-in-form`}>
                sig in
            </form>
        )
    }
}

SignInForm = reduxForm({
    from: "SignInForm"
})(SignInForm);

export default SignInForm;