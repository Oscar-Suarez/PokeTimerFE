import React, { useState, useContext } from "react";
import { MyContext } from "../MyContext";
import  {Navigate}  from 'react-router-dom';







function InicioSesion() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const{setSesionIniciada, sesionIniciada} = useContext(MyContext);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // console.log({
        //     username,
        //     password,
        // });
        setSesionIniciada(true)
    };

    if (sesionIniciada) {
        return <Navigate to="/Perfil" />;
      }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre de usuario:
                <input type="text" value={username} onChange={handleUsernameChange} required />
            </label>
            <br />
            <label>
                Contraseña:
                <input type="password" value={password} onChange={handlePasswordChange} required />
            </label>
            <br />
            <button type="submit">Iniciar sesión</button>
        </form>
    );
}




export default InicioSesion;