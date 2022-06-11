import React, { useState } from "react";
import "../components/Shopping/shopping.css";
import PRODUCTS from "../components/Shopping/shopping-items.json";


function Shopping() {
  const [cart, setCart] = useState(PRODUCTS);

  const addToCart = i => {
//setCart to update the item detail
  };

  const increaseQuantity = i => {
//setCart to increase the count
  };

  const decreaseQuantity = i => {
//setCart to decrease the count
  };

  const removeFromCart = i => {
//setCart to remove the item
  };




  const cartTotals = () => {
    //calculate cart totals
  }

  const cartProducts = () => (
    <div>
    <div style={{gap: "10px", margin:"20px"}} className="flex-wrap d-flex justify-content-center">
      {cart.map((item, i) => (

        <div  
        className="card text-center"
        style={{
          backgroundColor: "#eeebf5",

          maxHeight: 650,
          minHeight: 620,
          maxWidth: 400,
          minWidth: 350,

        }} key={item.name}>
           <center>
            <img
              src={item.img}
              className="card-img-top"
              alt={item.name}
              style={{ width: 300 }}
            />
          </center>

          <div className="card-body">
          <h5 className="card-title">
              {item.name} <br />
              <br />Price: ${item.price}
            </h5>
            <p className="card-text" style={{ fontSize: 18 }}>
              {item.description}{" "}
            </p>
          {!item.inCart ? (
            <>
              <button onClick={() => decreaseQuantity(i)}>-</button>
              <input style={{width: "6%", marginBottom: "10px"}} readOnly type="text" value={item.counterVal} ></input>

              <button  onClick={() => increaseQuantity(i)}>+</button>
              <br />
              <button className="btn" onClick={() => addToCart(i)}>{' '}Add To Cart</button>
            </>
          ) : (
            <p>
              <b>Item added!</b>
            </p>
          )}
          </div>
        </div>

      ))}
      
    </div>
    </div>
  );

  return (
    <div>
      <center>
      {cartTotals()}
      {cartProducts()}
      </center>
    </div>
  );
}


export default Shopping;
