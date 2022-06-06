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
                            <p>Aplicación de escritorio para jugar al 3 en raya, desarrollado en java, realice una conexión entre computadores a través de sockets e hilos, para mantener un servidor y la conexion de usuarios</p>
                            <a className='text-light' href='https://github.com/Matthew-Rocco/TresEnRaya'  target={"_blank"} rel='noreferrer'>
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
                            <p>Proyecto web que consistía en permitir a los usuarios poder cotizar computadores dependiendo de las piezas que estos eligieran, desarrollado principalmente con el lenguaje php, además de utilizar javascript y bootstrap</p>
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
        </>
    );
}

export default Proyectos;