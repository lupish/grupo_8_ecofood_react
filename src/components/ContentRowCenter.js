import React from 'react';
import LastProd from './LastProd';
import ProdClasifications from './ProdClasifications';

function ContentRowCenter({categorias, ultProd, estilosVida, marcas}){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastProd ultProd={ultProd} />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <div className="col-lg-6 mb-4">
                <ProdClasifications categorias={categorias} titulo={"Categorías"}/>
                <ProdClasifications categorias={estilosVida} titulo={"Estilos de vida"}/>
                <ProdClasifications categorias={marcas} titulo={"Marcas"}/>
            </div>

        </div>
    )
}

export default ContentRowCenter;