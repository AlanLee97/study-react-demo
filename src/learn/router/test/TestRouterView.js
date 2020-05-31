import React from "react";
import RouterView from "./RouterView";

class TestRouterView extends React.Component{

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
          <RouterView/>
        </div>
    );
  }
}

export default TestRouterView;
