/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import PanelAdd from './PanelAdd';
import Search from './Search';
import './Menu.css';
import "./NavbarAdmin.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.css" 
import Cookies from 'universal-cookie/es6';

const cookies = new Cookies();
class NavbarAdmin extends React.Component{

    constructor(props){
        super(props);
        this.state = {newItemPanel: false};

        this.add = this.add.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    closeSession(){
        cookies.remove("id",{path:"/"})
        cookies.remove("username",{path:"/"})
        cookies.remove("email",{path:"/"})
        cookies.remove("password",{path:"/"})
        window.location.href="./sign-up"
    }

    add(){
    this.setState({newItemPanel: true});   
    }

    onCancel(){
        this.setState({newItemPanel: false});   
    }


    render(){
        return(
           <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                    <div className="container-fluid">
                        <a className="navbar-brand fs-1" href="/dash#">Trilhas-Top</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/dash#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a onClick={this.add} className="nav-link active" href="/dash#">Nova Trilha</a>
                            </li>
                        </ul>
                        <div className="search">
                            <Search onsearch={this.props.onsearch} />
                        </div>
                            <ul className="Menu-user navbar-nav">
                                <li key="asdfds" className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-person-circle fs-1 text-white"></i>
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown"> 
                                    <li>{cookies.get("username")}</li>
                                        <li><a className="dropdown-item" onClick={()=>this.closeSession()} href="#">Logout</a></li>

                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {(this.state.newItemPanel)?
                 <PanelAdd onhide={this.onCancel} onadd={this.props.onadd} />
                 : 
                 ''
                 }
            </div>
        );
    }
}

export default NavbarAdmin;





/* 

const NavbarAdmin = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Trilhas-Top</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#">Nova Trilha</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                        <ul className="Menu-user navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-person-circle fs-1 text-white"></i>
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown"> 
                                    <li><a className="dropdown-item" href="#">Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavbarAdmin
 */
