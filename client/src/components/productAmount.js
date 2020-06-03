import React from 'react';
import { useDispatch } from 'react-redux';
import { decrementProduct, incrementProduct } from '../actions/index';

export const ProductAmount = ({ 
    amount, 
    index, 
    productId 
}) => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(decrementProduct(index, amount, productId))}>-</button>
            <input type="number" value={amount} name="amount"/>
            <button onClick={() => dispatch(incrementProduct(index, amount, productId))}>+</button>
        </div>
    )
}
