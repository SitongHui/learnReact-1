import React, { Component } from 'react';

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: ''
        }
    }

    handleChange = (e) => {
        /*this.setState({
            temperature: e.target.value
        })*/
        this.props.onTemperatureChange(e.target.value);
    };

    render(){
        const  { temperature, scale } = this.props;
        return(
            <fieldset>
                <legend>Enter temperature in {scale}:</legend>
                <input type="text"
                       value={temperature}
                       onChange={this.handleChange}
                />
            </fieldset>
        )
    }

}

export default TemperatureInput;
