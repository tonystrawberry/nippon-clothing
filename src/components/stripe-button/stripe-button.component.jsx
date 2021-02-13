import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IKL8LJq4iBKoIR0BKeGwGHFOIjZC4GQJDCWcYmcIJNUVmemaVobCpHws8MXBzTzbCINIy2XKecYu2JhoRLxnsjq00WNBptK8F';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Nippon Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;