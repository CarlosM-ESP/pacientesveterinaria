import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';
class  App extends Component {
  state = {
    citas: []
  }

  //Para almacenar las citas en  local storage
  //Cuando la aplicación cargue
  componentDidMount(){
    const citasLS = localStorage.getItem('citas');
    if(citasLS){
      this.setState({
        citas : JSON.parse(citasLS)
      })
    }
  }

  //cuando la aplicación agregue o elimine una cita
  componentDidUpdate(){
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  //Guardar datso cita en el state
  crearNuevaCita = datos => {
    //Copiamos el state actual  
      const citas = [...this.state.citas, datos];
    //Agregamos el nuevo state
      this.setState({
        citas : citas
      })
  }
//Eliminar una cita del state
eliminarCita = id => {
  //copia del state
  const citasActuales = [...this.state.citas];

  //usar filter para sacar @id del state
  //mediante esta sentencia guardamos en citas
  //todas las citas que NO tengan el id que le estamos pasando
  //con lo que estamos eliminando de hego la cita en cuestión
  const citas = citasActuales.filter(cita => cita.id !== id);

  //actualizar el state sin la cita que hemos marcado
  this.setState({
    citas
  })
}
  render() { 
    return ( 
      <div className="container">
          <Header
            titulo = 'Administrador Pacientes Veterinaria'        
          />
          <div className="row">
              <div className = "col-md-10 mx-auto">
                <NuevaCita            
                  crearNuevaCita = {this.crearNuevaCita}
                />            
              </div>          
            
              <div className = "mt-5 col-md-10 mx-auto">
                <ListaCitas
                 citas = {this.state.citas}
                 eliminarCita = {this.eliminarCita}
                />
              </div>
        </div>
      </div>
     );
  }
}
export default App;
