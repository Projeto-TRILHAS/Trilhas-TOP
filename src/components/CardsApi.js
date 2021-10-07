import React, { useEffect, useState } from "react";
import Card from './Card'

function CardsApi() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [trilhas, setTrilhas] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("http://localhost:5000/trilhas")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setTrilhas(result);
          },
          // Nota: es importante manejar errores aquí y no en 
          // un bloque catch() para que no interceptemos errores
          // de errores reales en los componentes.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="d-flex flex-wrap justify-content-center">
          {trilhas.map(trilha => (
            <Card title={trilha.title} description={trilha.description} img={trilha.imgs[0]}/>
          ))}
        </div>
      );
    }
  }

  export default CardsApi