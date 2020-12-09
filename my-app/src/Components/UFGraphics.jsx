import React, { useState, useEffect } from 'react'
import { LineChart } from 'react-chartkick'
import "chart.js";

const UFGraphics = () => {
    const [date, setDate] = useState([]);
    const [UFValue, setUFValue] = useState([]);
  
    useEffect(() => {
      const fetchUF = async () => {
        const data = await fetch("https://mindicador.cl/api/uf");
        const response = await data.json();
  
        const arrayDate = [];
        const arrayUFValue = [];
        response.serie.map((element) => {
          return arrayDate.push(element.fecha), arrayUFValue.push(element.valor);
        });
        //console.log(arrFechaValor)
  
        setDate(arrayDate);
        setUFValue(arrayUFValue);
      };
      fetchUF();
    }, []);
  
    return (
    <div>
        {<LineChart 
        id="users-chart" width="800px" height="500px"
        min={10000} max={40000}
        xmin="2020-12-01" xmax="2020-12-15"
        xtitle="Fecha" ytitle="Valor en pesos Chilenos"
        data={[[`${date}`, `${UFValue}`]]} />}
        </div>
    );
  }

export default UFGraphics
