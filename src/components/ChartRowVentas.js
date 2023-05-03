import React from 'react';


function ChartRowProds(props){

    const avatar = "http://localhost:3000" + props.usuario_avatar

    return (
        <tr>
            <td>{props.fecha_factura}</td>
            <td><img width="50px" src={avatar} alt="{props.img}"></img></td>
            <td>
                {props.prods.map(elem => {
                    return <p>{elem.nombre} - ${elem.precio} - {elem.cant}</p>
                })}
            </td>
            <td>${props.total}</td>
        </tr>
    )
        
    }
    
        

export default ChartRowProds;