import React, {useState, useEffect} from 'react'
import Target from './Target';

const Indicators = () => {
    

    const [allIndicators, setAllIndicators] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch("https://mindicador.cl/api");
      const data = await response.json();

      const array = [];
      Object.keys(data).map((key) => {
        key === "euro" || key === "dolar" || key === "uf" || key === "utm"
          ? array.push(data[key])
          : console.log("No existe dato disponible");
      });

      setAllIndicators(array);
    };
    fetchApi();
  }, []);

  return (
    <div className="indicators-table">
      {allIndicators.map((item) => (
        <Target key={item.nombre} {...item} />
      ))}
    </div>
  );
};

export default Indicators
