import styles from '../styles/AppBar.module.css';
import bl1 from "../assets/img/bl1.png";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../MyContext";

function AppBar() {
    const{sesionIniciada} = useContext(MyContext);

    return(


        <nav className={styles.navbar}>
            {sesionIniciada ? (
            <div className={styles.navContainer}>
                    <Link to={"/Perfil"} >
                    <img alt='PokeTimer' className={styles.navImg} src={bl1}></img>
                    </Link>
                <div className={styles.navLinks}>
                    <Link to={"/Perfil"} className={styles.a}>
                    <h3>Perfil/Timer</h3>
                    </Link>
                    <Link to={"/PokeSalvaje"} className={styles.a}>
                    <h3>Pokémon salvaje</h3>
                    </Link>
                    <Link to={"/Colección"} className={styles.a}>
                    <h3>Colección/Pokedex</h3>
                    </Link>
                </div>
            </div>
            ):(
            <div className={styles.navContainer}>
                <div className={styles.navLeft}>
                    <Link to={"/"}>
                    <img alt='PokeTimer' className={styles.navImg} src={bl1}></img>
                    </Link>
                </div>
                <div className={styles.navLinks}>
                    <Link to={"/InicioSesion"} className={styles.a}>
                    <h3>Iniciar Sesión</h3>
                    </Link>
                    <Link to={"/Registro"} className={styles.a}>
                    <h3>Registrarse</h3>
                    </Link>
                </div>
            </div>

    ) }
        </nav>
    )

}
export default AppBar;