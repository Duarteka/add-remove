import React,{ Component } from 'react';


class Cuadro extends Component{
render(){
    return(
        <div className='cuadro' style={
            {
                width : this.props.ancho +'px',
                height : this.props.alto +'px'
            }
        } onClick={
            ()=> {
                this.props.eliminarCuadro(this.props.id);
            }
        }>
            <p>{this.props.id}</p>
        </div>
    )
}
}
export default Cuadro;

