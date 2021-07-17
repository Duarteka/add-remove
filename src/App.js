import React,{ Component } from 'react';
import Formulario from './Formulario';
import Cuadro from './Cuadro';

class Cuadros extends Component{
  constructor(){
    super();
      this.state = {
        cuadro : []
      }
    }
    crearCuadro= (ancho,alto)=>{
     var id = this.state.cuadro.length > 0 ? Math.max.apply(Math,this.state.cuadro.map(item => item.id)) + 1 : 1;
     var cuadros = this.state.cuadro;
     cuadros.push({
       id : id,
       ancho : ancho,
       alto : alto
     });
     this.setState({ cuadros : cuadros });
    }
    eliminarCuadro = id => {
      if(id === this.item.id){
        return  this.props.eliminarCuadro(this.props.id);
      }
      console.log(id)
    }
  render(){
    return(
      <>
        <Formulario crearCuadro={this.crearCuadro}/>
        <div className='contenedor'>
         { this.state.cuadro.map(item =>  <Cuadro  key={item.id} id={item.id} ancho={item.alto} alto={item.alto} eliminarCuadro={this.eliminarCuadro} />)}
        </div>
      </>
      );
    }
} 


export default Cuadros;

