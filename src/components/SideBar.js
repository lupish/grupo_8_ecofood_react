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
        const urlProductos = urlBase + "/api/products";
        console.log(urlBase)
        console.log(urlProductos)
        
        const response = await fetch(urlProductos)
        const infoAPI = await response.json()
        console.log(infoAPI)

        const urlUltProd = urlBase + infoAPI.products[infoAPI.products.length - 1].detail
        console.log(urlUltProd)

        const responseUltProd = await fetch(urlUltProd)
        const infoAPIUltProd = await responseUltProd.json()
        console.log(infoAPIUltProd)
        setInfoProductos(infoAPI)
        setUltInfoProductos(infoAPIUltProd)

        console.log(infoAPIUltProd)
    }

    const obtenerUsuarios = async () => {
        const response = await fetch("http://localhost:3000/api/users")
        const infoAPI = await response.json()
        console.log(infoAPI)
        console.log(infoAPI)
        console.log(infoAPI)
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

            {/*<!-- Microdesafio 1 -->*/}
            {/*<!--<Route exact path="/">
                <ContentWrapper />
            </Route>
            <Route path="/GenresInDb">
                <GenresInDb />
            </Route>
            <Route path="/LastMovieInDb">
                <LastMovieInDb />
            </Route>
            <Route path="/ContentRowMovies">
                <ContentRowMovies />
            </Route>*/}
            {/*<!-- End Microdesafio 1 -->*/}

            {/*<!-- End Microdesafio 2 -->*/}
            <Switch>
                <Route exact path="/">
                    <ContentWrapper categorias={infoProductos.countByCategories} categoriasCant={Object.keys(infoProductos.countByCategories == undefined ? {} : infoProductos.countByCategories).length} prodsCant={infoProductos.quantity} usuariosCant={infoUsuarios.count} usuarios={infoUsuarios.users} ultProd={infoUltProductos} estilosVida={infoProductos.countByLifeStyles} />
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
                        categoriasCant={Object.keys(infoProductos.countByCategories == undefined ? {} : infoProductos.countByCategories).length} prodsCant={infoProductos.quantity} usuariosCant={infoUsuarios.count}
                    />
                </Route>
                <Route component={NotFound} />
            </Switch>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;