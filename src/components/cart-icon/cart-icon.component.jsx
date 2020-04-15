import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemCount } from '../../redux/cart/cart.selectors';


import {
    CartIconContainer,
    AddShoppingIcon,
    ItemCount
} from './cart-icon.style';


const CartIcon = ({ toggleCartHidden, itemCount }) =>(
    <CartIconContainer onClick={toggleCartHidden} >
        <AddShoppingIcon/>
        <ItemCount>{ itemCount }</ItemCount>
    </CartIconContainer>
)

const mapDispatchProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount
})

export default connect(mapStateToProps, mapDispatchProps)(CartIcon);