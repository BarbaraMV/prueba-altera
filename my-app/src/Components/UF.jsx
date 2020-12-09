import React, { useState, useEffect } from 'react'
import axios from 'axios';
import UFGraphics from './UFGraphics';

const UF = () => {
    const [data, setData] = useState ([])

  useEffect(() => {
  axios.get("https://mindicador.cl/api")
  .then(res => res)
  .then(res => setData(res.data))
  .catch(error => console.log(error))
    
  }, 
  []);
  console.log ('muestra la data', data)

  


      return (
        <div className="changeIndicators">
        <h3>Variación de la Unidad de Fomento UF (30 días)</h3>
        <UFGraphics />
        </div>
       
        )
          
}    
    

export default UF
