import React from "react";
import "../components/postOwnerName.css";
function Mybody(props) {
  const Mybody = [
    {
      PhotURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcDykN3rkuBQ8VchgR5fSoSQ48cp6dd7bRmqyPGVsHGA&s",
      captionPhoto:
        "I am not a product of my circumstances. I am a product of my decisions",
    },
  ];
  return (
    <div className="body-main-div">
      <img className="photo-body" src={Mybody[0].PhotURL} />
      <h3 className="caption-photo">{Mybody[0].captionPhoto}</h3>
    </div>
  );
}

export default Mybody;
