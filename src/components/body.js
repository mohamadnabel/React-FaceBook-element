import React from "react";
import "../components/postOwnerName.css";
function Mybody() {
  const Mybody = [
    {
      PhotURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcDykN3rkuBQ8VchgR5fSoSQ48cp6dd7bRmqyPGVsHGA&s",
      captionPhoto:
        "I am not a product of my circumstances. I am a product of my decisions",
      PhotURL:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
      captionPhoto:
        "I am not a product of my circumstances. I am a product of my decisions",
      PhotURL:
        "https://images.unsplash.com/photo-1535536609565-9675cafeff32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80",
      captionPhoto:
        "I am not a product of my circumstances. I am a product of my decisions",
      PhotURL:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      captionPhoto:
        "I am not a product of my circumstances. I am a product of my decisions",
      PhotURL:
        "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80",
      captionPhoto:
        "I am not a product of my circumstances. I am a product of my decisions",
    },
  ];
  return (
    <center>
      <div className="body-main-div">
        <img className="photo-body" src={Mybody[0].PhotURL} />
        <h3 className="caption-photo">{Mybody[0].captionPhoto}</h3>
        <img className="photo-body" src={Mybody[0].PhotURL} />
        <h3 className="caption-photo">{Mybody[0].captionPhoto}</h3>
        <img className="photo-body" src={Mybody[0].PhotURL} />
        <h3 className="caption-photo">{Mybody[0].captionPhoto}</h3>
        {/* <img className="photo-body" src={Mybody[1].PhotURL} />
        <h3 className="caption-photo">{Mybody[1].captionPhoto}</h3>
        <img className="photo-body" src={Mybody[4].PhotURL} />
        <h3 className="caption-photo">{Mybody[0].captionPhoto}</h3>
        <img className="photo-body" src={Mybody[0].PhotURL} />
        <h3 className="caption-photo">{Mybody[0].captionPhoto}</h3> */}
      </div>
    </center>
  );
}

export default Mybody;
