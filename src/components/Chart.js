import React from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        Title: 'Billy Elliot ',
        Length: '123',
        Rating: '5',
        Categories: ['Drama','Comedia'],
        Awards: 2
    },
    {
        Title: 'Alicia en el país de las maravillas',
        Length: '142',
        Rating: '4.8',
        Categories: ['Drama','Acción','Comedia'],
        Awards: 3
    },
    
]


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
                            <tfoot>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Mail</th>
                                    <th>Avatar</th>
                                </tr>
                            </tfoot>
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