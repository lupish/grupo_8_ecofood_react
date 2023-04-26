import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
function ContentWrapper({categorias, categoriasCant, prodsCant, usuariosCant, usuarios, ultProd}){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop categorias={categorias} categoriasCant={categoriasCant} prodsCant={prodsCant} usuariosCant={usuariosCant} usuarios={usuarios} ultProd={ultProd}/>
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;