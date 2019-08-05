import React, { Component } from 'react';

class WarningBanner extends Component {

    render() {
        const { showStatus } = this.props;
        if (!showStatus) {
            return null;
        }

        return (
            <div className='warning'>
                WARNING!!!
            </div>
        )
    }
}

export default WarningBanner;
