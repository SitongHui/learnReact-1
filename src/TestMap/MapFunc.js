import React, { Component } from 'react';

class MapFunc extends Component {

    render() {
        const { numbers } = this.props;
        let numberList = numbers.map(number =>
            <li key={number.toString()}>{number}</li>
        );
        return (
            <ul>{numberList}</ul>
        )

    }
}

export default MapFunc;
