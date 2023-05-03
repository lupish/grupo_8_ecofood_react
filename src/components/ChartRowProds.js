import React from 'react';


function ChartRowProds(props){

    const avatar = "http://localhost:3000" + props.imagen

    return (
        <tr>
            <td>{props.nombre}</td>
            <td>{props.categoria}</td>
            <td>{props.marca}</td>
            <td>${props.precio}</td>
            <td>{props.descripcionCorta}</td>
            <td><img width="50px" src={avatar} alt="{props.img}"></img></td>
        </tr>
    )
        
    }
    
        

export default ChartRowProds;