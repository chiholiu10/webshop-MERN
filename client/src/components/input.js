import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, fetchProducts } from '../actions/index';
import { API_URL } from '../components/localhost';
import axios from 'axios';

const Input = () => {
    const dispatch = useDispatch();
    let title, description; 

    useEffect(() => {
        async function fetchData() {
            const products = await axios.get(API_URL);
            dispatch(fetchProducts(products.data));
        }
        fetchData();
      });

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                console.log()
                    if((title.value.length < 1 && !title.value.trim()) || (description.value.length < 1 && !description.value.trim())) {
                        return;
                    }
                    dispatch(addProduct(title.value, description.value, 0));
                    title.value = "";
                    description.value = "";
                }
                } method="POST">
                <div>
                    <label htmlFor="say">What greeting do you want to say?</label>
                    <input name="title" ref={(input) => title = input}/>
                </div>

                <div>
                    <label htmlFor="to">Who do you want to say it to?</label>
                    <input name="description" ref={(input) => description = input}/>
                </div>

                <div>
                    <button type="submit">Send my greetings</button>
                </div>
            </form>
        </div>
    )
}

export default Input;