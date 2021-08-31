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
                <hr className="sidebar-divider my-0"/>

                <li className="nav-item active">
                    <a className="nav-link" href="http://localhost:3003/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
</svg> Volver a Mosaik</span></a>
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