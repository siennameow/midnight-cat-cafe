import React from 'react';
import EventCard from '../components/Event/EventCard';

function Event() {
  return (
    <div>
      <h1 className='text-center' style={{color: '#a16b1b'}}>Upcoming Event</h1>
    <div className='px-8'>
    <EventCard />
    </div>
    </div>
  );
}
export default Event;