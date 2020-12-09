import React, { useState, useEffect } from 'react'
import DollarGraphics from './DollarGraphic'
// importacion AXIOS para consumo de APIS //
import axios from 'axios';


/*import { IndicatorContext } from '../Economic/IndicatorsProvider';*/

const Dollar = () => {

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
        <h3>Variación del Dolar (30 días)</h3>
        <DollarGraphics />
        </div>
       
        )
          
}    
    


export default Dollar
