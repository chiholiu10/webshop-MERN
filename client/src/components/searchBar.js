import React from 'react';
import { useDispatch } from 'react-redux';
import { searchText } from '../actions/index';

const SearchBar = () => {
    const dispatch = useDispatch();
    const searchBarText = (e) => {
        dispatch(searchText(e.target.value))
    }

    return (
        <input type="text" placeholder="search" onChange={e => searchBarText(e)}/>
    )
}

export default SearchBar;