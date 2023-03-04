const Mensaje = ({ children, tipo }) => {
    return (
        <div className={`alerta ${tipo}`}> 
            { children }
        </div>
    )
}
// Asi se inyecta una clase fija con una clase dinamica
export default Mensaje