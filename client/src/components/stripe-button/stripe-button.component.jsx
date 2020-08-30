import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_dtX41D65QMsot2qLSm9O8NJR003ldkqkHf';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    }).then(response => {
      console.log('Payment success: ', response);
      alert('Payment successful');
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert('There was an issue with your payment. Please sure that you use the provided credit card');
    });
  };

  return (
    <StripeCheckout
      currency='EUR'
      label='Pay Now'
      name='Fresh Moda Shop'
      billingAddress
      shippingAddress
      // image='http://svgshare.com/i/CUz.svg'
      image='https://svgshare.com/i/JbR.svg'
      description={`Your total is ${price}€`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeCheckoutButton;