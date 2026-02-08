import React from 'react';
import { Helmet } from 'react-helmet-async';

const Support = () => {
   return (
      <>
         <Helmet>
            <title>Support - Jeet Enterprise</title>
            <meta name="description" content="Customer support and assistance for Jeet Enterprise products and services. We're here to help with technical support, installation guidance, and product inquiries." />
            <meta name="keywords" content="customer support, electrical support, help center, Jeet Enterprise, technical assistance, installation help" />
            <link rel="canonical" href="https://jeetenterpriseelectric.in/support" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://jeetenterpriseelectric.in/support" />
            <meta property="og:title" content="Customer Support - Jeet Enterprise" />
            <meta property="og:description" content="Get help with our products and services. Technical support and assistance available." />
            <meta property="og:image" content="https://jeetenterpriseelectric.in/logo-with-bg.png" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content="https://jeetenterpriseelectric.in/support" />
            <meta name="twitter:title" content="Customer Support - Jeet Enterprise" />
            <meta name="twitter:description" content="Get help with our products and services." />
            <meta name="twitter:image" content="https://jeetenterpriseelectric.in/logo-with-bg.png" />
         </Helmet>

         <div className="container mx-auto px-4 py-8">
            <h1>Support</h1>
            <p>We're here to help with your questions and concerns.</p>
         </div>
      </>
   );
};

export default Support;
