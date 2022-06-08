import { useState } from "react";

function Experiencia(){

    const [mas, setMas] = useState(false);

    return(
        <div className='col-11 col-md-5 col-lg-5 fondo-experiencia p-3'>
          <h2 className='texto-titular-3'>Experiencia</h2>
          <h4 className='texto-titular-3'>ACL | Programa Profesionales Jóvenes - Área Desarrollo </h4>
          <p className='texto-titular-3'>Abril de 2022 - Actual</p>
          <p className='texto-titular-3'>Desarrollador trainee realizando proyectos con el stack MERN, java y .net</p>
          <hr className="text-white" style={{"margin": "1px"}} />
          <h4 className='texto-titular-3'>ACL | Programa Profesionales Jóvenes - Área Desarrollo </h4>
          <p className='texto-titular-3'>Enero de 2022 - Marzo 2022</p>
          <p className='texto-titular-3'>Practicante desarrollador de software con tecnologías web, centrado en el entendimiento de Spring Boot para desarrollar en java</p>

          { mas ?
            <>
              <hr className="text-white" style={{"margin": "1px"}} />
              <h4 className='texto-titular-3'>Oxiquim | Dibujante Técnico</h4>
              <p className='texto-titular-3'>Enero de 2020 - Marzo de 2020 </p>
              <p className='texto-titular-3'>	Realización de práctica profesional en el área de dibujo técnico, a cargo de realizar planos sobre la arquitectura, utilizando herramienta AutoCAD, donde realicé, entre planos generales para tuberías, hasta escaleras de emergencia</p>
              <button className="btn text-light" onClick={() => {setMas(false)}}>Ver menos</button>
            </>
            :
            <>
              <button className="btn text-light" onClick={() => {setMas(true)}}>Ver más</button>
            </>
          }
        </div>
    );
}

export default Experiencia;