import React, {useState} from 'react';
import axios from 'axios';
import '../styles/components/pages/Contact.css';

const Contact = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e =>{
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }


  return (
    <div id="contacto" className="contacto">
        <div>
           
            <form className="formulario" onSubmit={handleSubmit}>

                <h2>Contactanos</h2>

                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                </p>
                
                <p>
                    <label for="email">Email</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                </p>

                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                </p>

                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name="mensaje" id="" cols="50" rows="10" value={formData.mensaje} onChange={handleChange}></textarea>
                </p>

                <p>
                    <input type="submit" value="Enviar"/>
                </p>
            </form>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}
        </div>

        <div className="datos">
            <h1>Otros Medios</h1>
            <p>También puede contactarse con nosotros usando los siguientes medios</p>
            <ul>
                <li>Telefono: <span>45678905</span></li>
                <li>Email: <span>contacto@gmail.com</span></li>
                <li>Facebook: <span>CoffeeTime</span></li>
                <li>Twitter: <span>@CoffeeTime</span></li>
                <li>Instagram: <span>Coffee_Time</span></li>
            </ul>
        </div>

    </div>
  )
}

export default Contact