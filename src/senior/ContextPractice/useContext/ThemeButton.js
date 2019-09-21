import React, { Component } from 'react';
import ThemeContext from "../../../ctx";

class ThemeButton extends Component {
    static contextType = ThemeContext;
    render() {
        return (
            <>
                <button>{this.context}</button>
            </>
        )
    }
}

export default ThemeButton;
