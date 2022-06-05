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
            <img src='./images/foto.jpg' className='foto'  alt="foto"/>
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
                        <img src='./images/parland.png' style={{"width": "100%"}} alt="logo Parland" />
                      </div>
                      <div className='col pt-5'>
                        <p>Aplicacion de juegos de escritorio desarrollado en .net y java, donde con el juego 3 en raya, realice una conexion entre computadores a traves de sockets de java</p>
                        <a className='text-light' href='https://github.com/S-A-EXETUM/InterfazParland'  target={"_blank"} rel='noreferrer'>
                            <img src='./images/github.png' style={{"width": "10%"}} alt="github" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex={0}>
                  <div className='card card-body footer'>
                    <div className='row justify-content-center'>
                      <div className='col-6'>
                        <img src='./images/vic2.png' style={{"width": "100%"}} alt="logo Vic2" />
                      </div>
                      <div className='col pt-5'>
                        <p>Desarrollado en el stack de MERN, se ideó para facilitar a los usuarios el poder acceder a dietas o ejercicios, usando firebase para el control de usuarios y mongodb para guardar la información</p>
                        <a className='text-light' href='https://github.com/S-A-EXETUM'  target={"_blank"} rel='noreferrer'>
                            <img src='./images/github.png' style={{"width": "10%"}} alt="github" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex={0}>
                  <div className='card card-body footer'>
                    <div className='row justify-content-center'>
                      <div className='col-6 py-5 text-center'>
                        <img className='my-4' src='./images/pcIdeal.png' style={{"width": "100%"}} alt="logo PcIdeal" />
                      </div>
                      <div className='col pt-5'>
                        <p>Proyecto web que consistia en permitir a los usuarios poder cotizar computadores dependiendo de las piezas que estos eligieran, desarrollado principalmente con el lenguaje php, ademas de utilizar javascript y bootstrap</p>
                        <a className='text-light' href='https://github.com/Matthew-Rocco/ProyectoWeb-Roberto-Alvarez-Matthew-Rocco'  target={"_blank"} rel='noreferrer'>
                            <img src='./images/github.png' style={{"width": "10%"}} alt="github" />
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
                            <img src='./images/github.png' style={{"width": "50%"}} alt="github" />
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
          <div className='col-2 text-center'>
            <div className='row justify-content-center'>
              <a href="https://github.com/Matthew-Rocco" className='nav-link' target={"_blank"} rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
              Matthew
            </div>
          </div>
          <div className='col-2 text-center'>
            <div className='row justify-content-center'>
              <a href="https://www.linkedin.com/in/matthew-rocco-tapia/" className='nav-link' target={"_blank"} rel="noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg>
              </a>
              Matthew Rocco
            </div>
          </div>
          <div className='col-2 text-center'>
            <div className='row justify-content-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-envelope-plus" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
                <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z"/>
              </svg>
              matt.rt30@gmail.com
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
