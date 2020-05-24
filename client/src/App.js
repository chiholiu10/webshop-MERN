import React from 'react';
import Input from './components/input';
import ProductList from './components/productList';
import Searchbar from './components/searchBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Searchbar/>
        <Input/>
        <ProductList/>
      </header>
    </div>
  );
}

export default App;
