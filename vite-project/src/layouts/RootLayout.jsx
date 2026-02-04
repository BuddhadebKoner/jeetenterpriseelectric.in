import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import BookTechnicianButton from '../components/BookTechnicianButton';

const RootLayout = () => {
   return (
      <div className="min-h-screen flex flex-col">
         <Navbar />

         <main className="flex-1">
            <Outlet />
         </main>

         <Footer />

         <WhatsAppButton />
         <BookTechnicianButton />
      </div>
   );
};

export default RootLayout;
