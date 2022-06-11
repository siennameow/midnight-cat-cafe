import React from "react";
import StripeCheckout from "react-stripe-checkout";
import logo from "../../assets/images/logo1.png";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_sLUqHXtqXOkwSdPosC8ZikQ800snMatYMb";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful!");
  };

  return (
    <StripeCheckout
      name="Midnight Cat Cafe Inc."
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    >
      <button className="btn">Checkout</button>
    </StripeCheckout>
    //Test Card: 4242 4242 4242 4242 - Exp: 01/28 - CVV: 123
  );
};

export default StripeCheckoutButton;
