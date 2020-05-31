import React from "react";
import {AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios} from 'react-axios';
import axios from "axios";
import {request} from "../config/NetworkRequest";
import {WORKS_GET_ALL} from "../util/ApiConst";

class NetworkRequest extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      result: ''
    };
  }

  // 渲染函数
  render() {
    return (
        <div>
          {/*
          <Get url="http://47.103.204.62:8764/api/v1/works/get/all">
            {(error, response, isLoading, onReload) => {
              if(error) {
                return (<div>Something bad happened: {error.message} <button onClick={() => onReload({ params: { reload: true } })}>Retry</button></div>)
              }
              else if(isLoading) {
                return (<div>Loading...</div>);
              }
              else if(response !== null) {
                console.log(response);
                return (
                    <div>
                      {JSON.stringify(response.data.data)}
                      <button onClick={() => onReload({ params: { refresh: true } })}>
                        Refresh
                      </button>
                    </div>
                );
              }
              return (<div>Default message before request is made.</div>)
            }}
          </Get>
          */}

          <div style={{padding: 10 + 'px', backgroundColor: "#fcfcfc"}}>
            {this.state.result}
          </div>
          <button onClick={this.getRequest2}>发起GET请求</button>
        </div>
    );
  }

  getRequest = () => {
    axios.get("http://47.103.204.62:8764/api/v1/works/get/all").then(res => {
      console.log(res);
      this.setState({
        result: JSON.stringify(res.data.data)
      })
    }).catch(err => {
      console.log(err);
    });
  }

  getRequest2 = () => {
    request({
      url: WORKS_GET_ALL,
      method: 'get'
    }).then(res => {
      console.log(res);
      this.setState({
        result: JSON.stringify(res.data.data)
      });
    }).catch(err => {
      console.log(err);
    })
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {

  }

  //组件将要卸载时
  componentWillUnmount() {

  }


}

export default NetworkRequest;
