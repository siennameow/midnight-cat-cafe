import React from 'react';
import Carousels from "../components/Home/Carousel"
import '../components/Home/homes.css'
import { Button, Card, Container}from 'react-bootstrap'



import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>

    <h1 className='h1-font' style={{backgroundColor:"white"}}> Midnight Cat Cafe</h1>
    <Container className='container-home'>
    
    <Carousels />   

    <Card className='card-1'>

    <h1 className='h1-font'>Tasty food & coffee, set inside a lovely family-friendly atmosphere.</h1>
    <p>Established in 2022, Midnight Cat Cafe is the place that celebrates delicious, fresh food, coffee, music and cats located at San Francisco, CA. <br/>
    <br/>

    Our menu changes seasonally and covers a wide range of meals, from yummy cupcakes to comforting old-world sandwiches and our fresh and filling salads. 
    <br/>    <br/> <Link to='/menu'><Button className="inquire">View Menu</Button></Link>
    <br/><br/>

    <h1 className='h1-font'>Events</h1>
    In addition to our menu, we offer multiple services on request such as catering for local businesses or events, <br/>
    we also offer baking and barista classes, as well as in-house events created by members of our Midnight Cat Cafe community.
    <br/><br/>
    Midnight Cat Cafe is also available for private events. We love to celebrate!  And we are proud to have a full-time, in-house events department. The event planners are here to help you organize everything from selecting one of our venues, customizing food and beverage packages or booking entertainment. We can host from 10-100 guests.  Feel free to reach out to midnightcatcafe@gmail.com to inquire.
    <br/><br/>
  <Button onClick={() => window.location = 'mailto:midnightcatcafe@gmail.com'} className="inquire">Inquire Now</Button>
    </p></Card>
    </Container>
    </div>
  )
}

export default Home