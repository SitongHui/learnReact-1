import React, { Component } from 'react';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };
    }


    render() {
        return (
            <div>
                <button onClick={(e) => this.handleClick(e)}>
                    { this.state.isToggleOn ? 'ON' : 'OFF' }
                </button>
            </div>
        )
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
}

export default Toggle;