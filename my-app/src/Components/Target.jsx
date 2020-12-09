import React from 'react'

const Target =({ nombre, valor }) => {
    let num = valor.toLocaleString("es-CL");
    return (
      <>
        <div className="target">
          <p>{nombre}</p>
          <p>{`$ ${num}`}</p>
        </div>
      </>
    );
  };

export default Target
