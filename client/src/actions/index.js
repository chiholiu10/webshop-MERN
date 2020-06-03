import { API_URL } from '../components/localhost';
import axios from 'axios';

export const types = {
    ADD_PRODUCT: 'ADD_PRODUCT',
    REMOVE_PRODUCT: 'REMOVE_PRODUCT',
    FETCH_ITEMS: 'FETCH_ITEMS',
    UPDATE_PRODUCT: 'UPDATE_PRODUCT',
    SAVE_PRODUCT: 'SAVE_PRODUCT',
    SORTING: 'SORTING',
    SEARCH: 'SEARCH',
    ADD_TO_CART: 'ADD_TO_CART',
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    DECREMENT_PROODUCT_CART: 'DECREMENT_PROODUCT_CART',
    INCREMENT_PROODUCT_CART: 'INCREMENT_PROODUCT_CART',
}

export const addProduct = (title, description, amount) => {
    return dispatch => {
        dispatch(addProductSucceed(title, description, amount))
        try {
            axios.post(API_URL, {
            title, 
            description,
            amount
        }).then(res => {
            console.log(res.config.data);
        })
        } catch(err) {
            console.log(err)
        }
    }
}

export const deleteItem = (id, index) => {
    return dispatch => {
        dispatch(removeItem(index))
        try {
            axios.delete(`${API_URL}/:${id}`
        ).then(res => {
            console.log(res);
        })
        } catch(err) {
            console.log(err)
        }
    }
}

export const editItem = (id, index) => {
    return dispatch => {
        dispatch(updateItem(index))

        try {
            axios.patch(`${API_URL}/:${id}`)
        .then(res => {
            console.log(res)
        })
        } catch(err) {
            console.log(err)
        }
    }
}
export const saveItem = (id, index, updatedTitle, updatedDescription, productAmount) => {
   return dispatch => {
       dispatch(saveText(index, updatedTitle, updatedDescription))
       try {
           axios.patch(`${API_URL}/textUpdate/${id}`, {
               title: updatedTitle,
               description: updatedDescription
           })
           .then(res => {
               console.log(res)
           })
       } catch(err) {
           console.log(err)
       }
   }
}

export const searchText = (text) => {
    return dispatch => {
        dispatch(searchWord(text));
    }
}

export const addItem = (productId, title, description, amount) => {
    console.log('add');
    return dispatch => {
        dispatch(addToCart(productId, title, description, amount));
    //     try {
    //         axios.post(`${API_URL}/order`, {
    //         title, 
    //         description,
    //         amount
    //     }).then(res => {
    //         console.log(res.config.data);
    //     })
    //     } catch(err) {
    //         console.log(err)
    //     }
    }
}

export const incrementProduct = (index, updateAmount, id) => {
    console.log('increment')
    return dispatch => {
        dispatch(increment(index));
        try {
            axios.patch(`${API_URL}/amountUpdate/${id}`, {
            amount: updateAmount += 1 
        }).then(res => {
            console.log(res.config);
        })
        } catch(err) {
            console.log(err)
        }
    }
}

export const decrementProduct = (index, amount, id) => {
    console.log('decrement' + id)
    return dispatch => {
        dispatch(decrement(index));
        try {
            axios.put(`${API_URL}/amount/${id}`, {
            amount
        }).then(res => {
            console.log(res.config.data);
        })
        } catch(err) {
            console.log(err)
        }
    }
}

export const incrementProductCart = () => {
    return dispatch => {
        dispatch(incrementCart())
        // try {
        //     console.log('increment')
        // } 
        // catch {
        //     console.log('error');
        // }
    }
}

export const decrementProductCart = () => {
    console.log('decrementProductCart');
}

export const sorting = (row) => {
    let dynamicSortName = row;
    let lowerCaseSortName = dynamicSortName.toLowerCase();

    return dispatch => {
        dispatch(sortProduct(lowerCaseSortName))
    }
}

export const fetchProducts = (data) => {
    return dispatch => {
        dispatch(fetchAllProducts(data))
    }
}

const incrementCart = () => {
    console.log('increment');
}

const searchWord = (word) => {
    return {
        type: types.SEARCH,
        word
    }
}

const addToCart = (productId, title, description, amount) => {
    console.log()
    return {
        type: types.ADD_TO_CART,
        productId,
        title, 
        description,
        amount
    }
}

const sortProduct = (sortName) => {
    console.log('sortName ' + sortName);
    // return {
    //     type: types.SORTING,
    //     sortname: sortName
    // }
}

const updateItem = (index) => {
    return {
        type: types.UPDATE_PRODUCT,
        index
    }
}

const increment = (index) => {
    return {
        type: types.INCREMENT,
        index
    }
}

const decrement = (index) => {
    return {
        type: types.DECREMENT,
        index
    }
}

const saveText = (index, updatedTitle, updatedDescription) => {
    return {
        type: types.SAVE_PRODUCT,
        index,
        updatedTitle, 
        updatedDescription
    }
}

const fetchAllProducts = (allProducts) => {
    return {
        type: types.FETCH_ITEMS,
        allProducts
    }
}

const addProductSucceed = (title, description, amount) => {
    return {
        type: types.ADD_PRODUCT,
        title, 
        description, 
        amount
    }
} 

const removeItem = (id) => {   
    return {
        type: types.REMOVE_PRODUCT,
        id
    }
}

