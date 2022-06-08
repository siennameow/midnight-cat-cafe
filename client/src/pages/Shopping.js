import React from 'react';
import ShoppingCard from '../components/Shopping/ShoppingCard';

function Shopping() {
    return (
      <div>
        <h1 className='text-center' style={{color: '#a16b1b'}}>Shopping for Midnight Cat products</h1>
      <div  className="d-flex row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4" style={{margin: 30}}>
      <ShoppingCard />
      </div>
      </div>
    );
  }


export default Shopping;
