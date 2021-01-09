import React from 'react';

import SignIn from '../../components/sign-in/sign-in'

class SignInSignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return(
            <div>
            <SignIn />
            </div>
        )
    }
}

export default SignInSignUp;