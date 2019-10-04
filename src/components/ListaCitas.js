import React from 'react';
import Cita from './Cita';
import Proptypes from 'prop-types';
const ListaCitas = ({citas, eliminarCita}) =>  {

    //Vamos a imprimir un mensaje en base de si hay citas o no
    const mensaje = Object.keys(citas).length === 0 ? 'No hay Citas' : 'Administra las Citas Aquí';
    return (
        <div className = "card mt-2 py-5">
            <div className = "card-body">
                <h2 className = "card-title text-center">
                    {mensaje}
                </h2>
                <div className = "lista-citas">
                 {citas.map(cita =>(
                     <Cita
                         key = {cita.id}
                         cita = {cita}
                         eliminarCita = {eliminarCita}                    
                     />
                        )
                    )   
                } 
               </div>
           </div>
       </div>
    ); 
}
ListaCitas.propTypes = {    
    citas : Proptypes.array.isRequired,
    eliminarCita : Proptypes.func.isRequired
}
export default ListaCitas;