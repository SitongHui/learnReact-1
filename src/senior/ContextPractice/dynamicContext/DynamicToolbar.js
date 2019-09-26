import React, { Component } from 'react';
import DynamicThemedBtn from './DynamicThemedBtn';

class DynamicToolbar extends Component{
    render() {
        const { changeTheme } = this.props;

        return (
            <DynamicThemedBtn onClick={changeTheme}>
                Change Theme
            </DynamicThemedBtn>
        )
    }
}

export default DynamicToolbar;
