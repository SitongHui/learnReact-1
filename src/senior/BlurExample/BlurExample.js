import React, { Component } from 'react';

class BlurExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.timeOutId = null;
    }

    render() {
        return (
            <div onBlur={this.onHandleBlur}
                 onFocus={this.onHandleFocus}>

                <button onClick={this.onHandleClick}
                        aria-haspopup="true"
                        aria-expanded={this.state.isOpen}>
                    select an option
                </button>
                {
                    this.state.isOpen && (
                        <ul>
                            <li>option 1</li>
                            <li>option 2</li>
                            <li>option 3</li>
                        </ul>
                    )
                }
            </div>
        )
    }

    onHandleBlur = () => {
        this.timeOutId = setTimeout(() => {
            this.setState({
                isOpen: false
            });
        })
    };

    onHandleFocus = () => {
        clearTimeout(this.timeOutId);
    };

    onHandleClick = () => {
        this.setState(currentState => ({
            isOpen: !currentState.isOpen
        }));
    }
}

export default BlurExample;
