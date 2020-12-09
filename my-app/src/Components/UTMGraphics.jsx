import React, { useState, useEffect } from 'react'
import { LineChart } from 'react-chartkick'
import 'chart.js'

const UTMGraphics = () => {
    const [date, setDate] = useState([]);
    const [UTMValue, setUTMValue] = useState([]);
  
    useEffect(() => {
      const fetchUTM = async () => {
        const data = await fetch("https://mindicador.cl/api/utm");
        const response = await data.json();
  
        const arrayDate = [];
        const arrayUTMValue = [];
        response.serie.map((element) => {
          return arrayDate.push(element.fecha), arrayUTMValue.push(element.valor);
        });
        //console.log(arrFechaValor)
  
        setDate(arrayDate);
        setUTMValue(arrayUTMValue);
      };
      fetchUTM();
    }, []);
  
    return (
    <div>
        {<LineChart
        id="users-chart" width="800px" height="500px"
        min={40000} max={70000}
        xmin="2020-10-01" xmax="2020-12-15"
        xtitle="Fecha" ytitle="Valor en pesos Chilenos"
        data={[[`${date}`, `${UTMValue}`]]} />}
        </div>
    );
  }


export default UTMGraphics
