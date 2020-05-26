
import React from 'react';
import { connect } from 'react-redux';
import { sorting } from '../actions/index';
import { useDispatch } from 'react-redux';
import { ProductButtons } from './productButtons';
import { ProductAmount } from './productAmount';
import { saveItem } from '../actions/index';

const ProductList = ({ productList }) => {
    const dispatch = useDispatch();
    let title, description;

    let getProductList = productList.map((product, i) => {
        return (
            product.editable ?
            <form key={i} onSubmit={e => {
                e.preventDefault();

                if((title.value.length < 1 && !title.value.trim()) || (description.value.length < 1 && !description.value.trim())) {
                    return;
                }
                dispatch(saveItem(product._id, i, title.value, description.value, product.amount));
                }
                }>
                Title
                <input
                    name="title" 
                    defaultValue={product.title} 
                    ref={(input) => title = input}
                />
                <input 
                    name="description" 
                    defaultValue={product.description} 
                    ref={(input) => description = input}
                />
                <ProductAmount 
                    amount={product.amount} 
                    index={i} 
                    productId={product._id} 
                    title={product.title}
                    description={product.description}
                />
                <ProductButtons 
                    productId={product._id} 
                    index={i} 
                    productEditable={product.editable}
                />
           
            </form>
        :
            <div key={i}>   
                <div>
                    <div>{product.title}</div>
                    <div>{product.description}</div>
                </div>
                <ProductAmount 
                    amount={product.amount} 
                    index={i} 
                    productId={product._id} 
                    title={product.title}
                />
                <ProductButtons 
                    productId={product._id} 
                    index={i}     
                    productEditable={product.editable}
                    title={product.title}
                    description={product.description}
                    amount={product.amount} 
                />
           
            </div>
        ) 
    });

    return (
        <div>
            <button onClick={() => dispatch(sorting('title'))}>Sort Title</button>
            <button onClick={() => dispatch(sorting('description'))}>Sort Description</button>
            <div>{getProductList}</div>
        </div>
    )
}

const mapStateToProps = state => {
    const searchText = state.products.searchBarText;
    return {
        productList: searchText !== undefined ? 
                    state.products.products.filter(product => product.title.toLowerCase().includes(searchText)) 
                    : state.products.products,
    }
}

export default connect(mapStateToProps, null)(ProductList);