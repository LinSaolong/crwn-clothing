import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import {
    CheckOutItemContainer,
    ImageContainer,
    NameAndPriceContainer,
    QuantityContainer,
    Arrow,
    Values,
    RemoveButton
} from './checkout-item.styles';

const CheckOutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {imageUrl, name, quantity, price} = cartItem;
    return(
        <CheckOutItemContainer>
            <ImageContainer>
                <img alt='item' src={imageUrl}/>
            </ImageContainer>
            <NameAndPriceContainer>{name}</NameAndPriceContainer>
            <QuantityContainer>
                <Arrow onClick={()=> removeItem(cartItem)} >&#10094;</Arrow>
                <Values>{quantity}</Values>
                <Arrow onClick={()=> addItem(cartItem)} >&#10095;</Arrow>
            </QuantityContainer>
            <NameAndPriceContainer>{price}</NameAndPriceContainer>
            <RemoveButton onClick={()=> clearItem(cartItem)}>&#10005;</RemoveButton>
        </CheckOutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckOutItem);