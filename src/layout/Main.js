import React from 'react';
import Footer from '../pages/Footer/Footer';
import Nav from '../pages/Nav/Nav';
import {Outlet} from  'react-router-dom';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;