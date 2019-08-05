import React, { Component } from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting'

class Greeting extends Component {

    render() {
        return (
            <div>{this.welcomeGreeting()}</div>
        )
    }

    welcomeGreeting = () => {
        const { greeting } = this.props;
        if (greeting) {
            return <UserGreeting />;
        } else {
            return <GuestGreeting />;
        }
    };


}

export default Greeting;
