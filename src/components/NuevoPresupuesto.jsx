import { useState } from "react"
import Mensaje from "./Mensaje"

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValidPresupuesto }) => {

    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = (e) => {
        e.preventDefault()

        if(!presupuesto || Number(presupuesto) < 0) {
            setMensaje('No es un presupuesto válido')
            return // De esta forma ya no se ejecutan las siguientes lineas y se rompe el ciclo de la funcion
        }
        setMensaje('')
        setIsValidPresupuesto(true)
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form onSubmit={ handlePresupuesto } className="formulario">
                <div className="campo">
                    <label htmlFor="">Definir Presupuesto</label>

                    <input 
                        className="nuevo-presupuesto"
                        type="number"
                        placeholder="Añade tu Presupuesto"
                        value={presupuesto}
                        onChange={ e => setPresupuesto(Number(e.target.value))}
                    />
                </div>

                <input 
                    type="submit" 
                    value="Añadir"
                />

                {mensaje && <Mensaje tipo="error"> {mensaje} </Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto