import React, { Component } from 'react';

class Testone extends Component {

    render() {
        return (
            <div>
                <h5>我是子组件Testone</h5>
                <h6>{this.props.name}</h6>
            </div>
        )
    }

}

export default Testone;
