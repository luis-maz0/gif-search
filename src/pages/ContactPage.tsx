import { useForm } from "react-hook-form";
import { CustomHeader } from "../components/CustomHeader";
import { useNavigate } from "react-router";

interface ContactFormValues {
    nombre: string;
    email: string;
    telefono: string;
    mensaje: string;
}

export const ContactPage = () => {

    const { 
        register, 
        handleSubmit, 
        formState: { errors }, 
        reset 
    } = useForm<ContactFormValues>();

    const navigate = useNavigate()

    const onSubmit = (data: ContactFormValues) => {
        console.log("Datos listos para enviar al backend:", data);
        reset();

        navigate("/contacto-exito");
    };

    return (
        <>
            <CustomHeader titulo="Contacto" descripcion="Envíanos tus dudas o sugerencias" />

            <div className="contact-container">
                <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                
                {/* Campo Nombre */}
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                    id="nombre"
                    type="text" 
                    placeholder="Ej. Juan Pérez"
                    {...register("nombre", { 
                        required: "El nombre es obligatorio",
                        minLength: { value: 3, message: "Debe tener al menos 3 caracteres" }
                    })} 
                    />
                    {errors.nombre && <span className="error-msg">{errors.nombre.message}</span>}
                </div>

                {/* Campo Email */}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                    id="email"
                    type="email" 
                    placeholder="correo@ejemplo.com"
                    {...register("email", { 
                        required: "El email es obligatorio",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Formato de email inválido"
                        }
                    })} 
                    />
                    {errors.email && <span className="error-msg">{errors.email.message}</span>}
                </div>

                {/* Campo Teléfono */}
                <div className="form-group">
                    <label htmlFor="telefono">Teléfono</label>
                    <input 
                    id="telefono"
                    type="tel" 
                    placeholder="Ej. 1122334455"
                    {...register("telefono", { 
                        required: "El teléfono es obligatorio",
                        pattern: {
                            value: /^[0-9]+$/,
                            message: "Solo se permiten números"
                        },
                        minLength: { value: 8, message: "El teléfono es muy corto" }
                    })} 
                    />
                    {errors.telefono && <span className="error-msg">{errors.telefono.message}</span>}
                </div>

                {/* Campo Mensaje (Textarea) */}
                <div className="form-group">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea 
                        id="mensaje"
                        placeholder="Escribe tu mensaje aquí..."
                        rows={5}
                        {...register("mensaje", { 
                            required: "El mensaje no puede estar vacío",
                            minLength: { value: 10, message: "El mensaje debe ser más detallado (mín. 10 caracteres)" }
                    })} 
                    />
                    {errors.mensaje && <span className="error-msg">{errors.mensaje.message}</span>}
                </div>

                <button type="submit" className="btn-submit">✉️ Enviar Mensaje</button>
                </form>
            </div>
        </>
    );
};