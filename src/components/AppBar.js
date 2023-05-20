import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../MyContext";
import styles from "../styles/AppBar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import bl1 from "../assets/img/bl1.png";

function AppBar() {
  const { sesionIniciada } = useContext(MyContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.navContainer}>
        {sesionIniciada ? (
          <Link to="/Perfil">
            <img alt="PokeTimer" className={styles.navImg} src={bl1} />
          </Link>
        ) : (
          <div className={styles.navLeft}>
            <Link to="/PokeTimerFE">
              <img alt="PokeTimer" className={styles.navImg} src={bl1} />
            </Link>
          </div>
        )}

        <ul className={styles.navLinks}>
          {sesionIniciada ? (
            <>
              <li>
                <Link to="/Perfil" className={styles.a} onClick={handleCloseMenu}>
                  <h3>Perfil/Timer</h3>
                </Link>
              </li>
              <li>
                <Link to="/PokeSalvaje" className={styles.a} onClick={handleCloseMenu}>
                  <h3>Pokémon salvaje</h3>
                </Link>
              </li>
              <li>
                <Link to="/Colección" className={styles.a} onClick={handleCloseMenu}>
                  <h3>Colección/Pokedex</h3>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/InicioSesion" className={styles.a}>
                  <h3>Iniciar Sesión</h3>
                </Link>
              </li>
              <li>
                <Link to="/Registro" className={styles.a}>
                  <h3>Registrarse</h3>
                </Link>
              </li>
            </>
          )}
        </ul>

        <div className={styles.navToggle} onClick={handleToggle}>
          <IconContext.Provider value={{ className: styles.navIcon }}>
            {isOpen ? <FaTimes /> : <GiHamburgerMenu />}
          </IconContext.Provider>
        </div>
      </div>
    </nav>
  );
}

export default AppBar;