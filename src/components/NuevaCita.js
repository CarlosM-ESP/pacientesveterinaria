import React, { Component } from 'react';
import uuid from 'uuid';
import Proptypes from 'prop-types';

const stateInicial = { 
    cita: {
        mascota :'',
        propietario: '',
        fecha : '',
        hora: '',
        sintomas: ''
      },
      error: false
 }

class NuevaCita extends Component {
    //En el state vamos a guardar 
    //los datos del paciente que nos devolverá el formulario
    state = { ...stateInicial  }
     //Cuando el usario escribe los inputs
     handleChange = e => {
         console.log(e.target.name + ': ' + e.target.value);
         //dentro del métemos  colocasmos la entrada en el state
         this.setState({
                cita: {
                    ...this.state.cita,
                    [e.target.name] : e.target.value
                }

         })
     }
    //Cuando el usuario pulsa el submit
     handleSubmit = e => {
         e.preventDefault();
    //Extraer valores de state
        const {mascota, propietario, fecha, hora, sintomas} = this.state.cita;
    //validar que todos los campos existan
        if(mascota === '' || propietario === '' || fecha === ''|| hora === '' || sintomas === ''){
            this.setState({
                error: true
            });
            //detener la ejecución en caso de error
            return;
        }
        console.log('Despues del if');
    // generamos un objeto con los datos y le añadimos un id único:
        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();

    //Agrega la nueva cita al state de App.js
        this.props.crearNuevaCita(nuevaCita)

    
     //colocar en el state el state inicial
        this.setState({
            ...stateInicial
        })
     }

     //Aqui los datos del formulario
    render() { 

        //vamos aextraer el valor de error del state para poder usarlo:
        
        const {error} = this.state;

        return (  
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario de cita
                    </h2>

                    {error ? <div className = "alert alert-danger mt-2 mb-5 text-center">
                        Todos los Campos son Obligatorios
                        </div>
                        : null}

                    <form onSubmit  = {this.handleSubmit}>  

                        <div className="form-group row">
                          <label className="col-sm4 col-lg-2 col-form-label">
                              Nombre Mascota
                          </label>
                          <div className = "col-sm-8 col-lg-10">
                            <input
                                type ="text"
                                className = "form-control"
                                placeholder = "Nombre Mascota"
                                name = "mascota"
                                onChange = {this.handleChange}
                                value = {this.state.cita.mascota}
                            />                          
                          </div>                            
                        </div>

                        <div className="form-group row">
                          <label className="col-sm4 col-lg-2 col-form-label">
                              Nombre Propietario
                          </label>
                          <div className = "col-sm-8 col-lg-10">
                            <input
                                type ="text"
                                className = "form-control"
                                placeholder = "Nombre dueño Mascota"
                                name= "propietario"
                                onChange = {this.handleChange}
                                value = {this.state.cita.propietario}
                            />                          
                          </div>                            
                        </div>

                        <div className="form-group row">
                            <label className="col-sm4 col-lg-2 col-form-label">
                                Fecha
                            </label>
                            <div className = "col-sm-8 col-lg-4">
                                <input
                                    type ="date"
                                    className = "form-control"                                
                                    name= "fecha"
                                    onChange = {this.handleChange}
                                    value = {this.state.cita.fecha}
                                />                          
                            </div> 
                            
                            <label className="col-sm4 col-lg-2 col-form-label">
                                Hora
                            </label>
                            <div className = "col-sm-8 col-lg-4">
                                <input
                                    type ="time"
                                    className = "form-control"
                                    name= "hora"
                                    onChange = {this.handleChange}
                                    value = {this.state.cita.hora}
                                />                          
                          </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm4 col-lg-2 col-form-label">
                                Síntomas
                            </label>
                            <div className = "col-sm-8 col-lg-10">
                                <textarea                                    
                                    className = "form-control"                                    
                                    name= "sintomas"
                                    placeholder = "Describe los síntomas"
                                    onChange = {this.handleChange}
                                    value = {this.state.cita.sintomas}
                                ></textarea> 
                            </div>                                                   
                        </div>
                        <input 
                            type = "submit" 
                            className ="py-3 mt-2 btn btn-success btn-block"
                            value = "Crear nueva cita"
                        />
                    </form>
                </div>
            </div>

        );
    }
}

NuevaCita.propTypes = {
    crearNuevaCita : Proptypes.func.isRequired
}
 
export default NuevaCita;

