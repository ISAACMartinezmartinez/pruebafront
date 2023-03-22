import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Nav from './Nav';
import Paginauno from './Paginauno';
import Menulateral from './Menulateral';
import Swal from "sweetalert2";


const subir = async (obj, servidor1) =>{
    const datos = fetch(servidor1, obj)
        .then(res => res.json)
        .then(obj =>{
            return obj
        })
        .catch(err =>{
            if (err) return subir(obj, servidor1);
        })
    return datos
}



const EditarDoc = () => {
    const [login,setLogin] = useState("true");
    const [texto, setTexto] = useState();

    function cerrarsesion(){
        setLogin("false")
        document.getElementById("menuS").style.display ="none"
    }

    const ingresar = (e) =>{
        e.preventDefault()

        const obj ={
            texto:texto,
        }

        const data = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        }
        subir(data, "http://localhost:5000/insertdoc/").then((datos) =>{
            Swal.fire('Agregado');
            setTexto('');
        })
        .catch((err) =>{
            Swal.fire('No se Pudo Agregar');
        })
    }


  return (
    <div>
        <div id='menuS'>
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item" id='botonvis'>
                            <Link type="button" class="btn btn-secondary" onClick={ingresar}>Guardar</Link>
                            </li>
                            <li class="nav-item" id='botonvis'>
                            <Link type="button" class="btn btn-secondary" onClick={cerrarsesion}>Cancelar</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div className="form-floating" id='textarea'>
            <textarea id='textarea'  class="form-control" placeholder="Leave a comment here" onChange={e => setTexto(e.target.value)} ></textarea>
            <label for="floatingTextarea2">Comments</label>
        </div>
        </div>
        {login === "false" && <Paginauno/>}
        {login === "false" && <Nav/>}
        {login === "false" && <Menulateral/>}
    </div>
  )
}

export default EditarDoc