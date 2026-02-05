import React from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
   return (
      <>
         <Helmet>
            <title>Contact Us - Jeet Enterprise</title>
            <meta name="description" content="Get in touch with Jeet Enterprise. Contact us for inquiries, quotes, and customer support." />
            <meta name="keywords" content="contact us, electrical shop contact, customer support, Jeet Enterprise" />
            <link rel="canonical" href="https://jeetenterpriseelectric.in/contact" />
         </Helmet>

         <div className="container mx-auto px-4 py-8">
            <h1>Contact Us</h1>
            <p>Get in touch with us for all your electrical needs.</p>
         </div>
      </>
   );
};

export default Contact;
