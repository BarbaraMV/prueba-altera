import React, { useState, useEffect } from 'react'
import { LineChart } from 'react-chartkick'
import "chart.js";


const DollarGraphic = () => {
    const [date, setDate] = useState([]);
    const [dollarValue, setDollarValue] = useState([]);
  
    useEffect(() => {
      const fetchDollar = async () => {
        const data = await fetch("https://mindicador.cl/api/dolar");
        const response = await data.json();
  
        const arrayDate = [];
        const arrayDollarValue = [];
        response.serie.map((element) => {
          return arrayDate.push(element.fecha), arrayDollarValue.push(element.valor);
        });
        //console.log(arrFechaValor)
  
        setDate(arrayDate);
        setDollarValue(arrayDollarValue);
      };
      fetchDollar();
    }, []);
  
    return (
    <div>
        {<LineChart
        id="users-chart" width="800px" height="500px"
        min={500} max={1500}
        xmin="2020-12-01" xmax="2020-12-15"
        xtitle="Fecha" ytitle="Valor en pesos Chilenos"
        data={[[`${date}`, `${dollarValue}`]]} />}
        </div>
    );
  }
  

export default DollarGraphic
