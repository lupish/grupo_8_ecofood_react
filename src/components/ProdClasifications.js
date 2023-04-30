import React from "react";
import Loading from './Loading';

function ProdClasifications({categorias, titulo}) {
  
  if (categorias) {
    return (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              {titulo}
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              { Object.keys(categorias).map( elem => {
                return (
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body">{elem} - {categorias[elem]}</div>
                    </div>
                  </div>
                )
              }) }              
            </div>
          </div>
        </div>
    );
  } else {
    return (
      <Loading />
    )
  }
  
  
}

export default ProdClasifications;
