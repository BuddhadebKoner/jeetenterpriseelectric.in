import React from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
   return (
      <>
         <Helmet>
            <title>Contact Us - Jeet Enterprise</title>
            <meta name="description" content="Get in touch with Jeet Enterprise in Abhirampur, West Bengal. Contact us for inquiries, quotes, and customer support. Call +91 9474051466." />
            <meta name="keywords" content="contact us, electrical shop contact, customer support, Jeet Enterprise, Abhirampur, West Bengal, phone number" />
            <link rel="canonical" href="https://jeetenterpriseelectric.in/contact" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://jeetenterpriseelectric.in/contact" />
            <meta property="og:title" content="Contact Us - Jeet Enterprise" />
            <meta property="og:description" content="Get in touch with us for inquiries, quotes, and customer support in West Bengal." />
            <meta property="og:image" content="https://jeetenterpriseelectric.in/logo-with-bg.png" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content="https://jeetenterpriseelectric.in/contact" />
            <meta name="twitter:title" content="Contact Us - Jeet Enterprise" />
            <meta name="twitter:description" content="Get in touch with us for inquiries and customer support." />
            <meta name="twitter:image" content="https://jeetenterpriseelectric.in/logo-with-bg.png" />
         </Helmet>

         <div className="container mx-auto px-4 py-8">
            <h1>Contact Us</h1>
            <p>Get in touch with us for all your electrical needs.</p>
         </div>
      </>
   );
};

export default Contact;
