import React from 'react'
import Form from '../formulario/Form';
import "./Contato.css";

const contato = () => {
    return (
        
    <div className="conta-container d-flex flex-nowrap">
      <div className="conta-desc col-sm-6">
        <h3>Olá, tem algo a nos dizer?</h3>
        <br/>
        <p>
            
            Para dúvidas ou propostas de parcerias, utilize o formulário abaixo ou escreva para          trilhas-top@gmail.com.
            </p>
            <br/>
            <p>

            Tentaremos responder o mais breve possível. Fique tranquilo(a)! Seu e-mail não será divulgado em            nenhuma hipótese!!
        </p>
        <br/>
      </div>
      <div className="conta-form">
        
         <Form/>
      </div>
    </div>
    
    )
}

export default contato
