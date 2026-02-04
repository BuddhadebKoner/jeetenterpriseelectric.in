import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plug, Lightbulb, Wrench, Zap, Check, Phone } from 'lucide-react';
import Hero from '@/components/Hero';
import LogoMarquee from '@/components/LogoMarquee';
import { services, features } from '@/data/hero';
import { electricalCompanyLogos } from '@/data/companyLogos';

const iconMap = {
   plug: Plug,
   lightbulb: Lightbulb,
   wrench: Wrench,
   zap: Zap
};

const Home = () => {
   return (
      <>
         <Helmet>
            <title>Jeet Enterprise Electric - Quality Electrical Solutions</title>
            <meta name="description" content="Jeet Enterprise Electric offers premium electrical products and solutions. Your trusted partner for all electrical needs in West Bengal." />
            <meta name="keywords" content="electrical products, electrical shop, electrical solutions, Jeet Enterprise Electric, West Bengal, Bahadurpur" />
            <link rel="canonical" href="https://jeetenterpriseelectric.in/" />
         </Helmet>

         {/* Hero Section with Carousel */}
         <Hero />

         {/* Company Logos Section */}
         <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
               <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
                  Authorized Dealer of Premium Brands
               </h2>
               <LogoMarquee logos={electricalCompanyLogos} speed={30} />
            </div>
         </section>

         {/* Services Section */}
         <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
               <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                     Our Services
                  </h2>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                     Comprehensive electrical solutions for homes, businesses, and industrial needs
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {services.map((service) => {
                     const IconComponent = iconMap[service.iconName];
                     return (
                        <Card key={service.id} className="hover:shadow-lg transition-shadow">
                           <CardContent className="p-6 text-center">
                              <div className="flex justify-center mb-4">
                                 <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                    <IconComponent className="w-8 h-8 text-primary" />
                                 </div>
                              </div>
                              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                              <p className="text-muted-foreground">{service.description}</p>
                           </CardContent>
                        </Card>
                     );
                  })}
               </div>
            </div>
         </section>

         {/* Why Choose Us Section */}
         <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4">
               <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                     Why Choose Jeet Enterprise Electric?
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
               <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Get Started?
               </h2>
               <p className="text-xl mb-8 max-w-2xl mx-auto">
                  Contact us today for expert advice and quality electrical products
               </p>
               <div className="flex gap-4 justify-center flex-wrap">
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                     <a href="tel:+919474041466" className="flex items-center gap-2">
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
         <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
               <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Our Store</h2>
                  <div className="bg-secondary p-8 rounded-lg">
                     <p className="text-lg mb-2"><strong>Jeet Enterprise Electric</strong></p>
                     <p className="text-muted-foreground mb-2">Bahadurpur, Abhirampur</p>
                     <p className="text-muted-foreground mb-4">West Bengal 713144</p>
                     <p className="text-lg">
                        <strong>Contact:</strong>{' '}
                        <a href="tel:+919474041466" className="text-primary hover:underline">
                           +91 9474041466
                        </a>
                     </p>
                     <p className="text-muted-foreground mt-2">Owner: Biplab Koner</p>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Home;
