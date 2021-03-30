import React,{ Component } from 'react';
class Formulario extends Component{
  constructor(){
    super();
    this.state = {
        ancho : "",
        alto : ""
    }
}
render(){
    return(
        <form onSubmit={ 
            evento=>{
                evento.preventDefault();
                if(this.state.ancho !== "" && this.state.alto !== ""){
                    this.props.crearCuadro(this.state.ancho, this.state.alto)
                }
            }
           
        }>
            <input type='text' value={this.state.ancho} onChange={
                evento => {
                    if(/^([1-9]+\d*)?$/.test(evento.target.value)){//empieza, conjunto de numeros aceptados de 1-9, + digito *cualquiera de 0 a 10, ?-> opcional .test()
                    this.setState({ ancho : evento.target.value });
                }
            }
            }/>
            <input type='text' value={this.state.alto} onChange={
                evento => {
                    if(/^([1-9]+\d*)?$/.test(evento.target.value)){//empieza, conjunto de numeros aceptados de 1-9, + digito *cualquiera de 0 a 10, ?-> opcional .test()
                    this.setState({ alto : evento.target.value });
                }
            }
            }/>
            <input type='submit' value='crear' />
        </form>
        );
    }
} 


export default Formulario;

