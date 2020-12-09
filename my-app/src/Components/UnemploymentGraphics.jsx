import React, { useState, useEffect} from 'react'
import { LineChart } from "react-chartkick";
import "chart.js";


const UnemploymentGraphics = () => {
    const [date, setDate] = useState([]);
    const [rate, setRate] = useState([]);
  
    useEffect(() => {
      const fetchUF = async () => {
        const data = await fetch("https://mindicador.cl/api/tasa_desempleo");
        const response = await data.json();
  
        const arrayDate = [];
        const arrayRate = [];
        response.serie.map((element) => {
          return arrayDate.push(element.fecha), arrayRate.push(element.valor);
        });
        //console.log(arrFechaValor)
  
        setDate(arrayDate);
        setRate(arrayRate);
      };
      fetchUF();
    }, []);
  
    return (
    <div>
        {<LineChart 
        id="users-chart" width="800px" height="500px"
        min={1} max={20}
        xmin="2018-01-01" xmax="2020-12-01"
        xtitle="Fecha" ytitle="Porcentaje"
        data={[[`${date}`, `${rate}`]]} />}
        </div>
    );
  }

export default UnemploymentGraphics 
