import { types } from '../actions/index';

const initialState = {
    products: [],
    orders: [],
    searchBarText: "",
    amountProduct: 0,
    editToggle: false
}

export const products = (state = initialState, action) => {
    switch(action.type) {
        case types.FETCH_ITEMS: 
            return {
                products: action.allProducts,
                orders: []
            }
        case types.ADD_PRODUCT: 
            return {
                ...state,
                products: [...state.products, {productId: action.productId, title: action.title, description: action.description, amount: 1}]
            }
        case types.REMOVE_PRODUCT: 
            return {
                ...state,
                products: [...state.products.filter((_, i) => i !== action.id)]
            }
        case types.ADD_TO_CART: 
            console.log(action)
            return {
                ...state,
                 orders: [...state.orders, {title: action.title, description: action.description, amount: action.amount}]
            }
        case types.SORTING:
            let sortname = action.sortname;
            return {
                ...state,
                products: state.products.slice().sort((a, b) => {
                    let sortA = a[sortname].toLowerCase();
                    let sortB = b[sortname].toLowerCase();

                    if(sortA < sortB) {
                        return -1;
                    }
                    if(sortB < sortA) {
                        return 1;
                    }
                    return 0;
                })
            }
        case types.INCREMENT: 
            return {
                ...state,
                products: state.products.map((product, i) => i === action.index ? {
                        ...product,
                        amount: product.amount += 1
                    } : product
                )
            }
        case types.DECREMENT: 
            return {
                ...state,
                products: state.products.map((product, i) => i === action.index ? {
                        ...product,
                        amount: product.amount === 0 ? product.amount : product.amount -= 1
                    } : product
                )
            }
        case types.SEARCH:
            return {
                ...state,
                searchBarText: action.word
            }
        case types.UPDATE_PRODUCT: {
                return {
                    ...state,
                    products: state.products.map((product, i) => i === action.index ? {
                        ...product,
                        editable: true
                    } : product
                )
            }
        }
        case types.SAVE_PRODUCT: {
            return {
                ...state,
                products: state.products.map((product, i) => i === action.index ? {
                        ...product,
                        title: action.updatedTitle,
                        description: action.updatedDescription,
                        editable: false
                    } : product
                )
            }
        }
        default:
            return state;
    }
}

export default products;