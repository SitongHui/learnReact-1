import React, { Component } from 'react';
import ThemedContext from '../../../context';

class ThemeTogglerButton extends Component {
    render() {
        return (
            <ThemedContext.Consumer>
                {({theme, toggleTheme}) => (
                    <button onClick={toggleTheme} style={{backgroundColor: theme.background}}>
                        Toggle Theme2
                    </button>
                )}
            </ThemedContext.Consumer>
        )
    }
}


export default ThemeTogglerButton;
