import React from "react";

class NameForm extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  // 渲染函数
  render() {
    return (
        <div>
          <div>{this.state.value}</div>
          <form onSubmit={this.handleSubmit}>
            <label>
              名字：
              <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="提交"/>
          </form>
        </div>
    );
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
    console.log(this.state.value)
  }

  handleSubmit = (event) => {
    alert('提交的名字' + this.state.value);
    event.preventDefault();
  }


}

export default NameForm;
