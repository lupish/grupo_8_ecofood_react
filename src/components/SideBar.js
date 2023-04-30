import React, { useEffect, useState } from 'react';
import image from '../assets/images/ecofood_logo_prueba.png';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';

function SideBar(){
    
    const obtenerProductos = async () => {
        const urlBase = "http://localhost:3000";
        const urlProductos = urlBase + "/api/products?sortFiled=created_at&&sortType=DESC";
        
        const response = await fetch(urlProductos)
        const infoAPI = await response.json()

        setInfoProductos(infoAPI)
        setUltInfoProductos(infoAPI.products[0])
    }

    const obtenerUsuarios = async () => {
        const response = await fetch("http://localhost:3000/api/users")
        const infoAPI = await response.json()
        setInfoUsuarios(infoAPI)
    }

    let [infoProductos, setInfoProductos] = useState([])
    let [infoUltProductos, setUltInfoProductos] = useState([])
    let [infoUsuarios, setInfoUsuarios] = useState([])
    
    useEffect(() => {
        obtenerProductos()
        obtenerUsuarios()
    }, [])

    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - EcoFood</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Acciones</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/GenresInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Clasificación de productos</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastMovieInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Último producto</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/ContentRowMovies">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Métricas</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            <Switch>
                <Route exact path="/">
                    <ContentWrapper categorias={infoProductos.countByCategories} categoriasCant={Object.keys(infoProductos.countByCategories == undefined ? {} : infoProductos.countByCategories).length} prodsCant={infoProductos.quantity} usuariosCant={infoUsuarios.count} usuarios={infoUsuarios.users} ultProd={infoUltProductos} estilosVida={infoProductos.countByLifeStyles} estilosVidaCant={Object.keys(infoProductos.countByLifeStyles == undefined ? {} : infoProductos.countByLifeStyles).length} marcasCant={Object.keys(infoProductos.countByBrands == undefined ? {} : infoProductos.countByBrands).length}/>
                </Route>
                <Route path="/GenresInDb">
                    <div>
                        <GenresInDb categorias={infoProductos.countByCategories} titulo={"Categorías"}/>
                        <GenresInDb categorias={infoProductos.countByLifeStyles} titulo={"Estilos de vida"}/>
                        <GenresInDb categorias={infoProductos.countByBrands} titulo={"Marcas"}/>
                    </div>
                </Route>
                <Route path="/LastMovieInDb">
                    <LastMovieInDb ultProd={infoUltProductos} />
                </Route>
                <Route path="/ContentRowMovies">
                    <ContentRowMovies
                        categoriasCant={Object.keys(infoProductos.countByCategories == undefined ? {} : infoProductos.countByCategories).length} prodsCant={infoProductos.quantity} usuariosCant={infoUsuarios.count} estilosVidaCant={Object.keys(infoProductos.countByLifeStyles == undefined ? {} : infoProductos.countByLifeStyles).length} marcasCant={Object.keys(infoProductos.countByBrands == undefined ? {} : infoProductos.countByBrands).length}
                    />
                </Route>
                <Route component={NotFound} />
            </Switch>
        </React.Fragment>
    )
}
export default SideBar;