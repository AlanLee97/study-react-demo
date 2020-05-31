import React from "react";

class EssayTextarea extends React.Component{

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
          <p>{this.state.value}</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              文章：
              <textarea value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="提交"/>
          </form>
        </div>
    );
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit = (event) => {
    alert("提交的文章：" + this.state.value);
    event.preventDefault();
  }


}

export default EssayTextarea;
