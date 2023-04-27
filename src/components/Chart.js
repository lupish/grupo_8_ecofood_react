import React from 'react';
import ChartRow from './ChartRow';

function Chart ({usuarios}){
    if (usuarios) {
        return (
            /* <!-- DataTales Example --> */
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Mail</th>
                                    <th>Avatar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                usuarios.map( ( row , i) => {
                                    return <ChartRow { ...row} key={i}/>
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
            <h4>Cargandooooo</h4>
        )
    }
}

export default Chart;