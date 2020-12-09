import React, { useState, useEffect } from 'react'
import { LineChart } from 'react-chartkick'
import 'chart.js'


const EuroGraphics = () => {
    const [date, setDate] = useState([]);
    const [euroValue, setEuroValue] = useState([]);
  
    useEffect(() => {
      const fetchEuro = async () => {
        const data = await fetch("https://mindicador.cl/api/euro");
        const response = await data.json();
  
        const arrayDate = [];
        const arrayEuroValue = [];
        response.serie.map((element) => {
          return arrayDate.push(element.fecha), arrayEuroValue.push(element.valor);
        });
        //console.log(arrFechaValor)
  
        setDate(arrayDate);
        setEuroValue(arrayEuroValue);
      };
      fetchEuro();
    }, []);
  
    return (
    <div>
        {<LineChart
        id="users-chart" width="800px" height="500px"
        min={500} max={1500}
        xmin="2020-12-01" xmax="2020-12-15"
        xtitle="Fecha" ytitle="Valor en pesos Chilenos"
        data={[[`${date}`, `${euroValue}`]]} />}
        </div>
    );
  }

export default EuroGraphics;
