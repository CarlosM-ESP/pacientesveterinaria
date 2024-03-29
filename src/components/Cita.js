import React from 'react';
import Proptypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => (
    <div className = 'mt-3'>
      <div className= "media-body"> 
        <h3 className = "mt-0">{cita.mascota}</h3>
        <p className ="card-text"><span>Nombre Dueño:</span>{cita.propietario}</p>
        <p className ="card-text"><span>Fecha:</span>{cita.fecha}</p>
        <p className ="card-text"><span>Hora:</span>{cita.hora}</p>
        <p className ="card-text"><span>Síntomas:</span></p>
        <p className ="card-text">{cita.sintomas}</p>
        <button
          className = "btn btn-danger"
          onClick = {() => eliminarCita(cita.id)}
        >Borrar &times;</button>
      </div>
    </div>    
  );

  Cita.propTypes = {   
    cita : Proptypes.object.isRequired , 
    eliminarCita : Proptypes.func.isRequired
}
export default Cita;