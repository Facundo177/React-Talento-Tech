function Card({titulo, descripcion, botonTexto}) {
    return(
        <>

        <div className="card">
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <button>{botonTexto}</button>
        </div>
        
        </>
    );
} 
export default Card;