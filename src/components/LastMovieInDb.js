import React from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';

function LastMovieInDb({ultProd}){
    if (ultProd) {
        const avatar = "http://localhost:3000" + ultProd.img;
        console.log(avatar)
        console.log(avatar)

        return(
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Último producto dado de alta</h5>
                    </div>
                    <div className="card-body">
                        <h3>{ultProd.nombre} - {ultProd.marca}</h3>
                        <div className="text-center">
                            {
                                ultProd.img ?
                                    ultProd.img.map(elem => {return <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 30 +'rem'}} src={"http://localhost:3000" + elem} alt={elem}/>}) 
                                    :<p>Sin imágenes</p>
                            }
                        </div>
                        <h6>Precio: ${ultProd.precio}</h6>
                        <p>{ultProd.descripcionLarga}</p>
                        <p>Categoría: {ultProd.categoria}.</p>
                        
                        <p>Estilos de vida:</p>
                        <ul>
                            {
                                ultProd.estiloVida ?
                                    ultProd.estiloVida.map(elem => {return <li>{elem}.</li>}) 
                                    :<li>Sin estilo de vida.</li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <h4>Cargandooooo</h4>
        )
    }
}

export default LastMovieInDb;
