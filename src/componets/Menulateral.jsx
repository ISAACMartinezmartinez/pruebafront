import React from 'react'
import { Link } from 'react-router-dom'

const Menulateral = () => {
  return (
    <div>
        <ul id='menuul'>
        <li id='menuli'>
        <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>
        </li>
        <li id='menuli'>
          <Link className=' text-dark nav-link' to="/nuevo">Nuevo</Link>
        </li>
      </ul>
      
    </div>
  )
}

export default Menulateral