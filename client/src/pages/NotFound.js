import React from 'react';
import { useLocation } from 'react-router-dom';
import Gif from "../assets/images/404.gif"
import "../App.css"
function NotFound() {
  let location = useLocation();
  return (
    <div >     
        <center>
        <p>
          No match found for <code>{location.pathname}</code>
        </p>
        <img src={Gif} alt="404"  className='wrong'></img>
        </center>
    </div>
  );
}

export default NotFound;
