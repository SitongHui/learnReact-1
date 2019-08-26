import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput'
import BoilingVerdict from "./BoilingVerdict";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            scale: 'c'
        }
    }

    toCelsius = (fahrenheit) => {
        return (fahrenheit - 32) * 5 / 9;
    };

    toFahrenheit = (celsius) => {
        return (celsius * 9 / 5) + 32;
    };

    tryConvert = (temperature, convert) => {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    };

    /*handleChange = (e) => {
        this.setState({
            temperature: e.target.value
        })
    };*/
    handleCelsiusChange = (temperature) => {
        this.setState({
            scale: 'c',
            temperature
        })
    };

    handleFahrenheitChange = (temperature) => {
        this.setState({
            scale: 'f',
            temperature
        })
    };

    render(){
        const scaleNames = {
            c: 'Celsius',
            f: 'Fahrenheit'
        };

        const temperature = this.state.temperature;
        const scale = this.state.scale;
        const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? this.tryConvert(temperature, this.toFahrenheit) : temperature;

        return(
            <div>
                <TemperatureInput
                    scale={scaleNames.c}
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />

                <TemperatureInput
                    scale={scaleNames.f}
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />

                <BoilingVerdict celsius={parseFloat(celsius)}/>
            </div>
        )
    }

}

export default Calculator;
