import React, { useState, useEffect } from "react";
import styles from '../styles/Registro.module.css'
import Arca from '../assets/img/arca.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Registro() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");

    const handleRegistration = (event) => {
        event.preventDefault();

        // Aquí podrías hacer la lógica para enviar los datos a un servidor, guardarlos en una base de datos, etc.
        console.log({
            name,
            username,
            email,
            birthdate,
            gender,
            password,
        });

        // Muestra el mensaje de éxito y restablece los campos del formulario a sus valores originales
        alert("¡Cuenta creada exitosamente!");
        setName("");
        setUsername("");
        setEmail("");
        setBirthdate("");
        setGender("");
        setPassword("");
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleBirthdateChange = (event) => {
        setBirthdate(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div className={styles.contBody}>
            <div className={styles.contRegistro} >
                <div className={styles.contForm} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" >
                    <form onSubmit={handleRegistration} >
                        <h2 className={styles.h2}>¡Bienvenid@!</h2>
                        <div className={styles.form}>
                            <label>
                                <input type="text" value={name} placeholder="Nombre" onChange={handleNameChange} required className={styles.input} />
                            </label>
                            <br />
                            <label>
                                <input type="text" value={username} placeholder="Nombre de usuario" onChange={handleUsernameChange} required className={styles.input} />
                            </label>
                            <br />
                            <label>
                                <input type="date" value={birthdate} onChange={handleBirthdateChange} required className={styles.input} />
                            </label>
                            <br />
                        </div>
                        <div className={styles.form}>
                            <label>
                                <select value={gender} onChange={handleGenderChange} required className={styles.noShad}>
                                    <option value="male">Hombre</option>
                                    <option value="female">Mujer</option>
                                    <option value="nonbinary">No binario</option>
                                    <option value="prefer-not-to-say">Prefiero no responder</option>
                                </select>
                            </label>
                            <br />
                            <label>
                                <input type="email" value={email} onChange={handleEmailChange} required placeholder="Correo electrónico" className={styles.input} />
                            </label>
                            <br />
                            <label>
                                <input type="password" value={password} onChange={handlePasswordChange} required placeholder="Contraseña" className={styles.input} />
                            </label>
                            <br />
                        </div>
                        <div className={styles.contBtn} >
                            <button type="submit" className={styles.btn}>Registrarse</button>
                        </div>
                    </form>
                </div>
                <img src={Arca} alt="Darkrai" className={styles.img} />
            </div>
        </div>
    );
}

export default Registro;