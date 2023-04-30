import React from 'react';
import SmallCard from './SmallCard';
import Loading from './Loading';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */



function ContentMetrics({categoriasCant, prodsCant, usuariosCant, estilosVidaCant, marcasCant}){
    
    
    let prodsQty = {
        title: 'Productos',
        color: 'primary', 
        cuantity: prodsCant,
        icon: 'fa-clipboard-list'
    }
    
    /* <!-- Total awards --> */
    
    let categoriasQty = {
        title:' Categorías', 
        color:'success', 
        cuantity: categoriasCant,
        icon:'fa-award'
    }
    
    /* <!-- Actors quantity --> */
    
    let usuariosQty = {
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
    
    let cartProps = [prodsQty, categoriasQty, usuariosQty, estilosVidaQty, marcasQty];
    
    if (categoriasCant && prodsCant && usuariosCant && estilosVidaCant &&  marcasCant) {
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )}
    else {
        return (
            <Loading />
        )
    }
}

export default ContentMetrics;