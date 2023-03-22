import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login';

const Nav = (props) => {
    const [login,setLogin] = useState("true");

    function cerrarsesion(){
        setLogin("false")
        document.getElementById("menuS").style.display ="none"
    }
  return (
    <div>
    <div id="menus">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown"id='usuario'>
                    <Link className="nav-link dropdown-toggle" to="/cinco" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {props.usu}
                    </Link>
                    <ul className="dropdown-menu" >
                        <li><button className="dropdown-item" to="seis" onClick={cerrarsesion} >Cerrar Sesion</button></li>
                    </ul>
                    </li>
                </ul>
            </div>
        </nav>
        
    </div>
    {login === "false" && <Login/>}
    </div>
  )
}

export default Nav