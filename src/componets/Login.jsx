import React, { useState } from 'react'
import Nav from './Nav';
import Swal from "sweetalert2";
import Paginauno from './Paginauno';
import Menulateral from './Menulateral';

const Login = () => {
  const [login,setLogin] = useState("false");
  const [username, setUsername] = useState ("");
  const [password,setPassword] = useState("");

  function iniciarsesion(e){
    e.preventDefault();

    var txtusername = document.getElementById("txtusername").value;
    var txtpassword = document.getElementById("txtpassword").value;

    if(txtusername.length === 0 || txtpassword.length === 0){
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text:'Complete Los Campos',
      })
    }else{
      if(username === "admin" && password === "123"){
        setLogin("true");
         document.getElementById("form_login").style.display ="none";
      }else{
        setLogin("false");
        Swal.fire({
          icon:'error',
          title: 'Oops...',
          text: 'Error de Usuario y/o Contraseña',
        })
        document.getElementById("txtusername").value = "";
        document.getElementById("txtpassword").value ="";
        document.getElementById("txtusername").focus();

      }
    }
  }
  return (
    <div>
      <form id='form_login'>
        <div id='login'>
            <center><h2>Login</h2></center>
        <div className="form-floating mb-3">
            
            <input type="text" className="form-control" id="txtusername"  placeholder="name@example.com"  onChange={e => setUsername(e.target.value)}/>
            <label for="floatingInput">Nombre de usuario</label>
        </div>
        <div className="form-floating">
            
            <input type="password" className="form-control" id="txtpassword"   placeholder="Password"  onChange={e => setPassword(e.target.value)}/>
            <label for="floatingPassword">Password</label>
        </div>
        <center><button type="button"  className="btn btn-success mt-3" onClick={iniciarsesion} >Iniciar Sesion</button></center>
        </div>
        </form>
        {login === "true" && <Paginauno/>}
        {login === "true" && <Nav usu ={username}/>}
        {login === "true" && <Menulateral/>}
    </div>
  )
}

export default Login