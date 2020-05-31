
import React from "react";
import UserInfo from "./userinfo/UserInfo";

function Comment(props) {
  return (
      <div className="comment" style={{border: 'solid red 1px'}}>
        <div className="user-info">
          {/*未使用组合组件*/}
{/*          <div className="avatar">
            <img src={props.avatar} alt={props.nickname}
                 style={{height: 100, width: 100}} />
          </div>
          <div className="nickname">
            {props.nickname}
          </div>*/}

          {/*使用组合组件*/}
          <UserInfo avatar={props.avatar} nickname={props.nickname} />

        </div>

        <div className="comment-text">
          {props.text}
        </div>

        <div className="comment-date">
          {props.date}
        </div>
      </div>
  );
}

export default Comment;
