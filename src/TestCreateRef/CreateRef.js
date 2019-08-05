import React, { Component } from 'react';

class CreateRef extends Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }

    render() {
        return <input type="text" ref={this.inputRef}/>
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

}

export default CreateRef;