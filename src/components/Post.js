import React from "react";
// import App from "../App";
import OwerPost from "./PostOwnerName";
function Mypost() {
  const DataBAse = [
    {
      user: "mohammad nabeel",
      post: "well hello there",
      profilePoto:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fd.furaffinity.net%2Fart%2Fbornyesterday%2F1557205635%2F1557205635.bornyesterday_icon4.png&tbnid=rCChZbJ3Kk6UfM&vet=12ahUKEwiIldKvodX_AhW3nycCHd1_A7AQMygPegUIARDLAQ..i&imgrefurl=https%3A%2F%2Fwww.furaffinity.net%2Fview%2F31451477%2F&docid=QknAOBJ9nekM5M&w=1280&h=1280&q=random%20avatar%20photo&ved=2ahUKEwiIldKvodX_AhW3nycCHd1_A7AQMygPegUIARDLAQ",
    },
    {
      user: "ahmad huy",
      post: "well hello there",
      profilePoto:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.seadn.io%2Fgae%2FdQy3FslC66s1Guv8oxTqbFhg9_ZzcF-EMl-ghKI5l-uI1XwyuL8aD5Wt3zr7Rvxg1PJouFIkiUc3T0GSF3wh0XO3e8m4T0P55HAm%3Fauto%3Dformat%26dpr%3D1%26w%3D1000&tbnid=8d94usN9dLY_rM&vet=12ahUKEwiIldKvodX_AhW3nycCHd1_A7AQMygOegUIARDJAQ..i&imgrefurl=https%3A%2F%2Fopensea.io%2Fassets%2Fmatic%2F0x2953399124f0cbb46d2cbacd8a89cf0599974963%2F21723753328937831082038741899993711065533977162665760875080219238944835895297&docid=FGHV8XHsaETZOM&w=640&h=640&q=random%20avatar%20photo&ved=2ahUKEwiIldKvodX_AhW3nycCHd1_A7AQMygOegUIARDJAQ",
    },
    {
      user: "abdullah said",
      post: "well hello there",
      profilePoto:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fapi.multiavatar.com%2Fstefan.svg&tbnid=4vLlZYwqVsncdM&vet=12ahUKEwiIldKvodX_AhW3nycCHd1_A7AQMygNegUIARDHAQ..i&imgrefurl=https%3A%2F%2Fwww.stefanjudis.com%2Fblog%2Fapis-to-generate-random-user-avatars%2F&docid=F7slFzIQdFV16M&w=800&h=800&q=random%20avatar%20photo&ved=2ahUKEwiIldKvodX_AhW3nycCHd1_A7AQMygNegUIARDHAQ",
    },
  ];
  return (
    <div>
      <OwerPost
        userName={DataBAse[0].user}
        body={DataBAse[0].post}
        URLphoto={DataBAse[0].profilePoto}
      />
      <OwerPost
        userName={DataBAse[1].user}
        body={DataBAse[1].post}
        URLphoto={DataBAse[1].profilePoto}
      />{" "}
      <OwerPost
        userName={DataBAse[2].user}
        body={DataBAse[2].post}
        URLphoto={DataBAse[2].profilePoto}
      />
    </div>
  );
}

export default Mypost;
