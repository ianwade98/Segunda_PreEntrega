import React from 'react';
import './style.css';

import Item from './components/Item/Item.jsx';
import ItemDetail from './components/Item/ItemDetail.jsx';  
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemList from './components/ItemList/ItemList.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/Item/ItemDetail.jsx'; 
import Loader from './components/Loader/Loader.jsx';


export default function App() {
  return (
    <div>
      <Item/>
      <ItemDetail/>
      <ItemDetailContainer />
      <ItemList/>
      <ItemListContainer greeting="Listado de productos" />
      <Loader/>
    </div>
  );
}
