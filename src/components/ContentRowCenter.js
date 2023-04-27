import React from 'react';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';

function ContentRowCenter({categorias, ultProd, estilosVida}){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastMovieInDb ultProd={ultProd} />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <div className="col-lg-6 mb-4">
                <GenresInDb categorias={categorias} titulo={"Categorías"}/>
                <GenresInDb categorias={estilosVida} titulo={"Estilos de vida"}/>
            </div>

        </div>
    )
}

export default ContentRowCenter;