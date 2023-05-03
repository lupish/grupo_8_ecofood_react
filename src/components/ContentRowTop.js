import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentMetrics from './ContentMetrics';
import Chart from './Chart';
import ChartProds from './ChartProds';

function ContentRowTop({productos, categorias, categoriasCant, prodsCant, usuariosCant, usuarios, ultProd, estilosVida, estilosVidaCant, marcasCant, marcas}){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Dashboard de EcoFood</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentMetrics categoriasCant={categoriasCant} prodsCant={prodsCant} usuariosCant={usuariosCant} estilosVidaCant={estilosVidaCant} marcasCant={marcasCant}/>
					<ContentRowCenter categorias={categorias} ultProd={ultProd} estilosVida={estilosVida} marcas={marcas}/>
					<Chart usuarios={usuarios} />
					<ChartProds productos={productos} />
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;