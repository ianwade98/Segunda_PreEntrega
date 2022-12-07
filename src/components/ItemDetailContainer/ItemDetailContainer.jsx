import React, { useEffect, useState } from 'react';
import { data } from '../../mock/FakeApi';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';

const ItemDetailContainer = ({ greeting }) => {
  const [detalleProducto, setDetalleProducto] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    data
      .then((res) => setDetalleProducto(res.find((item) => item.id === '03')))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>{greeting}</h2>
      {loading ? <Loader /> : <ItemDetail detalleProducto={detalleProducto} />}
    </div>
  );
};

export default ItemDetailContainer;