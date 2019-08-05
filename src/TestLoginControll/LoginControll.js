import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Greeting from "../TestGreeting/Greeting";

class LoginControll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    render() {
        const isLoggedIn = this.state.loggedIn;
        let button;

        if (isLoggedIn) {
            button = <Logout onClick={this.handleLoggedOut}/>
        } else {
            button = <Login onClick={this.handleLoggedIn}/>
        }

        return (
            <div>
                <Greeting greeting={isLoggedIn} />
                {button}

                {/* 三目运算符也可实现 */}
                {/*{*/}
                {/*    isLoggedIn ? <Logout onClick={this.handleLoggedOut}/> : <Login onClick={this.handleLoggedIn}/>*/}
                {/*}*/}
            </div>
        )
    }

    handleLoggedIn = () => {
        this.setState({loggedIn: true});
    };

    handleLoggedOut = () => {
        this.setState({loggedIn: false});
    }
}

export default LoginControll;
