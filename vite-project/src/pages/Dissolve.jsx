import React from 'react';
import { Helmet } from 'react-helmet-async';

const Dissolve = () => {
   return (
      <>
         <Helmet>
            <title>Dissolve - Jeet Enterprise Electric</title>
            <meta name="description" content="Dissolve page for Jeet Enterprise Electric." />
            <meta name="keywords" content="dissolve, Jeet Enterprise Electric" />
            <link rel="canonical" href="https://jeetenterpriseelectric.in/dissolve" />
         </Helmet>

         <div className="container mx-auto px-4 py-8">
            <h1>Dissolve</h1>
            <p>Dissolve page content.</p>
         </div>
      </>
   );
};

export default Dissolve;
