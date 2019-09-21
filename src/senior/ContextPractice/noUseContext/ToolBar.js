import React, { Component } from 'react';
import ThemedButton from "./ThemedButton";

class ToolBar extends Component {
    render() {
        const { theme } = this.props;
        return (
            <>
                <ThemedButton theme={theme}/>
            </>
        )
    }
}

export default ToolBar;
