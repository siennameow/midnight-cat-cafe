import React from "react";
import shoppingItems from './shopping-items.json'
import '../Shopping/shopping.css'

function ShoppingCard () {
    const products = shoppingItems;
return(
    products.map(item => (
<div className="col">
<center><div className="card text-center" style={{backgroundColor: "#eeebf5", maxHeight: 650, maxWidth: 400}}>
<center><img src={item.src} className="card-img-top" alt={item.name} style={{width:300 }}/></center>
  <div className="card-body">
  <h5 className="card-title">{item.name}</h5>
    <p className="card-text">{item.description}</p>
    <button className="btn text-light" style={{backgroundColor: "#5e4e85"}}>Buy this</button>
  </div>
</div></center>
</div>
)))
}
export default ShoppingCard;