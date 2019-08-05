import React, { Component } from 'react';

class Logout extends Component {

    render() {
        const { onClick } = this.props;
        return (
            <button onClick={onClick}>
                Logout
            </button>
        )
    }
}

export default Logout;
