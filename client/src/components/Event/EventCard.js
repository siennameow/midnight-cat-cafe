import React from "react";

function EventCard (props) {
return (
    props.events.map(list => 
<div className="card mb-3 text-center g-4">
  <img src={list.src} className="card-img text-center" alt={list.title} style={{width:'100%'}}/>
  <div className="card-body">
    <h5 className="card-title text-dark">{list.title}</h5>
    <p className="card-text text-dark">{list.description}</p>
    <p className="card-text text-dark">{list.time}</p>
    <a href="/" className="btn btn-warning">See event detail</a>
  </div>
</div>
))}

export default EventCard;