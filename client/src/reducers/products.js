import { types } from '../actions/index';

const initialState = {
    products: [],
    searchBarText: "",
    amountProduct: 0,
    editToggle: false
}

export const products = (state = initialState, action) => {
    switch(action.type) {
        case types.FETCH_ITEMS: 
            return {
                products: action.allProducts
            }
        case types.ADD_PRODUCT: 
            return {
                ...state,
                products: [...state.products, {title: action.title, description: action.description, amount: 0}]
            }
        case types.REMOVE_PRODUCT: 
            return {
                ...state,
                products: [...state.products.filter((_, i) => i !== action.id)]
            }
        case types.ADD_TO_CART: 
            return {
                ...state
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
            console.log('update')
                return {
                    ...state,
                    products: state.products.map((product, i) => i === action.index ? {
                        ...product,
                        editable: true
                    }: product
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
                    }: product
                )
            }
        }
        default:
            return state;
    }

}

export default products;