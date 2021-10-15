import React from 'react'
import '../login-Adm/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5  from 'md5';
import Cookies from 'universal-cookie/es6';

const baseUrl = "http://localhost:5000/useradmin";
const cookies = new Cookies();

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state ={
          value: '',
            form:{
                username: "",
                email: "",
                password: ""
            }};
        
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
    
    async Login (){
        const password = this.state.form.password
        const passwordEncypted = md5(password)
        console.log(`username: ${this.state.form.username}, email: ${this.state.form.email}, password: ${passwordEncypted}`)
        await axios.get(baseUrl, {params:{username: this.state.form.username, email: this.state.form.email, password: passwordEncypted}})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if (response.length > 0 ){
                var answers=response[0];
                cookies.set('id', answers.id, { path:"/" } );
                cookies.set('username', answers.username, { path:"/" } );
                cookies.set('email', answers.email, { path:"/" } );

                alert(`Bem-vindo ${answers.username} ${answers.email}`);

            }else {
                alert('O nome de usuário ou senha não está correto');
            }

        })
        .catch(error=>{
            console.console.log(error);
        })
            
    }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default Form