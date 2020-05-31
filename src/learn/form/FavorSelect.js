import React from "react";

class FavorSelect extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      value: 'banana'
    };
  }

  // 渲染函数
  render() {
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
            {/*多选 multiple={true} value={['apple', 'pear']}*/}
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="apple">苹果</option>
              <option value="banana">香蕉</option>
              <option value="pear">雪梨</option>
            </select>

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
    alert("提交的结果" + this.state.value);
    event.preventDefault()
  }


}

export default FavorSelect;
