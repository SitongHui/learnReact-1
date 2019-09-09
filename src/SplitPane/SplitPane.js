import React, { Component } from 'react';

class SplitPane extends Component {
    render() {
        const { left, right } = this.props;
        return (
            <div className="split-pane">
                <div className="split-pane-left">
                    {left}
                </div>
                <div className="split-pane-right">
                    {right}
                </div>
            </div>
        )
    }
}

export default SplitPane;
