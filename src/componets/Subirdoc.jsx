import React from 'react'

const Subirdoc = () => {
  return (
    <div>
        <div class="mb-3">
            <label for="formFile" class="form-label">Selecciona un Archivo </label>
            <input class="form-control" type="file" id="formFile"/>
        </div>
        <button type="button" class="btn btn-info">Subir</button>
    </div>
  )
}

export default Subirdoc