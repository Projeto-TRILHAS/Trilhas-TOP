import React from 'react'
import Carrusel from './Carrusel'
import "./Carrusel.css"
class CarruselGet extends React.Component{

    constructor(props){
      super(props);
      this.state = {trilhas:[]};
    }
  
    async get(){
     const data = await fetch("http://localhost:5000/trilhas?_sort=points&_order=desc&_limit=3")
     const trilhas = await data.json()
     console.log(trilhas)
     this.setState({trilhas: trilhas});
    }
  
    initTrilhas(){
      this.get()
    }
  
    componentDidMount(){
      this.initTrilhas();
    }
  
    render(){
      return (
        <div className="Carrusel-bg d-flex justify-content-center">
          <div className="Carrusel shadow-lg">
              <Carrusel trilhas={this.state.trilhas}/>
          </div>
        </div>
        
      );
    }
  }
  
  export default CarruselGet;
  