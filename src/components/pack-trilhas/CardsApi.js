import React, { useEffect, useState } from "react";
import Card from './Card'

function CardsApi() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [trilhas, setTrilhas] = useState([]);
   
    
    async function put(data){
      fetch('http://localhost:5000/trilhas/'+data.id, {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .catch(err => console.log(err));
    
    }
    
   

    async function get(){
      fetch("http://localhost:5000/trilhas?_sort=points&_order=desc")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setTrilhas(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    }

    function updateRanking(data){
      put(data)
      get()
    }

    useEffect(() => {
      get()
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="d-flex flex-wrap justify-content-center">
          {trilhas.map((trilha,index )=> (
            <Card key={index} trilha={trilha} onupdateranking={updateRanking}/>
          ))}
        </div>
      );
    }
  }

export default CardsApi