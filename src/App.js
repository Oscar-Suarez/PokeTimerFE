import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { MyContextProvider } from './MyContext';
import AppBar from './components/AppBar';
import Home from './components/Home';
import PokePrincipal from './components/PokePrincipal';
import Cronometro from './components/Cronometro';
import Iniciales from './components/Iniciales';
import PokeSalvaje from './components/PokeSalvaje';
import Coleccion from './components/Coleccion';
import InicioSesion from './components/InicioSesion';
import Registro from './components/Registro';
import './App.css';
import styles from './styles/Background.module.css'

function App() {
  return (
    <MyContextProvider>
      <div className="App">
        <Router>
          <AppBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/InicioSesion' element={[<InicioSesion key={"IniciarSesion" } />, ]} />
            <Route path='/Registro' element={[<Registro key={"Registro" }  />, ]} />
            <Route path='/Iniciales' element={[<Iniciales key={"iniciales" } />, ]} />
            <Route path='/Perfil' element={
  <div style={{ display: 'flex' }} className={styles.background}>
    <PokePrincipal key={"pp"} />
    <Cronometro key={"crono"} />
  </div>
} />

            <Route path='/PokeSalvaje' element={[<PokeSalvaje key={"PokeSalvaje"}/>, ]}/>
            <Route path='/Colección' element = {[ <Coleccion key={"Coleccion"}/>]}/>
          </Routes>
        </Router>
      </div>
    </MyContextProvider>
  );
}

export default App;

