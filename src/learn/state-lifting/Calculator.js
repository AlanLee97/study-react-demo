import React from "react";
import TemperatureInput from "./TemperatureInput";

export function BoilingVerdict(props) {
  if (props.celsius >= 100){
    return <p>is boil</p>
  }
  return <p>not boil</p>
}


class Calculator extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      scale: 'c'
    };
  }

  // 渲染函数
  render() {
    const temperature = this.state.temperature;
    const  scale = this.state.scale;
    const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? this.tryConvert(temperature, this.toFahrenheit) : temperature;
    return (
        <div>
          <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
          <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
          <BoilingVerdict celsius={parseFloat(celsius)}/>
        </div>
    );
  }

  toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
  }

  toFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
  }

  tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  handleCelsiusChange = (temperature) =>{
    this.setState({
      temperature: temperature,
      scale: 'c'
    });
  }

  handleFahrenheitChange = (temperature) => {
    this.setState({
      temperature: temperature,
      scale: 'f'
    });
  }


}

export default Calculator;
