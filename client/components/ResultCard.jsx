import React from 'react';

const ResultCard = props =>(
  <div className="result-card event-card">
    <img className = 'card-img' src={props.imgUrl}></img>
    <h2 className="card-name"><a href = {props.website}>{props.name}</a></h2>
    <p className = 'card-start-end'>{props.startTime}-{props.endTime}</p>
    {/* <p className = 'card-category'>{props.category}</p> */}
    <p className = 'card-description'>{props.descriptionText}</p>
    <p className = 'card-address'>{props.address}</p>
    <p className="card-price">{props.price}</p>
    <div className= "not-liked-heart"></div>
  </div> 
)

export default ResultCard;