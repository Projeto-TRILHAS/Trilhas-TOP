import React from 'react'
import CrudApi from './CrudApi';
import '../assets/style.css'



export default class extends React.Component{
    render(){
        return(
            <div className ="main-component">
                <h2>Comuiquese conosco</h2>
                <h5>para mais informações sobre qualquer trilha</h5>
                <CrudApi/>   
            </div>
        )
    }
}