import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { data } from '../../mock/FakeApi';
import Loader from '../Loader/Loader';

const ItemListContainer = ({ greeting }) => {
  const [listaProductos, setListaProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    data
      .then((res) => setListaProductos(res))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>{greeting}</h2>
      {loading ? <Loader /> : <ItemList listaProductos={listaProductos} />}
    </div>
  );
};

export default ItemListContainer;