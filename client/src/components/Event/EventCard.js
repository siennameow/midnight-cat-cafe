import React from 'react';
import EventCard from './EventCard';
const events= [
  {
    id: 1,
    src: 'https://cdn.filestackcontent.com/compress/output=format:webp/cache=expiry:max/resize=width:936/d72jt183TkGNmXDIkqst',
    title: 'Paint Night',
    description: 'Enjoy the our special drinks while painting',
    time: 'Saturday 7:00-8:00pm Aug 26th, 2022'
  },
  {
    id: 2,
    src: 'https://insidethemagic.net/wp-content/uploads/2020/04/@Baristart.png',
    title: 'Latte Art Class',
    description: 'Learn the basic skill for making a latte art from zero',
    time: 'Saturday 2:00-3:00pm July 25th, 2022'
  },
  {
    id: 3,
    src: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/party-cat-sunglasses-cool-fun-event-disco-ad-design-template-f82bff1a6f7ee7bace485f82d2cbe5db_screen.jpg?ts=1610722037',
    title: 'Dance With Cats',
    description: 'Bring your cats to the cafe and enjoy this Friday night dancing party.',
    time: 'Friday 7:00-8:00pm Aug 13th, 2022'
  },
]

function Event() {
  return (
    <div>
      <h1 className='text-center' style={{color: '#a16b1b'}}>Upcoming Event</h1>
    <div className='px-8'>
    <EventCard events={events}/>
    </div>
    </div>
  );
}
export default Event;