import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HelloClassComponent from "./learn/render-component/render-component-class";
import HelloFunctionComponent from "./learn/render-component/render-component-function";
import Comment from "./learn/render-component/example/Comment";
import Clock from "./learn/state-and-life-cycle/clock/Clock";
import Toggle from "./learn/event-handle/toggle/Toggle";
import LoggingButton from "./learn/event-handle/logging-button/LoggingButton";
import DeleteRow from "./learn/event-handle/convert-param/delete-row";
import ShowGender from "./learn/condiction-render/ShowGender";
import TodoList from "./learn/list-render/todo-list/TodoList";
import NameForm from "./learn/form/NameForm";
import EssayTextarea from "./learn/form/EssayTextarea";
import FavorSelect from "./learn/form/FavorSelect";
import Calculator from "./learn/state-lifting/Calculator";
import WelcomeDialog from "./learn/combination/WelcomeDialog";
import NetworkRequest from "./learn/network/test/NetworkRequest";
import TestRouter from "./learn/router/test/TestRouter";
import {BrowserRouter} from "react-router-dom";
import TestRouterView from "./learn/router/test/TestRouterView";
import RouterView from "./learn/router/test/RouterView";
// import RouteConfigExample from "./learn/router/test/RouterConfigExample";


const element = <div>
  <React.StrictMode>
    {/*<App />*/}

    {/*class组件*/}
    <HelloClassComponent name={"class组件"}/>
    {/*function组件*/}
    <HelloFunctionComponent name={"function组件"}/>

    {/*提取组件*/}
    <Comment avatar="https://gitee.com/AlanLee97/assert/raw/master/note_images/naruto.jpg"
             nickname="AlanLee"
             text="哈哈哈~"
             date={new Date().toLocaleString()}
    />

    {/*练习生命周期*/}
    <Clock/>

    {/*this绑定的问题*/}
    <Toggle/>

    {/*class fields语法，绑定this*/}
    <LoggingButton/>

    {/*向事件中传递参数*/}
    <DeleteRow/>

    {/*条件渲染*/}
    <ShowGender gender="f"/>

    {/*列表渲染*/}
    <TodoList/>

    {/*表单*/}
    <NameForm/>

    {/*文本区域*/}
    <EssayTextarea/>

    {/*select选择框*/}
    <FavorSelect/>
    <div style={{height: 100 + 'px'}}></div>

    {/*状态提升*/}
    <Calculator/>

    {/*组合*/}
    <WelcomeDialog/>

    {/*网络请求*/}
    <NetworkRequest style={{border: "1px red solid"}}/>


  </React.StrictMode>
</div>

const routerElement = <div>
  {/*测试路由*/}
  <BrowserRouter>
    {/*<TestRouter/>*/}

    <RouterView/>

    {/*<RouteConfigExample/>*/}
  </BrowserRouter>
</div>

ReactDOM.render(
    routerElement,

    document.getElementById('root')
);


/*
//元素渲染
function tick(){
  const element = <div>
    <h1>元素渲染</h1>
    <h2>当前时间：{new Date().toLocaleTimeString()}</h2>
  </div>

  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
*/


serviceWorker.unregister();
