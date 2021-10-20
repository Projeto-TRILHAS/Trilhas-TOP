import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js"



function Carrusel(props){
    if(props.trilhas.length===0){
        
        console.log("cargando trilhas en carrusel")
        return (<div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>) 
    }else{
        return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              
              <div className="carousel-item active">
                <img src={props.trilhas[0].imgs} className="d-block w-100 rounded" alt={props.trilhas[0].title}/>
                <div className="carousel-caption d-none d-md-block">
                  <h2 className="Carrusel-text">1º Lugar com {props.trilhas[0].points} Pontos</h2>
                  <p className="Carrusel-text">{props.trilhas[0].title}</p>
                </div>
              </div>

              <div className="carousel-item">
                <img src={props.trilhas[1].imgs} className="d-block w-100 rounded" alt={props.trilhas[1].title}/>
                <div className="carousel-caption d-none d-md-block">
                <h2 className="Carrusel-text">2º Lugar com {props.trilhas[1].points} Pontos</h2>
                  <p className="Carrusel-text">{props.trilhas[1].title}</p>
                </div>
              </div>

              <div className="carousel-item">
                <img src={props.trilhas[2].imgs} className="d-block w-100 rounded" alt={props.trilhas[2].title}/>
                <div className="carousel-caption d-none d-md-block">
                <h2 className="Carrusel-text">3º Lugar com {props.trilhas[2].points} Pontos</h2>
                  <p className="Carrusel-text">{props.trilhas[2].title}</p>
                </div>
              </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        );
     }
  
}

export default Carrusel;