import React from "react";

class Clock extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  // 渲染函数
  render() {
    return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  //组件将要卸载时
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  //时钟函数
  tick(){
    this.setState({
      date: new Date()
    });
  }

}

export default Clock;
