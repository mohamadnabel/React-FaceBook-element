import React from "react";
import "../components/postOwnerName.css";
import Mybody from "./body";
function OwerPost(props) {
  return (
    <div className="main-div">
      
      <img className="profile-picture" src={props.URLphoto} />
      <h4>{props.userName} </h4>
      <textarea
        className="texterya-nav"
        placeholder="Say Hi !"
      ></textarea>
      {/* <div className="div-btn"> */}
      <button className="button-sub">Submite</button>
      {/* </div> */}
    </div>
  );
}

export default OwerPost;
