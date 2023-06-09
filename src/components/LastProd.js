import React from 'react';
import Loading from './Loading';

function LastProd({ultProd}){
    if (ultProd) {
        return(
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Último producto dado de alta</h5>
                    </div>
                    <div className="card-body">
                        <h3 className="font-weight-bold">{ultProd.nombre} - {ultProd.marca}</h3>
                        <div className="text-center">
                            {
                                ultProd.imagen ?
                                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 30 +'rem'}} src={"http://localhost:3000" + ultProd.imagen} alt={ultProd.imagen}/> 
                                    :<p>Sin imágenes</p>
                            }
                        </div>
                        <h6 className="font-weight-bold">Precio: ${ultProd.precio}</h6>
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
            <Loading />
        )
    }
}

export default LastProd;
