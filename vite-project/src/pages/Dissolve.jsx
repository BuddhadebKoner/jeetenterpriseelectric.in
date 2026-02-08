import React from 'react';
import { Helmet } from 'react-helmet-async';

const Dissolve = () => {
   return (
      <>
         <Helmet>
            <title>Dissolve Services - Jeet Enterprise</title>
            <meta name="description" content="Dissolve services and solutions provided by Jeet Enterprise in West Bengal. Contact us for more information about our dissolve services." />
            <meta name="keywords" content="dissolve, dissolve services, Jeet Enterprise, West Bengal" />
            <link rel="canonical" href="https://jeetenterpriseelectric.in/dissolve" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://jeetenterpriseelectric.in/dissolve" />
            <meta property="og:title" content="Dissolve Services - Jeet Enterprise" />
            <meta property="og:description" content="Dissolve services and solutions provided by Jeet Enterprise." />
            <meta property="og:image" content="https://jeetenterpriseelectric.in/logo-with-bg.png" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content="https://jeetenterpriseelectric.in/dissolve" />
            <meta name="twitter:title" content="Dissolve Services - Jeet Enterprise" />
            <meta name="twitter:description" content="Dissolve services and solutions." />
            <meta name="twitter:image" content="https://jeetenterpriseelectric.in/logo-with-bg.png" />
         </Helmet>

         <div className="container mx-auto px-4 py-8">
            <h1>Dissolve</h1>
            <p>Dissolve page content.</p>
         </div>
      </>
   );
};

export default Dissolve;
