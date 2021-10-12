import React from 'react'
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5  from 'md5';
import Cookies from 'universal-cookie/es6';
import { Link } from 'react-router-dom';

/* import { eventListeners } from '@popperjs/core'; */
 
 

const baseUrl = "http://localhost:5000/useradmin";
const cookies = new Cookies();

class LoginAdm extends React.Component {
    constructor( context) {
        super(context);
        this.state={
            form:{
                username: "",
                email: "",
                password: ""
            }
    
        }
    }
   
    //Capture data within inputs//

    handleChange=async e=>{
        await this.setState({
            form:{
            ...this.state.form,
            [e.target.name]: e.target.value

            }
        
        });
    }

    Login=async()=>{
        
        const password = this.state.form.password
        const passwordEncypted = md5(password)
        console.log(`username: ${this.state.form.username}, email: ${this.state.form.email}, password: ${passwordEncypted}`)
        await axios.get(baseUrl, {params:{email: this.state.form.email, password: passwordEncypted}})
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
                window.location.href="./dash"

            }else {
                alert('O nome de usuário ou senha não está correto');
            }

        })
        .catch(error=>{
            console.log(error);
        })  
    }

    componentDidMount(){
      if(cookies.get("username")){
          window.location.href="./dash";
      }  
    }
   
        render() {

          return (
            
            <div className="containerPrincipal">
        
            <div className="containerSecundario">
            {/* <form> */}
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                
                <div className="form-floating">
                <input onChange={this.handleChange} name="email" type="email" className="form-control"  placeholder="name@example.com" required/>
                <label >Email address</label>
                </div>
                <div className="form-floating">
                <input onChange={this.handleChange} name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
                <label >Password</label>
                </div>

                <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" onClick={()=>this.Login()}>Sign in</button>
                <Link to='/' className='w-100 btn btn-lg btn-danger'>
                    Fechar
                </Link>
            </div>
        
        </div>
          
          );
        }
      }
    
    export default LoginAdm