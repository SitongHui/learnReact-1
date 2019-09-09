import React, { Component } from 'react';
import Dialog from './Dialog';

class SignUpDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: ''
        }
    }

    render() {
        return (
            <>
                <Dialog
                    title="Mars Exploration Program"
                    message="How should we refer to you?">

                    <input value={this.state.login} onChange={this.handleChange}/>

                    <button onClick={this.handleClick}>
                        Sign Me Up!
                    </button>

                </Dialog>

            </>
        )
    }

    handleChange = (e) => {
        this.setState({
            login: e.target.value
        })
    };

    handleClick = () => {
        alert(`Welcome aboard, ${this.state.login}!`);
    }
}

export default SignUpDialog;
