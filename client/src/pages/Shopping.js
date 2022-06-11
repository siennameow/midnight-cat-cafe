import React, { useState } from "react";
import "../components/Shopping/shopping.css";
import PRODUCTS from "../components/Shopping/shopping-items.json";


function Shopping() {
  const [cart, setCart] = useState(PRODUCTS);

  const addToCart = i => {
    setCart(prevState =>
      prevState.map((item, o) => {
        if (i === o) {
          return {
            ...item,
            inCart: true,
            count: item.counterVal
          };
        }
        return item;
      })
    );
  };

  const increaseQuantity = i => {
    setCart(prevCart =>
      prevCart.map((item, o) => {
        if (i === o && item.inCart) {
          if (item.count > 9) {
            return item;
          } else return { ...item, count: item.count + 1 };
        } else if (i === o) {
          if (item.counterVal > 9) {
            return item;
          } else
            return {
              ...item,
              counterVal: item.counterVal + 1
            };
        }
        return item;
      })
    );
  };

  const decreaseQuantity = i => {
    setCart(prevCart =>
      prevCart.map((item, o) => {
        if (i === o && item.inCart) {
          if (item.count > 1) {
            return { ...item, count: item.count - 1 };
          } else {
            return item;
          }
        } else if (i === o && item.counterVal > 1) {
          return {
            ...item,
            counterVal: item.counterVal - 1
          };
        }
        return item;
      })
    );
  };

  const removeFromCart = i => {
    setCart(prevCart =>
      prevCart.map((item, o) => {
        if (i === o) {
          return {
            ...item,
            count: 0,
            counterVal: 1,
            inCart: false
          };
        }
        return item;
      })
    );
  };

  const cartCountTotal = cart.reduce((acc, item) => acc + item.count, 0);
  const cartPriceTotal = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  const cartTotals = () =>
  cartCountTotal === 0 ? (
    <b style={{color:"#5B4B8A", fontSize: "28px"}}>
      <p>Shopping for Midnight Cat products</p>
    <p>Cart is empty</p></b>
  ) : (
    <>
      <b>

        <div>
        <div style={{fontSize: "18px"}}>
     {cartCountTotal} Items in   
     <img
      src="https://media3.giphy.com/media/3WCPjZo9Yslq2Y6coa/giphy.gif?cid=790b76118ee5b9f06146d85c126ba6efd9c596630f4de9d6&rid=giphy.gif&ct=s"
      alt="cart"
      height="80"
    ></img> 
    </div>
        <p>
          Total Price: $
          {Number.isInteger(cartPriceTotal)
            ? cartPriceTotal
            : cartPriceTotal.toFixed(2)}{' '}
            <button className="btn">Checkout</button>
        </p>
        </div>
      </b>
    </>
  );

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
