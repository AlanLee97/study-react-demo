import React from "react";

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      temperature: ''
    };
  }

  // 渲染函数
  render() {
    //const temperature = this.state.temperature;
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
        <div>
          <fieldset>
            <legend>请输入{scaleNames[scale]}温度：</legend>
            <input type="text" value={temperature} onChange={this.handleChange}/>
          </fieldset>
        </div>
    );
  }

  handleChange = (e) => {
    // this.setState({
    //   temperature: e.target.value
    // });
    this.props.onTemperatureChange(e.target.value);
  }



}

export default TemperatureInput;
