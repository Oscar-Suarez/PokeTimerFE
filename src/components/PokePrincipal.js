import { useContext } from "react";
import { MyContext } from "../MyContext";
import { Link } from 'react-router-dom';
import styles from '../styles/SeleccionPrincipal.module.css'
import Cronometro from "./Cronometro";






function PokePrincipal() {
  const { pokePrincipal } = useContext(MyContext);


  const typesTranslations = {
    normal: "Normal",
    fighting: "Lucha",
    flying: "Volador",
    poison: "Veneno",
    ground: "Tierra",
    rock: "Roca",
    bug: "Bicho",
    ghost: "Fantasma",
    steel: "Acero",
    fire: "Fuego",
    water: "Agua",
    grass: "Planta",
    electric: "Eléctrico",
    psychic: "Psíquico",
    ice: "Hielo",
    dragon: "Dragón",
    dark: "Siniestro",
    fairy: "Hada",
  };

  /*LETRERO AL MOMENTO DE LLEGAR AL NIVEL 100*/
  if (pokePrincipal.nivel === 100) {
    return (

      <div className={`${styles[`background-${pokePrincipal.types[0].type.name}`]} ${styles.background100}`}>
        <div className={styles.cont100}>
          {pokePrincipal.sprites && <img src={pokePrincipal.sprites.other["official-artwork"].front_default} alt="Poke Principal" className={styles.imgPP100} />}

          <h1 className={`${styles[`color-${pokePrincipal.types[0].type.name}`]} ${styles.name100} `}>{pokePrincipal.name}</h1>
          {pokePrincipal.types.map((type, index) => (
            <span key={index} className={`${styles[type.type.name]} ${styles.tipoPP}`}>
              {typesTranslations[type.type.name]}
              {index < pokePrincipal.types.length - 1 ? "  " : ""}
            </span>
          ))}
        </div>
        <div className={styles.contCron100}>
          <Cronometro />
        </div>
      </div>
    )

  }

  return (
    <div className={styles.cont}>
      {pokePrincipal.name ? (
        <div className={`${styles[`background-${pokePrincipal.types[0].type.name}`]} ${styles.background}`}>
          <div className={styles.contPoke}>
            <div>
              {pokePrincipal.sprites && <img src={pokePrincipal.sprites.other["official-artwork"].front_default} alt="Poke Principal" className={styles.imgPP} />}
            </div>
            <div className={styles.contInfo}>
              <h1 className={`${styles[`color-${pokePrincipal.types[0].type.name}`]} ${styles.name} `}>{pokePrincipal.name}</h1>
              <div className={styles.contTipos}>
                {pokePrincipal.types.map((type, index) => (
                  <span key={index} className={`${styles[type.type.name]} ${styles.tipoPP}`}>
                    {typesTranslations[type.type.name]}
                    {index < pokePrincipal.types.length - 1 ? "  " : ""}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.contCron}>
            <Cronometro />
          </div>
        </div>
      ) : (
        <div className={styles.bkgd}>
          <h1 className={styles.h1}>¡Bienvenid@ al PokeTimer!</h1>
          <Link to="/Iniciales" ><button className={styles.btn}>Elegir Pokémon inicial.</button></Link>
        </div>
      )}
    </div>
  );



}

export default PokePrincipal;


/*(
  pokePrincipal.nivel && pokePrincipal.nivel === 100 ? (
  <div className={styles.bkgd}>
    <h1 className={styles.h1}>¡Bienvenid@ al PokeTimer!</h1>
    <Link to="/Iniciales" ><button className={styles.btn}>Elegir Pokémon inicial.</button></Link>
  </div>
  ) : (<div>
  </div>))}*/ 