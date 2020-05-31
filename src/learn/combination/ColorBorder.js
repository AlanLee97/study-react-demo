import React from "react";
import './style.css';

class ColorBorder extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // 渲染函数
  render() {
    return (
        <div >
          <div className={'al-border-color-' + this.props.color}>
            哈哈
          </div>
          <div>
            {this.props.children}
          </div>
        </div>

    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {

  }

  //组件将要卸载时
  componentWillUnmount() {

  }


}

export default ColorBorder;
