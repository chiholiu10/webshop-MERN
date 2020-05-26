import React from 'react';
import { useDispatch } from 'react-redux';
import { searchText } from '../actions/index';
import { connect } from 'react-redux';

const Cart = ({ ordersCart }) => {
    const dispatch = useDispatch();

    const getOrders = ordersCart.map((order, i) => {
        return (
            <div>
                <div>
                    { order.title }
                    { order.description }
                    { order.amount }
                </div>  
            </div>
        )
    });

    return (
       <div>
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