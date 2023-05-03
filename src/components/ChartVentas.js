import React from 'react';
import ChartRowVentas from './ChartRowVentas';
import Loading from './Loading';

function ChartProds ({ventas}){
    if (ventas) {
        return (
            /* <!-- DataTales Example --> */
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Usuario</th>
                                    <th>Productos</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                ventas.map( ( row , i) => {
                                    return <ChartRowVentas { ...row} key={i}/>
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