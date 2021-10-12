import React, { useEffect, useState } from "react";
import LargeCard from './LargeCard'
import './LCards.css'

function LCards() {
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
      fetch("http://localhost:5000/trilhas?_limit=3")
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
      return <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>;
    } else {
      return (
        <div>
          <div className="row w-100  bg-title">
          <div className="bg-opacity">
            <h1 className="opacity-none">Algumas Trilhas</h1>
          </div>
          </div>
          
          <div className="d-flex flex-wrap justify-content-center">
            {trilhas.map((trilha,index)=> (<LargeCard key={index} trilha={trilha} onupdateranking={updateRanking}/>))}
          </div>
        </div>
      );
    }
  }

export default LCards

/*  */