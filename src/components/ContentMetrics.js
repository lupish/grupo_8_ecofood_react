import React from 'react';
import SmallCard from './SmallCard';
import Loading from './Loading';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */



function ContentMetrics({categoriasCant, prodsCant, usuariosCant, estilosVidaCant, marcasCant, ventasCant}){
    
    
    let prodsQty = {
        title: 'Productos',
        color: 'primary', 
        cuantity: prodsCant,
        icon: 'fa-award'
    }
    
    let categoriasQty = {
        title:' Categorías', 
        color:'success', 
        cuantity: categoriasCant,
        icon:'fa-solid fa-filter'
    }
    
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

    let ventasQty = {
        title:' Ventas', 
        color:'success', 
        cuantity: ventasCant,
        icon:'fa-clipboard-list'
    }
    
    let cartProps = [prodsQty, ventasQty, usuariosQty, estilosVidaQty, categoriasQty, marcasQty];
    
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