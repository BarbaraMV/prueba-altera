import React from 'react';

//Importacion de componentes //
import IndicatorsProvider from './Economic/IndicatorsProvider';
import Indicators from './Components/Indicators';
import Dollar from './Components/Dollar';
import Euro from './Components/Euro';
import UF from './Components/UF';
import Unemployment from './Components/Unemployment';
import UTM from './Components/UTM';

import DollarGraphic from './Components/DollarGraphic'
import UnemploymentGraphics from './Components/UnemploymentGraphics'





function App() {

  const altera = <img src= "http://imgfz.com/i/3ZMTLWm.png"></img>
  
  return (

        
    <IndicatorsProvider>
      <h1 className ="title">PRUEBA {altera}</h1>


      <div className ="change">
      <Indicators />
      <Dollar />
      <Euro />
      <UF />
      <UTM />
      <Unemployment />
      </div>
      </IndicatorsProvider>

  );
}

export default App;
