import './Style.css';
import React from 'react';
import NavBar from './Componentes/NavBar';
import Footer from './Componentes/Footer';
import Main from './Componentes/Main';

function App() {

  return (
    <div className="App fondo contenedor" style={{"margin": "0px"}}>
      <header class="sticky-top">
        <NavBar />
      </header>
      <main className='fuente'>
        <Main />
      </main>
      <footer className='footer p-3 mt-5' style={{"margin": "0px", "bottom": "0"}}>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
