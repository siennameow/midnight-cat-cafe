import React from "react";
import StripeCheckout from "react-stripe-checkout";
import logo from "../../assets/images/logo1.png";
import Swal from 'sweetalert2'
import nyan from "../../assets/images/nyan.gif"

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_sLUqHXtqXOkwSdPosC8ZikQ800snMatYMb";

    const onToken = token => {
        console.log(token);
        Swal.fire({
            title: 'Payment Successful!',
            width: 300,
            height: 50,
            color: '#716add',
            background: '#fff',
            backdrop: `
              rgba(0,0,123,0.4)
              url(${nyan})
              left top
              no-repeat
            `
          })
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
