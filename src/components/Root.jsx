import React from 'react';
import Navber from '../pages/Navber';
import { Outlet } from "react-router-dom";
// import Footer from '../pages/footer/Footer';

const Root = () => {
    return (
        <div className='w-8/12 mx-auto'>
            <Navber></Navber>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Root;