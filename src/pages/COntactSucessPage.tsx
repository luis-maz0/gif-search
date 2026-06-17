import { Link } from "react-router";
import { CustomHeader } from "../components/CustomHeader";

export const ContactSuccessPage = () => {
    return (
        <>
        <CustomHeader 
            titulo="¡Mensaje Enviado!" 
            descripcion="Gracias por contactarte con nosotros" 
        />
        <div className="success-container">
            <div className="success-content">
            <span className="success-icon">✅</span>
            <h2>¡Recibimos tu mensaje!</h2>
            <p>Te responderemos a la brevedad al correo que nos proporcionaste.</p>
            
            <Link to="/" className="btn-back-home">
                🏠 Volver al Inicio
            </Link>
            </div>
        </div>
        </>
    );
};