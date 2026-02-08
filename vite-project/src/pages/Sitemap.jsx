import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Sitemap = () => {
   const pages = [
      {
         category: 'Main Pages',
         links: [
            { path: '/', title: 'Home', description: 'Welcome to Jeet Enterprise - Your trusted electrical solutions partner' },
            { path: '/about', title: 'About Us', description: 'Learn about our journey, mission, and commitment to quality' },
            { path: '/products', title: 'Products', description: 'Browse our comprehensive range of electrical products and solutions' },
            { path: '/contact', title: 'Contact', description: 'Get in touch with us for inquiries and support' },
         ]
      },
      {
         category: 'Services',
         links: [
            { path: '/support', title: 'Support', description: 'Technical support and customer service information' },
            { path: '/rent-house', title: 'Room Rental', description: 'Affordable room rental in Abhirampur near our shop' },
            { path: '/dissolve', title: 'Dissolve', description: 'Dissolve services and information' },
         ]
      },
      {
         category: 'Legal & Information',
         links: [
            { path: '/privacy-policy', title: 'Privacy Policy', description: 'How we protect and handle your personal information' },
            { path: '/terms-conditions', title: 'Terms & Conditions', description: 'Terms of service and usage conditions' },
            { path: '/sitemap', title: 'Sitemap', description: 'Complete overview of all pages on our website' },
         ]
      }
   ];

   return (
      <>
         <Helmet>
            <title>Sitemap - All Pages | Jeet Enterprise</title>
            <meta name="description" content="Complete sitemap of Jeet Enterprise website. Find all our pages including products, services, contact information, and more." />
            <meta name="keywords" content="sitemap, site map, website structure, navigation, Jeet Enterprise pages" />
            <link rel="canonical" href="https://jeetenterpriseelectric.in/sitemap" />

            {/* Open Graph */}
            <meta property="og:title" content="Sitemap - All Pages | Jeet Enterprise" />
            <meta property="og:description" content="Complete sitemap of Jeet Enterprise website. Find all our pages including products, services, and contact information." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://jeetenterpriseelectric.in/sitemap" />
            <meta property="og:image" content="https://jeetenterpriseelectric.in/logo-with-bg.png" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Sitemap - All Pages | Jeet Enterprise" />
            <meta name="twitter:description" content="Complete sitemap of Jeet Enterprise website." />
            <meta name="twitter:image" content="https://jeetenterpriseelectric.in/logo-with-bg.png" />
         </Helmet>

         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
               {/* Header */}
               <div className="text-center mb-16">
                  <h1 className="text-5xl font-bold text-gray-900 mb-4">
                     Website Sitemap
                  </h1>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                     Navigate through all pages of Jeet Enterprise. Find everything from products to support in one place.
                  </p>
                  <div className="mt-6">
                     <Link
                        to="/"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                     >
                        ← Back to Home
                     </Link>
                  </div>
               </div>

               {/* Sitemap Grid */}
               <div className="space-y-12">
                  {pages.map((section, idx) => (
                     <div key={idx} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-4 border-b-2 border-blue-600">
                           {section.category}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                           {section.links.map((link, linkIdx) => (
                              <Link
                                 key={linkIdx}
                                 to={link.path}
                                 className="group p-6 rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
                              >
                                 <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-2 flex items-center">
                                    <span className="mr-2">→</span>
                                    {link.title}
                                 </h3>
                                 <p className="text-gray-600 text-sm leading-relaxed">
                                    {link.description}
                                 </p>
                                 <div className="mt-3 text-blue-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                                    Visit Page →
                                 </div>
                              </Link>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>

               {/* XML Sitemap Link */}
               <div className="mt-16 text-center bg-blue-100 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                     For Search Engines
                  </h3>
                  <p className="text-gray-700 mb-4">
                     If you're looking for the XML sitemap for SEO purposes:
                  </p>
                  <a
                     href="/sitemap.xml"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                  >
                     View XML Sitemap
                  </a>
               </div>
            </div>
         </div>
      </>
   );
};

export default Sitemap;
