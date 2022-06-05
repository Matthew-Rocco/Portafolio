function Herramientas(){
    return(
        <div className="col-12 col-md-8 col-lg-5">
            <div className="progress mt-2">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{"width": "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="progress mt-2">
                <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" style={{"width": "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="progress mt-2">
                <div className="progress-bar progress-bar-striped bg-info progress-bar-animated" role="progressbar" style={{"width": "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="progress mt-2">
                <div className="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar" style={{"width": "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="progress mt-2">
                <div className="progress-bar progress-bar-striped bg-danger progress-bar-animated" role="progressbar" style={{"width": "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    );
}

export default Herramientas;