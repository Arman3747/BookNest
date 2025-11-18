import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

const Root = () => {

    // const { state } = useNavigation();

    return (
        <div className='max-w-7xl mx-auto'>
            {/* className='sticky top-0 z-1000' */}
            <header>
                <Navbar></Navbar>
            </header>

            <main className='min-h-screen mx-4'>
                {/* {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>} */}
                <Outlet></Outlet>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;