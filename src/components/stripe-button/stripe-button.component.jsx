import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // stripe accept price in cents
  const publishableKey = "pk_test_S3INuLaC44Hlz5y925LYnp8C00yXY77LKi";

  const onToken = token => {
    console.log(token);
    alert("Payment Successsful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing LTd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is: $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
