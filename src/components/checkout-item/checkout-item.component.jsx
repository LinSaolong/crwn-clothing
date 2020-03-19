import React from 'react';

import './checkout-item.style.scss';

const CheckOutItem = ({cartItem: {imageUrl, name, quantity, price}}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-botton'>&#10005;</div>
    </div>
)

export default CheckOutItem;