import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    render() {
        return (
            <>
                <div>
                    {this.state.date.toLocaleTimeString()}
                </div>

                <div>
                    <a href="www.baidu.com" onClick={this.handleClick}>
                        Click me
                    </a>
                </div>
            </>
        )
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log('The link was clicked');
    };

    timer = () => {
        this.setState({date: new Date()});
    }

    componentDidMount = () => {
        setInterval(() => {
            this.timer();
        }, 1000)
    }

    componentWillUnMount = () => {
        clearInterval(this.timer);
    }

}

export default Clock;