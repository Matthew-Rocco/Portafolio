function Proyectos(){
    return(
        <>
            <div className='col-8 sombra card mt-3 mb-3 fondo-oscuro p-3'>
                <div className="d-flex align-items-start">
                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="nav-link active text-light" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">3 en raya</button>
                    <button className="nav-link text-light" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Vic2</button>
                    <button className="nav-link text-light" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Pc Ideal</button>
                    <button className="nav-link text-light" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">GitHub</button>
                </div>
                <div className="tab-content  text-light" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex={0}>
                    <div className='card card-body footer'>
                        <div className='row justify-content-center'>
                        <div className='col-6'>
                            <img src='./images/3enRaya.png' style={{"width": "100%"}} alt="logo Parland" />
                        </div>
                        <div className='col pt-5'>
                            <p>Aplicación de escritorio para jugar al 3 en raya desarrollado en java. Donde realice una conexión entre computadores a través de sockets e hilos para mantener un servidor y la conexión de usuarios.</p>
                            <a href="https://github.com/Matthew-Rocco/TresEnRaya" className='nav-link' target={"_blank"} rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
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
                            <p>Desarrollado en el stack de MERN, se ideó para facilitar a los usuarios el poder acceder a dietas o ejercicios, usando firebase para el control de usuarios y mongodb para guardar la información.</p>
                            <a href="https://github.com/S-A-EXETUM" className='nav-link' target={"_blank"} rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
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
                            <p>Proyecto web que consistía en permitir a los usuarios poder cotizar computadores dependiendo de las piezas que estos eligieran, desarrollado principalmente con el lenguaje php, además de utilizar javascript y bootstrap.</p>
                            <a href="https://github.com/Matthew-Rocco/ProyectoWeb-Roberto-Alvarez-Matthew-Rocco" className='nav-link' target={"_blank"} rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabIndex={0}>
                    <div className='card card-body footer'>
                        <div className='row justify-content-center'>
                        <div className='col-6'>
                            <a href="https://github.com/Matthew-Rocco" className='nav-link' target={"_blank"} rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
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
        </>
    );
}

export default Proyectos;