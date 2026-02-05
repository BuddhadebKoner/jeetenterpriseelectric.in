import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Cable, Lightbulb, PlugZap, Shield, Fan } from 'lucide-react';

const Products = () => {
   const productCategories = [
      {
         icon: <Cable className="w-12 h-12 text-primary" />,
         title: 'Wires & Cables',
         description: 'Premium quality electrical wires and cables for residential and commercial use. ISI certified products from trusted brands.',
         items: ['House Wiring Cables', 'Flexible Cables', 'Armoured Cables', 'Electric Wires']
      },
      {
         icon: <PlugZap className="w-12 h-12 text-primary" />,
         title: 'Switches & Sockets',
         description: 'Modern and durable switches, sockets, and modular plates. Available in various designs and finishes.',
         items: ['Modular Switches', 'Power Sockets', 'MCB Boxes', 'Switch Boards']
      },
      {
         icon: <Lightbulb className="w-12 h-12 text-primary" />,
         title: 'LED Products',
         description: 'Energy-efficient LED lights, bulbs, and fixtures. Save electricity with our range of LED solutions.',
         items: ['LED Bulbs', 'LED Tube Lights', 'Panel Lights', 'Street Lights']
      },
      {
         icon: <Shield className="w-12 h-12 text-primary" />,
         title: 'Safety Equipment',
         description: 'Essential electrical safety products including MCBs, ELCBs, and earthing materials.',
         items: ['MCBs', 'ELCBs', 'Distribution Boards', 'Earthing Strips']
      },
      {
         icon: <Fan className="w-12 h-12 text-primary" />,
         title: 'Home Appliances',
         description: 'Quality ceiling fans, exhaust fans, and other electrical home appliances from premium brands.',
         items: ['Ceiling Fans', 'Exhaust Fans', 'Table Fans', 'Wall Fans']
      },
      {
         icon: <Zap className="w-12 h-12 text-primary" />,
         title: 'Electrical Accessories',
         description: 'Complete range of electrical accessories and installation materials for all your needs.',
         items: ['Junction Boxes', 'Conduit Pipes', 'Tape & Accessories', 'Tools & Equipment']
      }
   ];

   return (
      <>
         <Helmet>
            <title>Products - Jeet Enterprise</title>
            <meta name="description" content="Browse our comprehensive range of electrical products including wires, cables, switches, LED lights, and safety equipment." />
            <meta name="keywords" content="electrical products, wires, cables, LED lights, switches, sockets, MCB, electrical accessories" />
            <link rel="canonical" href="https://jeetenterpriseelectric.in/products" />
         </Helmet>

         {/* Hero Section */}
         <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16">
            <div className="container mx-auto px-4">
               <div className="max-w-3xl mx-auto text-center">
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                     Our Products
                  </h1>
                  <p className="text-lg text-muted-foreground">
                     Discover our comprehensive range of quality electrical products and solutions for your home and business
                  </p>
               </div>
            </div>
         </section>

         {/* Products Grid */}
         <section className="py-16">
            <div className="container mx-auto px-4">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {productCategories.map((category, index) => (
                     <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                           <div className="mb-4">
                              {category.icon}
                           </div>
                           <CardTitle className="text-2xl mb-2">{category.title}</CardTitle>
                           <CardDescription className="text-base">
                              {category.description}
                           </CardDescription>
                        </CardHeader>
                        <CardContent>
                           <ul className="space-y-2">
                              {category.items.map((item, idx) => (
                                 <li key={idx} className="flex items-center text-sm text-muted-foreground">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                                    {item}
                                 </li>
                              ))}
                           </ul>
                        </CardContent>
                     </Card>
                  ))}
               </div>
            </div>
         </section>

         {/* CTA Section */}
         <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4 text-center">
               <h2 className="text-3xl font-bold mb-4">Need Help Choosing Products?</h2>
               <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Our expert team is here to help you select the right electrical products for your project. Contact us for personalized recommendations.
               </p>
               <div className="flex gap-4 justify-center flex-wrap">
                  <a
                     href="tel:+919474051466"
                     className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 font-medium"
                  >
                     Call +91 9474051466
                  </a>
                  <a
                     href="/contact"
                     className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-white font-medium"
                  >
                     Visit Our Store
                  </a>
               </div>
            </div>
         </section>
      </>
   );
};

export default Products;
