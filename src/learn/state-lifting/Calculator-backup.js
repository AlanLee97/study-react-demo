import React from "react";

export function BoilingVerdict(props) {
  if (props.celsius >= 100){
    return <p>is boil</p>
  }
  return <p>not boil</p>
}


class CalculatorBackup extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      temperature: ''
    };
  }

  // 渲染函数
  render() {
    const temperature = this.state.temperature;
    return (
        <div>
          <fieldset>
            <legend>请输入温度：</legend>
            <input type="text" value={temperature} onChange={this.handleChange}/>
            <BoilingVerdict celsius={parseFloat(temperature)}/>
          </fieldset>
        </div>
    );
  }

  handleChange = (e) => {
    this.setState({
      temperature: e.target.value
    })
  }


}

export default CalculatorBackup;
