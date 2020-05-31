import React from "react";

class DeleteRow extends React.Component{

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
          <button onClick={(e) => this.handleDelete(10, e)}>
            删除行
          </button>
        </div>
    );
  }

  handleDelete = (e) => {
    console.log(e);
  }



}

export default DeleteRow;
