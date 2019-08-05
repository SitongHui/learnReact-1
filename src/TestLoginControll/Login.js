import React, { Component } from 'react';

class Login extends Component {

    render() {
        const { onClick } = this.props;

        return (
            <button onClick={onClick}>
                Login
            </button>
        )
    }
}

export default Login;
