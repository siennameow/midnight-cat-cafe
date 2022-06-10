import React from 'react';
import '../Event/event.css';

function EventCard({ info }) {
  return (
    <div className="card mb-3 text-center g-4">
      <img
        src={info.src}
        className="card-img text-center"
        alt={info.title}
        style={{ width: '100%' }}
      />
      <div className="card-body">
        <h5 className="card-title text-dark">{info.title}</h5>
        <p className="card-text text-dark">
          <i>{info.description}</i>
        </p>
        <p className="card-text text-dark">{info.time}</p>
        <a href="/" className="btn btn-warning">
          See event detail
        </a>
      </div>
    </div>
  );
}

export default EventCard;
