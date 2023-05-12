import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import { MyContext } from "../MyContext";
import styles from '../styles/Iniciales.module.css'



function Iniciales() {


    const [pokemonData, setPokemonData] = useState([]);
    const { pokeSalvaje, setPokeSalvaje, setPokePrincipal } = useContext(MyContext); //Este context se usa para conectar los datos de los pokémon random




    //Función para consumir la API
    //Función para consumir la API
    useEffect(() => {
        async function fetchData() {
            try {
                const iniciales = ['4', '258', '810'];
                const data = await Promise.all(iniciales.map(name => axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)));
                const pokemonList = await Promise.all(data.map(async (response) => {
                    const speciesRespuesta = await axios.get(response.data.species.url);
                    const evolutionChainRespuesta = await axios.get(speciesRespuesta.data.evolution_chain.url);
                    let cadenaEvo = null;
                    let cadenaEvoDos = null;
                    if (evolutionChainRespuesta.data.chain.evolves_to.length > 0) {
                        cadenaEvo = evolutionChainRespuesta.data.chain.evolves_to[0].species;
                        cadenaEvoDos = evolutionChainRespuesta.data.chain.evolves_to[0].evolves_to[0].species;
                    }
                    return {
                        ...response.data,
                        name: response.data.name.toUpperCase(),
                        nivel: 0,
                        tiempo: 0,
                        evoluciones: cadenaEvo,
                        segundaEvo: cadenaEvoDos,
                    };
                }));

                setPokemonData(pokemonList);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);



    //Función para saber qué poke se eligió y agregarlo al array
    const elegirPoke = (pokemon) => {
        setPokeSalvaje(prevPokes => [...prevPokes, pokemon]);
        console.log(`${pokemon.name} - Dex nacional: #${pokemon.id}`);
        setPokePrincipal(pokemon)
    };

    //Para modificar el Doom al momento de elegir el pokemon
    if (pokeSalvaje.length > 0) {
        return (
            <div >
                {pokeSalvaje.map((pokemon, index) => (
                    <div key={index} className={`${styles[`background-${pokemon.id}`]}`} >
                        <div className={styles.pokeCont}>
                        <h2 className={styles.texto}>¡Elegiste a {pokemon.name} como tu inicial!</h2>
                        <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} className={styles.imgElegido}/>
                        <h1>Dex nacional: #{pokemon.id}</h1>
                        </div>
                    </div>
                ))}
            </div>
        );
    }


    return (
        <div className={styles.bkgd}>
            <div className={styles.iniciales}>
                {pokemonData.map((pokemon, index) => (
                    <div key={index} className={`${styles.info} ${styles[`pokemon-${index}`]}`}>
                        <h1>{pokemon.name}</h1>
                        <img
                            className={styles.poke}
                            src={pokemon.sprites.other["official-artwork"].front_default}
                            alt={pokemon.name}
                        />
                        <div>
                            <h2>Dex nacional: #{pokemon.id}</h2>
                            <button onClick={() => elegirPoke(pokemon)}>¡{pokemon.name}, yo te elijo!</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Iniciales;
