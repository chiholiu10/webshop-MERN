import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem, editItem, addItem } from '../actions/index';

export const ProductButtons = ({ 
    productId, 
    index, 
    productEditable, 
    title, 
    description, 
    amount 
}) => {
    const dispatch = useDispatch();
    console.log('add ' + productId, title, description, amount)
    return (
        <div>
            <button onClick={() => dispatch(deleteItem(productId, index))}>Delete</button>
            {productEditable ? <button type="submit" >Save</button> : <button onClick={() => dispatch((editItem(productId, index)))}>Edit</button>}
            <button onClick={() => dispatch(addItem(productId, title, description, amount))}>Add</button>
        </div>
    )
}
