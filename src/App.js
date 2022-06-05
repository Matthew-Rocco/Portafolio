import './App.css';
import React from 'react';
import Estudio from './Componentes/Estudio';
import Experiencia from './Componentes/Experiencia';
import NavBar from './Componentes/NavBar';
import Herramientas from './Componentes/Herramientas';

function App() {

  return (
    <div className="App fondo contenedor" style={{"margin": "0px"}}>
      <header>
        <NavBar />
      </header>
      <main className='fuente'>
        {/* Titulo */}
        <div className='row m-5 fondo-foto shadow-lg'>
          <div className='col-12 col-md-6 col-lg-8 pt-5'>
            <h1 style={{"fontSize": "70px", "letterSpacing": "1px", "wordSpacing": "1px"}}>Matthew Rocco</h1>
            <h3>Practicante trainee en ACL</h3>
          </div>
          <div className='col col-md col-lg'>
            <img src='./images/foto.jpg' className='foto' />
          </div>
        </div>

        {/* texto sobre mi */}
        <div id='sobre-mi' className='row justify-content-center'>
          <div className='text-center fondo-titular col-10 p-3'>
            <h1 className='texto-titular'>Sobre mi</h1>
          </div>
        </div>

        {/* herramientas */}

        <div className='row mt-5 justify-content-center'>
          <h2>Skills</h2>
          <Herramientas />
        </div>

        {/* estudios y experiencia */}
        
        <div className='row mt-5 justify-content-center'>
          <Estudio />
          <Experiencia />
        </div>

        {/* texto proyectos */}
        <div id="proyectos" className='row mt-5 justify-content-center'>
          <div className='text-center fondo-titular col-10 p-3'>
            <h1 className='texto-titular'>Proyectos</h1>
          </div>
        </div>

        {/* proyectos */}
        <div className='row mt-4 justify-content-center'>
          <div className='col-8 sombra card mt-3 mb-3 fondo-oscuro p-3'>
            <div className="d-flex align-items-start">
              <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button className="nav-link active text-light" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">ParLand</button>
                <button className="nav-link text-light" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Vic2</button>
                <button className="nav-link text-light" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Pc Ideal</button>
                <button className="nav-link text-light" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">GitHub</button>
              </div>
              <div className="tab-content  text-light" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex={0}>
                  <div className='card card-body footer'>
                    <div className='row justify-content-center'>
                      <div className='col-6'>
                        <img src='./images/parland.png' style={{"width": "100%"}} />
                      </div>
                      <div className='col pt-5'>
                        <p>Aplicacion de juegos de escritorio desarrollado en .net y java, donde con el juego 3 en raya, realice una conexion entre computadores a traves de sockets de java</p>
                        <a className='text-light' href='https://github.com/S-A-EXETUM/InterfazParland'  target={"_blank"} rel='noreferrer'>
                            <img src='./images/github.png' style={{"width": "10%"}}/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex={0}>
                  <div className='card card-body footer'>
                    <div className='row justify-content-center'>
                      <div className='col-6'>
                        <img src='./images/vic2.png' style={{"width": "100%"}} />
                      </div>
                      <div className='col pt-5'>
                        <p>Desarrollado en el stack de MERN, se ideó para facilitar a los usuarios el poder acceder a dietas o ejercicios, usando firebase para el control de usuarios y mongodb para guardar la información</p>
                        <a className='text-light' href='https://github.com/S-A-EXETUM'  target={"_blank"} rel='noreferrer'>
                            <img src='./images/github.png' style={{"width": "10%"}}/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex={0}>
                  <div className='card card-body footer'>
                    <div className='row justify-content-center'>
                      <div className='col-6 py-5 text-center'>
                        <img className='my-4' src='./images/pcIdeal.png' style={{"width": "100%"}} />
                      </div>
                      <div className='col pt-5'>
                        <p>Proyecto web que consistia en permitir a los usuarios poder cotizar computadores dependiendo de las piezas que estos eligieran, desarrollado principalmente con el lenguaje php, ademas de utilizar javascript y bootstrap</p>
                        <a className='text-light' href='https://github.com/Matthew-Rocco/ProyectoWeb-Roberto-Alvarez-Matthew-Rocco'  target={"_blank"} rel='noreferrer'>
                            <img src='./images/github.png' style={{"width": "10%"}}/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabIndex={0}>
                  <div className='card card-body footer'>
                    <div className='row justify-content-center'>
                      <div className='col-6'>
                        <a className='text-light' href='https://github.com/Matthew-Rocco'  target={"_blank"} rel='noreferrer'>
                            <img src='./images/github.png' style={{"width": "50%"}}/>
                        </a>
                      </div>
                      <div className='col pt-5'>
                        <p>Técnico universitario informático trabajando como trainee en el área de desarrollo en la empresa ACL. Fortaleza para el trabajo en equipo y buen nivel de empatía y comunicación. Buen entusiasmo por seguir aprendiendo nuevas tecnologías para poder ampliar mi conocimiento en diferentes áreas y poder alcanzar mi mayor potencial.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className='footer p-3 mt-5' style={{"margin": "0px", "bottom": "0"}}>
        <h2 className='m-2 p-2'>Matthew Andrés Rocco Tapia</h2>
        <div className='row justify-content-center m-2' style={{"margin": "0px", "bottom": "0"}}>
          <div className='col-1'>
            <a className='text-light' href='https://github.com/Matthew-Rocco'  target={"_blank"} rel='noreferrer'>
              <img src='./images/github.png' style={{"width": "25%"}}/>
            </a>
          </div>
          <div className='col-2'>
            <p>matt.rt30@gmail.com</p>
          </div>
          <div className='col-1'>
            <a className='text-light' href='https://www.linkedin.com/in/matthew-rocco-tapia/'  target={"_blank"} rel='noreferrer'>
              <img src='./images/linkedin.png' style={{"width": "50%"}}/>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
