import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { MyContextProvider } from './MyContext';
import AppBar from './components/AppBar';
import Home from './components/Home';
import PokePrincipal from './components/PokePrincipal';
import Iniciales from './components/Iniciales';
import PokeSalvaje from './components/PokeSalvaje';
import Coleccion from './components/Coleccion';
import InicioSesion from './components/InicioSesion';
import Registro from './components/Registro';
import './App.css';


function App() {
  return (
    <MyContextProvider>
      <div className="App">
        <Router>
          <AppBar />
          <Routes>
            <Route path='/PokeTimerFE' element={<Home/>} />
            <Route path='/InicioSesion' element={[<InicioSesion key={"IniciarSesion"} />,]} />
            <Route path='/Registro' element={[<Registro key={"Registro"} />,]} />
            <Route path='/Iniciales' element={[<Iniciales key={"iniciales"} />,]} />
            <Route path='/Perfil' element={
              <div >
                <PokePrincipal key={"pp"} />
              </div>
            } />
            <Route path='/PokeSalvaje' element={[<PokeSalvaje key={"PokeSalvaje"} />,]} />
            <Route path='/Colección' element={[<Coleccion key={"Coleccion"} />]} />
          </Routes>
        </Router>
      </div>
    </MyContextProvider>
  );
}

export default App;

