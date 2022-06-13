import React from "react";
import "../Event/event.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function EventCard({ info }) {
  return (
    <div className="card mb-3 text-center g-4">
      <div className="container justify-center">
        <img
          src={info.src}
          className="card-img text-center"
          alt={info.title}
          style={{ width: "100%", maxWidth: "500px" }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title text-dark">{info.title}</h5>
        <p className="card-text text-dark">
          <i>{info.description}</i>
        </p>
        <p className="card-text text-dark">{info.time}</p>
        <Link to={"/Events/" + info.title}>
          <Button className="btn btn-warning">See event detail</Button>
        </Link>
      </div>
    </div>
  );
}

export default EventCard;
