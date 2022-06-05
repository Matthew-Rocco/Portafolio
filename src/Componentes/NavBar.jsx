function NavBar(){
    return(
        <>
            <nav id="navbar-example2" className="navbar fondo-oscuro px-4">
                <a className="navbar-brand text-light" href="#">logo acl? :p</a>
                <ul className="nav nav-pills">
                    <li>
                        <a className="nav-link text-light" href="#sobre-mi">Sobre mi</a>
                    </li>
                    <li>
                        <a className="nav-link text-light" href="#proyectos">Proyectos</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;