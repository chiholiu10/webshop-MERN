import React from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { decrementProductCart, incrementProductCart } from '../actions/index';

const Cart = ({ ordersCart }) => {
    const dispatch = useDispatch();

    const getOrders = ordersCart.map((order, i) => {
        return (
            <div key={i}>
                <div>
                    <button onClick={() => dispatch(decrementProductCart())}>-</button>
                    <button onClick={() => dispatch(incrementProductCart())}>+</button>
                    { order.title }
                    { order.description }
                    { order.amount }
                </div>  
            </div>
        )
    });

    return (
        <div className="navbar">
            {getOrders}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ordersCart: state.products.orders
    }
}

export default connect(mapStateToProps, null)(Cart);