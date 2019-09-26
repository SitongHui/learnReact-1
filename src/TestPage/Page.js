import React, { Component } from 'react';
import WarningBanner from "./WarningBanner";

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showWarning: true
        }
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render() {
        return (
            <div>
                <WarningBanner showStatus={this.state.showWarning} />
                <button onClick={this.handleClick}>
                    { this.state.showWarning ? 'Hide' : 'Show' }
                </button>
            </div>
        )
    }

    handleClick = () => {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

}

export default Page;
