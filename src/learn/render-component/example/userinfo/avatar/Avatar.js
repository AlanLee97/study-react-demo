import React from "react";

function Avatar(props) {
  return (
      <div className="avatar">
        <img src={props.avatar} alt={props.username}
             style={{height: 100, width: 100}} />
      </div>
  );
}

export default Avatar;
