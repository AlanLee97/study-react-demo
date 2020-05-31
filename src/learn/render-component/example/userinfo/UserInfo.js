import React from "react";
import Avatar from "./avatar/Avatar";
import Text from "../common/Text/Text";

function UserInfo(props) {
  return (
      <div>
        <Avatar avatar={props.avatar}/>
        <Text text={props.nickname}/>
      </div>
  );
}

export default UserInfo;
