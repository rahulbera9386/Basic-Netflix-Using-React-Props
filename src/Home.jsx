import React from "react";

function Card(props) {
  return (
    
    <div className="main-section">
      <div className="card">
        <img className="card-image" src={props.image} alt="Card image cap"></img>
        <h5 className="card-title">Netflix Original Series</h5>
        <p className="card-name">{props.name}</p>
        <a href={props.link} class="btn">
          Watch Now
        </a>
      </div>
    </div>
  
  

  );
}
export default Card;
