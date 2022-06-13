import React, { useState } from 'react';
import '../components/Shopping/shopping.css';
import StripeCheckoutButton from '../components/Shopping/stripe';
import PRODUCTS from '../components/Shopping/shopping-items.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faMinus,
  faTrashAlt,
  faPlus,
  faCartPlus,
  faCreditCard,
} from '@fortawesome/free-solid-svg-icons';
library.add(faMinus);
library.add(faTrashAlt);
library.add(faPlus);
library.add(faCartPlus);
library.add(faCreditCard);

function Shopping() {
  const [cart, setCart] = useState(PRODUCTS);

  const addToCart = (i) => {
    setCart((prevState) =>
      prevState.map((item, o) => {
        if (i === o) {
          return {
            ...item,
            inCart: true,
            count: item.counterVal,
          };
        }
        return item;
      })
    );
  };

  const increaseQuantity = (i) => {
    setCart((prevCart) =>
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
              counterVal: item.counterVal + 1,
            };
        }
        return item;
      })
    );
  };

  const decreaseQuantity = (i) => {
    setCart((prevCart) =>
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
            counterVal: item.counterVal - 1,
          };
        }
        return item;
      })
    );
  };

  const removeFromCart = (i) => {
    setCart((prevCart) =>
      prevCart.map((item, o) => {
        if (i === o) {
          return {
            ...item,
            count: 0,
            counterVal: 1,
            inCart: false,
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
      <b style={{ color: '#5B4B8A', fontSize: '28px' }}>
        <p>Get Your Midnight Cat Merch here!</p>
        <p>Cart is empty</p>
        <img
          src="https://thumbs.gfycat.com/ReasonableConsiderateGoldeneye-max-1mb.gif"
          alt="empty"
          height="70px"
        ></img>
      </b>
    ) : (
      <>
        <b>
          <div>
            <div style={{ fontSize: '18px' }}>
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
              {/* <button className="btn" >Checkout</button> */}
              <div className="payment">
                <p>
                  <StripeCheckoutButton price={cartPriceTotal} />
                </p>
              </div>
            </p>
          </div>
        </b>
      </>
    );

  const cartItems = cart.map((item, i) => (
    <React.Fragment key={item.name}>
      {item.inCart && (
        <>
          <div style={{ fontSize: '14px' }}>
            <button
              style={{ border: 'none', backgroundColor: '#ffffff' }}
              onClick={() => removeFromCart(i)}
            >
              <FontAwesomeIcon
                className="fa-lg"
                style={{ color: '#7847ad', marginRight: '10px' }}
                icon="fas fa-trash-alt"
              />
            </button>
            <button
              style={{ border: 'none', backgroundColor: '#ffffff' }}
              onClick={() => decreaseQuantity(i)}
            >
              <FontAwesomeIcon icon="fas fa-minus" />
            </button>{' '}
            <span
              style={{
                marginLeft: '10px',
                marginRight: '10px',
                backgroundColor: '#cdc3d9',
              }}
            >
              {' '}
              {item.count}{' '}
            </span>
            <button
              style={{ border: 'none', backgroundColor: '#ffffff' }}
              onClick={() => increaseQuantity(i)}
            >
              <FontAwesomeIcon icon="fas fa-plus" />
            </button>
            <span style={{ marginLeft: '10px', marginRight: '10px' }}>
              {' '}
              {item.name}{' '}
            </span>{' '}
            Subtotal: $
            {Number.isInteger(item.count * item.price)
              ? item.count * item.price
              : `${(item.count * item.price).toFixed(2)}`}
          </div>

          <hr />
        </>
      )}
    </React.Fragment>
  ));

  const cartProducts = () => (
    <div>
      <div
        style={{ gap: '10px', margin: '20px' }}
        className="flex-wrap d-flex justify-content-center"
      >
        {cart.map((item, i) => (
          <div
            className="card text-center"
            style={{
              backgroundColor: '#eeebf5',

              maxHeight: 650,
              minHeight: 620,
              maxWidth: 400,
              minWidth: 350,
            }}
            key={item.name}
          >
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
                <br />
                Price: ${item.price}
              </h5>
              <p className="card-text" style={{ fontSize: 18 }}>
                {item.description}{' '}
              </p>
              {!item.inCart ? (
                <>
                  <button
                    style={{ border: 'none' }}
                    onClick={() => decreaseQuantity(i)}
                  >
                    <FontAwesomeIcon icon="fas fa-minus" />
                  </button>
                  <input
                    style={{
                      width: '20%',
                      marginBottom: '10px',
                      border: 'none',
                      textAlign: 'center',
                    }}
                    readOnly
                    type="text"
                    value={item.counterVal}
                  ></input>

                  <button
                    style={{ border: 'none' }}
                    onClick={() => increaseQuantity(i)}
                  >
                    <FontAwesomeIcon icon="fas fa-plus" />
                  </button>
                  <br />
                  <button className="btn" onClick={() => addToCart(i)}>
                    <FontAwesomeIcon icon="fas fa-cart-plus" /> Add To Cart
                  </button>
                </>
              ) : (
                <div>
                  <p>
                    <img
                      src="https://media1.giphy.com/media/4PUkqN8QQsaFIkqi8a/giphy.gif?cid=790b761109561ad615e61cf0659c7078a6e77df7205b3c88&rid=giphy.gif&ct=s"
                      alt="succeed"
                      height="50px"
                    ></img>
                  </p>
                  <p>
                    <b>Item added!</b>
                  </p>
                </div>
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
        {cartItems}
        {cartProducts()}
      </center>
    </div>
  );
}

export default Shopping;
