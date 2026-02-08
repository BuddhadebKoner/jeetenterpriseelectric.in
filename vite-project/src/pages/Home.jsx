import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Phone } from 'lucide-react';
import Hero from '@/components/Hero';
import PremiumBrands from '@/components/PremiumBrands';
import FindUsHere from '@/components/FindUsHere';
import ProductsGrid from '@/components/ProductsGrid';
import OurServices from '@/components/OurServices';
import { features } from '@/data/hero';

const Home = () => {
   return (
      <>
         <Helmet>
            <title>Jeet Enterprise - Quality Electrical Solutions</title>
            <meta name="description" content="Jeet Enterprise offers premium electrical products and solutions. Your trusted partner for all electrical needs in West Bengal." />
            <meta name="keywords" content="electrical products, electrical shop, electrical solutions, Jeet Enterprise, West Bengal, Goligram Road" />
            <link rel="canonical" href="https://jeetenterpriseelectric.in/" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://jeetenterpriseelectric.in/" />
            <meta property="og:title" content="Jeet Enterprise - Quality Electrical Solutions" />
            <meta property="og:description" content="Premium electrical products and solutions in West Bengal. Your trusted partner for all electrical needs by Biplab Koner." />
            <meta property="og:image" content="https://jeetenterpriseelectric.in/logo-with-bg.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="Jeet Enterprise" />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content="https://jeetenterpriseelectric.in/" />
            <meta name="twitter:title" content="Jeet Enterprise - Quality Electrical Solutions" />
            <meta name="twitter:description" content="Premium electrical products and solutions in West Bengal. Your trusted partner for all electrical needs." />
            <meta name="twitter:image" content="https://jeetenterpriseelectric.in/logo-with-bg.png" />

            {/* LocalBusiness Structured Data */}
            <script type="application/ld+json">
               {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "LocalBusiness",
                  "@id": "https://jeetenterpriseelectric.in/#business",
                  "name": "Jeet Enterprise",
                  "description": "Premium electrical products and solutions provider in West Bengal",
                  "url": "https://jeetenterpriseelectric.in",
                  "logo": "https://jeetenterpriseelectric.in/logo.png",
                  "image": "https://jeetenterpriseelectric.in/logo-with-bg.png",
                  "telephone": "+919474051466",
                  "email": "contact@jeetenterpriseelectric.in",
                  "priceRange": "$$",
                  "address": {
                     "@type": "PostalAddress",
                     "streetAddress": "Goligram Road, Near NAS Polytechnic College",
                     "addressLocality": "Abhirampur",
                     "addressRegion": "West Bengal",
                     "postalCode": "713144",
                     "addressCountry": "IN"
                  },
                  "geo": {
                     "@type": "GeoCoordinates",
                     "latitude": "23.2599",
                     "longitude": "87.8211"
                  },
                  "openingHoursSpecification": [
                     {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        "opens": "09:00",
                        "closes": "20:00"
                     },
                     {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": "Sunday",
                        "opens": "10:00",
                        "closes": "18:00"
                     }
                  ],
                  "founder": {
                     "@type": "Person",
                     "name": "Biplab Koner"
                  },
                  "areaServed": {
                     "@type": "State",
                     "name": "West Bengal"
                  },
                  "sameAs": [
                     "https://jeetenterpriseelectric.in"
                  ]
               })}
            </script>

            {/* Organization Structured Data */}
            <script type="application/ld+json">
               {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "name": "Jeet Enterprise",
                  "url": "https://jeetenterpriseelectric.in",
                  "logo": "https://jeetenterpriseelectric.in/logo.png",
                  "founder": {
                     "@type": "Person",
                     "name": "Biplab Koner"
                  },
                  "contactPoint": {
                     "@type": "ContactPoint",
                     "telephone": "+919474051466",
                     "contactType": "Customer Service",
                     "areaServed": "IN",
                     "availableLanguage": ["English", "Hindi", "Bengali"]
                  }
               })}
            </script>
         </Helmet>

         {/* Hero Section with Carousel */}
         <Hero />

         {/* Premium Brands Component */}
         <PremiumBrands />

         {/* Find Us Here Component */}
         <FindUsHere />

         {/* Products Grid Component */}
         <ProductsGrid />

         {/* Our Services Component */}
         <OurServices />

         {/* Why Choose Us Section */}
         <section className="py-16">
            <div className="container mx-auto px-4">
               <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                     Why Choose Jeet Enterprise?
                  </h2>
                  <p className="text-muted-foreground text-lg">
                     Your trusted electrical partner in West Bengal
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  {features.map((feature, index) => (
                     <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                           <Check className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-medium">{feature}</span>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Contact CTA Section */}
         <section className="py-16 bg-primary text-white">
            <div className="container mx-auto px-4 text-center">
               <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Ready to Get Started?
               </h2>
               <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
                  Contact us today for expert advice and quality electrical products
               </p>
               <div className="flex gap-4 justify-center flex-wrap">
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                     <a href="tel:+919474051466" className="flex items-center gap-2">
                        <Phone className="h-5 w-5" />
                        Call Now
                     </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                     <Link to="/contact">Visit Our Store</Link>
                  </Button>
               </div>
            </div>
         </section>

         {/* Location Section */}
         <section className="py-16">
            <div className="container mx-auto px-4">
               <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-8 text-center tracking-wide">Jeet Enterprise</h2>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                     <div className="flex flex-col md:flex-row items-center md:items-stretch">
                        {/* Logo Section */}
                        <div className="w-full md:w-2/5 bg-gradient-to-br from-primary/5 to-primary/10 p-8 flex items-center justify-center">
                           <img
                              src="/logo-with-bg.png"
                              alt="Jeet Enterprise Logo"
                              className="w-48 h-48 object-contain"
                           />
                        </div>

                        {/* Content Section */}
                        <div className="w-full md:w-3/5 p-8">
                           {/* <h3 className="text-2xl font-bold text-foreground mb-3">Jeet Enterprise</h3> */}
                           <p className="text-muted-foreground mb-6 leading-relaxed">
                              The only electrical store in Purba Bardhaman, we put customer experience first and offer affordable pricing for house wiring and essential electrical needs.
                           </p>

                           <div className="space-y-3 mb-6">
                              <div>
                                 <p className="text-sm text-muted-foreground">Address</p>
                                 <p className="font-medium text-foreground">Goligram Road, Abhirampur</p>
                                 <p className="font-medium text-foreground">West Bengal 713144</p>
                              </div>

                              <div>
                                 <p className="text-sm text-muted-foreground">Contact</p>
                                 <a href="tel:+919474051466" className="font-medium text-primary hover:underline text-lg">
                                    +91 9474051466
                                 </a>
                              </div>

                              <div>
                                 <p className="text-sm text-muted-foreground">Owner</p>
                                 <p className="font-medium text-foreground">Biplab Koner</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Home;
