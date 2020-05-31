import React from "react";

class LoggingButton extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // 渲染函数
  render() {
    return (
        <div>
          <button onClick={this.handleClick}>
            logging button
          </button>
        </div>
    );
  }

  //class fields语法，可以绑定this
  handleClick = () => {
    console.log(this);
  }

  //没有绑定this
  // handleClick2(){
  //   this.setState(() => {
  //     console.log(this);
  //   });
  // }


}

export default LoggingButton;
