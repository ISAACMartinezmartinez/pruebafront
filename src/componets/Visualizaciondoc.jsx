import React from 'react'
import { Link } from 'react-router-dom'

const Visualizaciondoc = () => {
  return (
    <div>
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li id='botonvis' class="nav-item">
                            <Link type="button" class="btn btn-secondary">Subir Documento</Link>
                            </li>
                            <li class="nav-item" id='botonvis'>
                            <Link type="button" class="btn btn-secondary">Editar</Link>
                            </li>
                            <li class="nav-item" id='botonvis'>
                            <Link type="button" class="btn btn-secondary">Guardar</Link>
                            </li>
                            <li class="nav-item" id='botonvis'>
                            <Link type="button" class="btn btn-secondary">Cancelar</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div className='border border-primary ' id='visualizaciondoc'>
            <h2 >
                Previsualizacion
            </h2>
        </div>
        <div id='informaciondoc'  class="border border-danger">
            <h2>Informacion del documento</h2>
        </div>
    </div>
  )
}

export default Visualizaciondoc