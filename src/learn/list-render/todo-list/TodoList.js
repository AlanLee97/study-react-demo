import React from "react";

//不推荐
// export function ListItem(props) {
//   const listItems = props.list.map((item, index) => {
//     return <li key={item.toString()}>{item}</li>;
//   });
//   return <ul>{listItems}</ul>;
// }

//推荐
export function ListItem(props) {
  return <div>{props.value}</div>;
}

export function List(props) {
  return (
      props.list.map(item => {
        return <ListItem key={item.toString()} value={item} />;
      })
  );
}

class TodoList extends React.Component{

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
          {/*不推荐*/}
          {/*<ListItem list={[1, 2, 3, 4, 5]} />*/}

          <List list={[1,2,3,4,5]} />
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

export default TodoList;
