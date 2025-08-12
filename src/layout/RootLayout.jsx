import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import DarkVeil from '../components/DarkVeil';

const RootLayout = () => {
    return (
        <div className="relative ">
           
            <div className="fixed inset-0 -z-10 pointer-events-none">
                <DarkVeil />
            </div>

            <Navbar />
            <main className="relative z-10 max-w-7xl mx-auto px-4 mt-10">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;