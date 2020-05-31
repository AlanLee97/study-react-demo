import React from "react";

class ShowGender extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      gender: 'm'
    };
  }

  // 渲染函数
  render() {
    return (
        <div>
          {this.props.gender === 'm' ? '男' : '女'}
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

export default ShowGender;
