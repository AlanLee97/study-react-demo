import React from "react";

class Toggle extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleClick = this.handleClick.bind(this);
  }

  // 渲染函数
  render() {
    return (
        <div>
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? "ON" : "OFF"}
          </button>
        </div>
    );
  }

  handleClick(){
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
}

export default Toggle;
