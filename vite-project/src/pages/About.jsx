import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
   return (
      <>
         <Helmet>
            <title>About Us - Jeet Enterprise Electric</title>
            <meta name="description" content="Learn more about Jeet Enterprise Electric, our mission, values, and commitment to providing quality electrical products and services." />
            <meta name="keywords" content="about us, electrical company, electrical business, Jeet Enterprise Electric" />
            <link rel="canonical" href="https://jeetenterpriseelectric.in/about" />
         </Helmet>

         <div className="container mx-auto px-4 py-8">
            <h1>About Us</h1>
            <p>Learn more about Jeet Enterprise Electric.</p>
         </div>
      </>
   );
};

export default About;
