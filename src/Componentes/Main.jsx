import '../Style.css';
import Estudio from './Estudio';
import Experiencia from './Experiencia';
import Herramientas from './Herramientas';
import Proyectos from './Proyectos';

function Main(){
    return(
        <>
        {/* Titulo */}
        <div className='row m-5 fondo-foto shadow-lg'>
          <div className='col-12 col-md-3 col-lg-3'>
            <img src='./images/logo.png' className='foto-logo'  alt="logoACL"/>
          </div>
          <div className='col-12 col-md-6 col-lg-5 pt-5 text-light'>
            <h1 style={{"fontSize": "70px", "letterSpacing": "1px", "wordSpacing": "1px"}}>Matthew Rocco</h1>
            <h3>Practicante trainee en ACL</h3>
          </div>
          <div className='col-12 col-md-3 col-lg-4'>
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
          <h2 className='text-light'>Skills</h2>
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
          <Proyectos />
        </div>
        </>
    );
}

export default Main;