import React from 'react';


function ChartRow(props){

    const avatar = "http://localhost:3000" + props.img

    return (
        <tr>
            <td>{props.nombre}</td>
            <td>{props.email}</td>
            <td><img width="10%" src={avatar}></img></td>
        </tr>
    )
        
    }
    
        

export default ChartRow;