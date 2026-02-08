import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFound = () => {
   return (
      <>
         <Helmet>
            <title>404 - Page Not Found | Jeet Enterprise</title>
            <meta name="description" content="The page you're looking for doesn't exist. Visit Jeet Enterprise homepage for quality electrical solutions." />
            <meta name="robots" content="noindex, nofollow" />
            <link rel="canonical" href="https://jeetenterpriseelectric.in/404" />

            {/* Open Graph */}
            <meta property="og:title" content="404 - Page Not Found | Jeet Enterprise" />
            <meta property="og:description" content="The page you're looking for doesn't exist." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://jeetenterpriseelectric.in/404" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="404 - Page Not Found | Jeet Enterprise" />
            <meta name="twitter:description" content="The page you're looking for doesn't exist." />
         </Helmet>

         <div className="min-h-screen flex items-center justify-center px-4 py-16">
            <h1
               className='text-6xl font-bold text-gray-900'
            >
               404
            </h1>
         </div>
      </>
   );
};

export default NotFound;
