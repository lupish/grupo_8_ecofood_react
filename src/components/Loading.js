import React from 'react';
import loading from '../assets/images/loading_cat.gif';

function Loading(){
    return (
        <React.Fragment>
            <div>
                <h4>Cargando</h4>
                <img src={loading} style={{width: 30 +'rem'}} alt="Cargando"></img>
            </div>
        </React.Fragment>
    )
}
export default Loading;