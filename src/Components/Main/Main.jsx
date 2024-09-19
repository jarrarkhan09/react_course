import "./main.css";

import React from "react";

const Main = (props) => {
  return (
    <div className="movies_card">
      <img src={props.img} alt="" />
      <p>{props.title} </p>
      <p>Year : {props.year}</p>
    </div>
  );
};

export default Main;
