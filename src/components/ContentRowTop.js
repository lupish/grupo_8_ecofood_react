import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowMovies from './ContentRowMovies';
import Chart from './Chart';

function ContentRowTop({categorias, categoriasCant, prodsCant, usuariosCant, usuarios, ultProd}){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Dashboard de EcoFood</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies categoriasCant={categoriasCant} prodsCant={prodsCant} usuariosCant={usuariosCant}/>
					<ContentRowCenter categorias={categorias} ultProd={ultProd}/>
					<Chart usuarios={usuarios}/>
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;