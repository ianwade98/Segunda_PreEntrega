import React from 'react';

const ItemDetail = ({ detalleProducto }) => {
  const { img, name, description, price, stock, hashtags } = detalleProducto;

  return (
    <div className="p-5">
      <h2>Detalle de:{name}</h2>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <p className="card-text">{name}</p>
        <p className="card-text">{description}</p>
        <p className="card-text">${price}</p>
        <p className="card-text">stock: {stock}</p>
        {hashtags?.map((frase, index) => (
          <p className="card-text" key={index}>
            {frase}
          </p>
        ))}
        {/* safe navigation operator, en JS Optional chaining o encadenamiento opcional ,
         les dejo el link de la docu: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Optional_chaining */}
      </div>
    </div>
  );
};
