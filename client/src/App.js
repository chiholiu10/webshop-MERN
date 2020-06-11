import React from 'react';
import Input from './components/input';
import ProductList from './components/productList';
import Searchbar from './components/searchBar';
import Cart from './components/cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cart/>
        <Searchbar/>
        <Input/>
        <ProductList/>
      </header>
    </div>
  );
}

export default App;
