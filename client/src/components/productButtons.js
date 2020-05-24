import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem, editItem, addItem } from '../actions/index';

export const ProductButtons = ({ productId, index, productEditable}) => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(deleteItem(productId, index))}>Delete</button>
            {productEditable ?   <button type="submit" >Save</button> :   <button onClick={() => dispatch((editItem(productId, index)))}>Edit</button>}
            <button onClick={() => dispatch(addItem(productId))}>Add</button>
        </div>
    )
}
