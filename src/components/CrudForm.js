import React, { useState, useEffect } from "react";
import {Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { helpHttp } from "../helpers/helpHttp";

const initialForm = {
    id:null,
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
    
  };
const CrudForm = ({createData,updateData,dataToEdit,setDataToEdit}) =>{
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});

    useEffect( ()=>{
        if(dataToEdit){
            setForm(dataToEdit);
        }else{
            setForm(initialForm)
        }
        
    }, [dataToEdit]);



    
    const handleChange =(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    }

    

    const validateForm = (form) => {
        let errors = {};
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        let regexComments = /^.{1,255}$/;
      
        if (!form.nome.trim()) {
          errors.nome = "El campo 'Nombre' es requerido";
        } else if (!regexName.test(form.nome.trim())) {
          errors.nome = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
        }
      
        if (!form.email.trim()) {
          errors.email = "El campo 'Email' es requerido";
        } else if (!regexEmail.test(form.email.trim())) {
          errors.email = "El campo 'Email' es incorrecto";
        }
      
        if (!form.assunto.trim()) {
          errors.assunto = "El campo 'Asunto a tratar' es requerido";
        }
      
        if (!form.mensagem.trim()) {
          errors.mensagem = "El campo 'Comentarios' es requerido";
        } else if (!regexComments.test(form.mensagem.trim())) {
          errors.mensagem =
            "El campo 'Comentarios' no debe exceder los 255 caracteres";
        }
      
        return errors;
      };

      let styles = {
        fontWeight: "bold",
        color: "#dc3545",
      };

      const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));
      };

    const handleSubmit =(e)=>{
        e.preventDefault();

        setErrors(validateForm(form));
        /*if(!form.nome || !form.email || !form.assunto || !form.mensagem ){
            alert("Datos incompletos");
            return;
        }*/

        //isEmail (str [, form.email])

        if (Object.keys(errors).length === 0) {
            alert("Enviando Formulario");
                  
          } else {
            return;
          }
        

        if(form.id === null){
            createData(form)
           } 

        handleReset();
    }

    const handleReset =(e)=>{
        setForm(initialForm);
        setDataToEdit(null);
    }  

        return(
            <div>            
                <Form onSubmit= {handleSubmit}>
                    <FormGroup>
                        <Label for="exampleName">Nome</Label>
                        <Col sm={4}>
                            <Input type="nome" 
                            name="nome"
                            id="exampleName"
                            placeholder="Nome" 
                            onBlur={handleBlur}
                            onChange={handleChange} 
                            value= {Form.nome}
                            required />
                            
                        </Col>
                    </FormGroup>
                    {errors.nome && <p style={styles}>{errors.nome}</p>}
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Col sm={4}>
                            <Input type="email" 
                            name="email" 
                            id="exampleEmail"
                            placeholder="email.exemplo.com"
                            onBlur={handleBlur} 
                            onChange={handleChange} 
                            value= {Form.email}
                            required/>
                        </Col>
                    </FormGroup>
                    {errors.email && <p style={styles}>{errors.email}</p>}
                    <FormGroup>
                        <Label for="assunto">Assunto</Label>
                        <Col sm={4}>
                            <Input type="Assunto"
                            name="assunto" 
                            id="assunto" 
                            placeholder="Coloque o asssunto"
                            onBlur={handleBlur} 
                            onChange={handleChange} 
                            value= {Form.assunto}
                            required />
                        </Col>
                    </FormGroup>
                    {errors.assunto && <p style={styles}>{errors.assunto}</p>}
                    <FormGroup>
                        <Label for="mensagem">Mensagem</Label>
                        <Col sm={4}>
                            <Input type="textarea"
                            name="mensagem"
                            id="mensagem"
                            onBlur={handleBlur}
                            onChange={handleChange} 
                            value= {Form.mensagem} 
                            required/>
                        </Col>    
                    </FormGroup>
                    {errors.mensagem && <p style={styles}>{errors.mensagem}</p>}
                 <div>
                    <Button color="primary" type= "submit" value ="Enviar">Enviar</Button>{' '}
                    <Button color="secondary" type= "reset" value ="Limpar" onClick={handleReset}>Limpar</Button>{' '}
                </div>                                          
            </Form>
        </div>
    )    
}

export default CrudForm;
