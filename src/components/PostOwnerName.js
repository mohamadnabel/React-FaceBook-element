import React from "react";
import Mybutton from "./MYbutton";
import "../components/postOwnerName.css";
function OwerPost(props) {
  return (
    <div className="main-div">
      <img className="profile-picture" src={props.URLphoto} />
      <h4>{props.userName} </h4>
      <textarea
        className="texterya-nav"
        placeholder="what's in your maind ?"
      ></textarea>
      <button className="btn-submit">submit</button>
    </div>
  );
}

export default OwerPost;
