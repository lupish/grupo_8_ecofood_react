import React from 'react';
import ChartRowProds from './ChartRowProds';
import Loading from './Loading';

function ChartProds ({productos}){
    if (productos) {
        return (
            /* <!-- DataTales Example --> */
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Categoría</th>
                                    <th>Marca</th>
                                    <th>Precio</th>
                                    <th>Descripción</th>
                                    <th>Imagen</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                productos.map( ( row , i) => {
                                    return <ChartRowProds { ...row} key={i}/>
                                })
                                }

                            </tbody>
                        </table>
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

export default ChartProds;