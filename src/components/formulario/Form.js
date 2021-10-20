import React from 'react'
import CrudApiForm from '../formulario/CrudApiForm';
import "./Style.css";
//.import '../assets/style.css'



export default class extends React.Component{
    render(){
        return(
            <div className ="main-component">
                <h2>Contate-Nos</h2>
                <h5>Para mais informações sobre qualquer trilha</h5>
                <CrudApiForm/>   
            </div>
        )
    }
}