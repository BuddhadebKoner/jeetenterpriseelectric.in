import React from 'react';
import { Helmet } from 'react-helmet-async';

const Support = () => {
   return (
      <>
         <Helmet>
            <title>Support - Jeet Enterprise Electric</title>
            <meta name="description" content="Customer support and assistance for Jeet Enterprise Electric products and services. We're here to help." />
            <meta name="keywords" content="customer support, electrical support, help center, Jeet Enterprise Electric" />
            <link rel="canonical" href="https://jeetenterpriseelectric.in/support" />
         </Helmet>

         <div className="container mx-auto px-4 py-8">
            <h1>Support</h1>
            <p>We're here to help with your questions and concerns.</p>
         </div>
      </>
   );
};

export default Support;
