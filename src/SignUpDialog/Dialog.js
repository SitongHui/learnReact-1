import React, { Component } from 'react';
import FancyBorder from "../FancyBorder/FancyBorder";

class Dialog extends Component {
    render() {
        const { title, message, children } = this.props;
        return (
            <>
                <FancyBorder color="blue">
                    <h1>
                        {title}
                    </h1>
                    <p>
                        {message}
                    </p>
                    {children}
                </FancyBorder>
            </>
        )
    }
}

export default Dialog;
