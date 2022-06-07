import React from "react";
import shoppingItems from './shopping-items.json'
function ShoppingCard () {
    const products = shoppingItems;
return(
    products.map(item => (
<div className="col">
<div className="card text-center" style={{margin: 10}}>
<img src={item.src} className="card-img-top" alt={item.name} style={{ margin: "0 auto", width:300}}/>
  <div className="card-body">
  <h5 className="card-title">{item.name}</h5>
    <p className="card-text">{item.description}</p>
    <button className="btn btn-warning">Buy this</button>
  </div>
</div>
</div>
)))
}
export default ShoppingCard;