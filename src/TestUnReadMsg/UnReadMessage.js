import React, { Component } from 'react';

class UnReadMessage extends Component {

    render() {
        const { unReadMessage } = this.props;

        return (
            <div>
                <h3>Hello!</h3>
                {
                    unReadMessage.length > 0 &&
                    <h5>you have { unReadMessage.length } unRead messages.</h5>
                }

            </div>
        )
    }
}

export default UnReadMessage;
