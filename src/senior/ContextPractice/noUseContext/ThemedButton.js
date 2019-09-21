import React, { Component } from 'react';

class ThemedButton extends Component {
    render() {
        const { theme } = this.props;
        return (
            <>
                <button>{theme}</button>
            </>
        )
    }
}

export default ThemedButton;
