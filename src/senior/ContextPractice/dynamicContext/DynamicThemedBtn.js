import React, { Component } from 'react';
import ThemedContext from '../../../context';


class DynamicThemedBtn extends Component {

    render() {
        const props = this.props;
        const theme = this.context;

        return (
            <button {...props} style={{backgroundColor: theme.background}} />
        )
    }
}
DynamicThemedBtn.contextType = ThemedContext;

export default DynamicThemedBtn;
