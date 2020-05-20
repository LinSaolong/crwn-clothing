import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({
    price
}) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_Rjsz81UbEvd8C03sVHv30LLZ00lOSPp1s3';

    const onToken = token => {
        axios({
                url: 'payment',
                method: 'post',
                data: {
                    amount: priceForStripe,
                    token: token
                }
            })
            .then(response => {
                alert('succesful payment');
            })
            .catch(error => {
                console.log('Payment Error: ', JSON.parse(error));
                alert(
                    'There was an issue with your payment! Please make sure you use the provided credit card.'
                );
            });
    };

    return ( <
        StripeCheckout label = 'Pay Now'
        name = 'CRWN Clothing Ltd.'
        billingAddress shippingAddress image = 'https://svgshare.com/i/CUz.svg'
        description = {
            `Your total is $${price}`
        }
        amount = {
            priceForStripe
        }
        panelLabel = 'PAy Now '
        token = {
            onToken
        }
        stripeKey = {
            publishablekey
        }
        />
    )
};

export default StripeCheckoutButton;