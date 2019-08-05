import React, { Component } from 'react';
import '../App.css'

class ChildImg extends Component {

    render() {
        const { url, user } = this.props;
        return (
            <div className='cat-img'>
                <img src={url} alt={url}/>
                <p>userName: {user}</p>
            </div>
        );
    }

}

export default ChildImg;
