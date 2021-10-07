import React, { useState, useEffect } from "react";
import {Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const initialForm = {
    id:null,
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
    
  };
const CrudForm = ({createData,updateData,dataToEdit,setDataToEdit}) =>{
    const [form, setForm] = useState(initialForm);

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
    const handleSubmit =(e)=>{
        e.preventDefault();

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
                            onChange={handleChange} 
                            value= {Form.nome} />
                        </Col>
                    </FormGroup>
                
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Col sm={4}>
                            <Input type="email" 
                            name="email" 
                            id="exampleEmail"
                            placeholder="email.exemplo.com" 
                            onChange={handleChange} 
                            value= {Form.email}/>
                        </Col>
                    </FormGroup>
                
                    <FormGroup>
                        <Label for="assunto">Assunto</Label>
                        <Col sm={4}>
                            <Input type="Assunto"
                            name="assunto" 
                            id="assunto" 
                            placeholder="Coloque o asssunto" 
                            onChange={handleChange} 
                            value= {Form.assunto} />
                        </Col>
                    </FormGroup>
                
                    <FormGroup>
                        <Label for="mensagem">Mensagem</Label>
                        <Col sm={4}>
                            <Input type="textarea"
                            name="mensagem"
                            id="mensagem"
                            onChange={handleChange} 
                            value= {Form.mensagem} />
                        </Col>    
                    </FormGroup>
                 <div>
                    <Button color="primary" type= "submit" value ="Enviar">Enviar</Button>{' '}
                    <Button color="secondary" type= "reset" value ="Limpar" onClick={handleReset}>Limpar</Button>{' '}
                </div>                                          
            </Form>
        </div>
    )    
}

export default CrudForm;
