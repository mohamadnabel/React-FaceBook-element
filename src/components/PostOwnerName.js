import React from "react";
import Mypost from "./Post";
function OwerPost(props) {
  return (
    <div>
      <h1>{props.userName} </h1>
      <textarea placeholder="what's in your maind ?"></textarea>

      <img alt="imagees" src={props.URLphoto} />
    </div>
  );
}

export default OwerPost;
