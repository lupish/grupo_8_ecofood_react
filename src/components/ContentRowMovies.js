import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */



function ContentRowMovies({categoriasCant, prodsCant, usuariosCant, estilosVidaCant, marcasCant}){
    let moviesInDB = {
        title: 'Productos',
        color: 'primary', 
        cuantity: prodsCant,
        icon: 'fa-clipboard-list'
    }
    
    /* <!-- Total awards --> */
    
    let totalAwards = {
        title:' Categorías', 
        color:'success', 
        cuantity: categoriasCant,
        icon:'fa-award'
    }
    
    /* <!-- Actors quantity --> */
    
    let actorsQuantity = {
        title:'Usuarios' ,
        color:'warning',
        cuantity: usuariosCant,
        icon:'fa-user-check'
    }

    let estilosVidaQty = {
        title:'Estilos de vida' ,
        color:'primary',
        cuantity: estilosVidaCant,
        icon:'fa-regular fa-heart'
    }

    let marcasQty = {
        title:'Marcas' ,
        color:'success',
        cuantity: marcasCant,
        icon:'fa-solid fa-tag'
    }
    
    let cartProps = [moviesInDB, totalAwards, actorsQuantity, estilosVidaQty, marcasQty];
    
    if (categoriasCant && prodsCant && usuariosCant) {
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )}
    else {
        return (
            <h4>Cargandooooo</h4>
        )
    }
}

export default ContentRowMovies;