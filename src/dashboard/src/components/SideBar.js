import React from 'react';
import image from '../assets/images/mosaik-logo.png';
import image2 from '../assets/images/mosaikLema.jpg';
import ContentWrapper from './ContentWrapper';
import Categories from './Categories';
import LastProduct from './LastProduct';
import AllProducts from './AllProducts';
import AllUsers from './AllUsers';
import LastUser from './LastUser';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-25" src={image} alt="Mosaik"/> <img className="w-50" src={image2} alt="Mosaik"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Tablas</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/Categories">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Categorias</span>
                    </Link>
                </li>

                 {/*<!-- Nav Item - Producto -->*/}
                 <li className="nav-item">
                    <Link className="nav-link" to="/AllProducts">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Todos los Productos</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/AllUsers">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Todos los Usuarios</span></Link>
                </li>

                {/*<!-- Nav Item - Usuarios -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastProduct">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Ultimo Producto</span></Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/LastUser">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Ultimo Usuario</span>
                    </Link>
                </li>


                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
           
           
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/Categories">
                    <Categories />
                </Route>
                <Route path="/LastProduct">
                    <LastProduct />
                </Route>
                <Route path="/AllProducts">
                    <AllProducts />
                </Route>
                <Route path="/LastUser">
                    <LastUser />
                </Route>
                <Route path="/AllUsers">
                    <AllUsers />
                </Route>
                <Route component={NotFound} />
            </Switch>

        </React.Fragment>
    )
}
export default SideBar;