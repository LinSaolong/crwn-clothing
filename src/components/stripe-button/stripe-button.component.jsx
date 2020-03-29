import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_Rjsz81UbEvd8C03sVHv30LLZ00lOSPp1s3';

    const onToken = token => {
        console.log(token);
        alert('PayMent Successful');
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='PAy Now '
            token={onToken}
            stripeKey={publishablekey}
        />
    )
};

export default StripeCheckoutButton;