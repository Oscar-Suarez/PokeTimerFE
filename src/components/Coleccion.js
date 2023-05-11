import { useContext, useState } from "react";
import { MyContext } from "../MyContext";
import { Link } from 'react-router-dom';
import styles from '../styles/Coleccion.module.css';
import color from '../styles/SeleccionPrincipal.module.css'

function Coleccion() {
  const { setPokePrincipal, pokeSalvaje } = useContext(MyContext);
  const [orden, setOrden] = useState("");
  const [pokeSalvajeLocal, setPokeSalvajeLocal] = useState([...pokeSalvaje]);

  //Función para seleccionar el pokémon principal que se usará en el cronómetro.
  const seleccionar = (pokemon) => {
    console.log(`Seleccionaste a ${pokemon.name}`);
    setPokePrincipal(pokemon);
  };




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

  // Función para ordenar los Pokémon por ID (de menor a mayor)
  const ordenarPorId = () => {
    setPokeSalvajeLocal([...pokeSalvajeLocal].sort((a, b) => a.id - b.id));
  };

  // Función para ordenar los Pokémon por la fecha de su último agregado (de más reciente a más antiguo)
  const ordenarPorUltimoAgregado = () => {
    setPokeSalvajeLocal([...pokeSalvaje])
  };
  console.log(pokeSalvaje)
  // Función para ordenar los Pokémon por tipo
  const ordenarPorTipo = () => {
    setPokeSalvajeLocal([...pokeSalvajeLocal].sort((a, b) => {
      const tipoA = a.types[0].type.name;
      const tipoB = b.types[0].type.name;
      return tipoA.localeCompare(tipoB);
    }));
  };

  // Función para ordenar los Pokémon alfabéticamente por nombre
  const ordenarAlfabeticamente = () => {
    setPokeSalvajeLocal([...pokeSalvajeLocal].sort((a, b) => {
      const nombreA = a.name.toUpperCase();
      const nombreB = b.name.toUpperCase();
      return nombreA.localeCompare(nombreB);
    }));
  };

  // Manejar el cambio de criterio de ordenación
  const handleChangeOrden = (event) => {
    const criterio = event.target.value;
    setOrden(criterio);

    // Ordenar los Pokémon según el criterio seleccionado
    switch (criterio) {
      case "id":
        ordenarPorId();
        break;
      case "ultimoAgregado":
        ordenarPorUltimoAgregado();
        break;
      case "tipo":
        ordenarPorTipo();
        break;
      case "alfabetico":
        ordenarAlfabeticamente();
        break;
      default:
        break;
    }
  };


  return (
    <>
      <div className={styles.menu}>
        <h1 className={styles.ordenar}>Ordenar por:</h1>
        <select value={orden} onChange={handleChangeOrden} className={styles.opciones}>
          <option value="ultimoAgregado" key={1}>Último agregado</option>
          <option value="id" key={2}>ID</option>
          <option value="tipo" key={3}>Tipo</option>
          <option value="alfabetico" key={4}>Alfabéticamente</option>
        </select>
      </div>

      <div className={`${styles.container}`}>
        {pokeSalvajeLocal.map((coleccion, index) => (
          <div>
            <li key={index} className={`${color[`background-${coleccion.types[0].type.name}`]} ${styles.liCole}`}>
              <p className={`${color[`color-${coleccion.types[0].type.name}`]} ${styles.nameCole} `}>{coleccion.name.toUpperCase()}{" "}</p>
              <img src={coleccion.sprites.front_default} alt="" key={index} className={styles.imgCole} />
              <p className={styles.colorGeneral}> PokeDex: #{coleccion.id}</p>
              <p className={styles.colorGeneral}>
                Tipo(s):&nbsp;
                {coleccion.types.map((type, index) => (
                  <span key={index} className={styles.colorTipos}>
                    {typesTranslations[type.type.name]}
                    {index < coleccion.types.length - 1 ? " / " : ""}
                  </span>
                ))}
              </p>
              <p className={styles.colorGeneral}>nivel: {coleccion.nivel}</p>
              <Link to="/Perfil">
                <button onClick={() => seleccionar(coleccion)} className={`${color[`${coleccion.types[0].type.name}`]} ${styles.btnCole}`}>
                  Elegir como pokémon principal.
                </button>
              </Link>
            </li>
          </div>
        ))}

      </div>
    </>
  );
}

export default Coleccion;




  // const ordenarPorUltimoAgregado = () => {
  //   pokeSalvaje.sort((a, b) => b.lastAdded - a.lastAdded);
  // };