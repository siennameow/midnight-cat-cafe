import React from 'react';
import ShoppingCard from '../components/Shopping/ShoppingCard';
import '../components/Shopping/shopping.css' 


function Shopping() {
    return (
      <div>
        <h1 className='text-center' style={{color: '#a16b1b'}}>Shopping for Midnight Cat products</h1>
      <div className="shopping-card d-flex row row-cols-1 row-cols-md-2 row-cols-xxl-4 g-4" style={{margin: 30}}>
      <ShoppingCard />
      </div>
      </div>
    );
  }


export default Shopping;
