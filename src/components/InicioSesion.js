import React, { useState, useContext,useEffect } from "react";
import { MyContext } from "../MyContext";
import  {Navigate}  from 'react-router-dom';
import styles from '../styles/InicioSesion.module.css'
import Darkrai from '../assets/img/Darkrai.png'
import AOS from 'aos';
import 'aos/dist/aos.css';






function InicioSesion() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const{setSesionIniciada, sesionIniciada} = useContext(MyContext);

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

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
        <div className={styles.contBody}>
        <div className={styles.contInicioSesion}>
        <img src={Darkrai} alt="Darkrai" className={styles.img}/>
        <div className={styles.contForm} data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <h2>¡Bienvenid@!</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
        <label>
                <input type="text" value={username} placeholder="Nombre de usuario" onChange={handleUsernameChange} required className={styles.input}/>
            </label>
            <br />
            <label>

                <input type="password" value={password} placeholder="Contraseña" onChange={handlePasswordChange} required className={styles.input}/>
            </label>
            <div className={styles.contBtn} ><button type="submit" className={styles.btn}>Iniciar sesión</button></div>

        </form>
        </div>
        </div>
        </div>
    );
}




export default InicioSesion;