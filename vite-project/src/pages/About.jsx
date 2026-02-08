import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Award, Users, Zap, Heart, TrendingUp } from 'lucide-react';

const About = () => {
   const values = [
      {
         icon: <Shield className="w-10 h-10 text-primary" />,
         title: 'Quality Assurance',
         description: 'We provide only ISI certified and genuine electrical products from trusted brands.'
      },
      {
         icon: <Award className="w-10 h-10 text-primary" />,
         title: 'Expert Service',
         description: 'Our experienced team offers professional guidance and installation support.'
      },
      {
         icon: <Users className="w-10 h-10 text-primary" />,
         title: 'Customer First',
         description: 'Your satisfaction is our priority. We build lasting relationships with our customers.'
      },
      {
         icon: <Zap className="w-10 h-10 text-primary" />,
         title: 'Competitive Pricing',
         description: 'Best prices in the market without compromising on quality.'
      },
      {
         icon: <Heart className="w-10 h-10 text-primary" />,
         title: 'Trust & Reliability',
         description: 'Established reputation for honest dealings and reliable service.'
      },
      {
         icon: <TrendingUp className="w-10 h-10 text-primary" />,
         title: 'Innovation',
         description: 'We stay updated with the latest electrical technologies and energy-efficient solutions.'
      }
   ];

   return (
      <>
         <Helmet>
            <title>About Us - Jeet Enterprise</title>
            <meta name="description" content="Learn more about Jeet Enterprise, our mission, values, and commitment to providing quality electrical products and services in West Bengal. Founded by Biplab Koner." />
            <meta name="keywords" content="about us, electrical company, electrical business, Jeet Enterprise, Biplab Koner, West Bengal" />
            <link rel="canonical" href="https://jeetenterpriseelectric.in/about" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://jeetenterpriseelectric.in/about" />
            <meta property="og:title" content="About Us - Jeet Enterprise" />
            <meta property="og:description" content="Learn about our mission, values, and commitment to quality electrical solutions in West Bengal." />
            <meta property="og:image" content="https://jeetenterpriseelectric.in/logo-with-bg.png" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content="https://jeetenterpriseelectric.in/about" />
            <meta name="twitter:title" content="About Us - Jeet Enterprise" />
            <meta name="twitter:description" content="Learn about our mission and commitment to quality electrical solutions." />
            <meta name="twitter:image" content="https://jeetenterpriseelectric.in/logo-with-bg.png" />
         </Helmet>

         {/* Hero Section */}
         <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16">
            <div className="container mx-auto px-4">
               <div className="max-w-4xl mx-auto text-center">
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                     About Jeet Enterprise
                  </h1>
                  <p className="text-lg text-muted-foreground">
                     Your trusted partner for quality electrical products and solutions in West Bengal
                  </p>
               </div>
            </div>
         </section>

         {/* Company Logo & Info Section */}
         <section className="py-16">
            <div className="container mx-auto px-4">
               <div className="max-w-5xl mx-auto">
                  <Card className="overflow-hidden shadow-xl">
                     <div className="flex flex-col md:flex-row">
                        {/* Logo Section */}
                        <div className="w-full md:w-2/5 bg-gradient-to-br from-primary/5 to-primary/10 p-12 flex items-center justify-center">
                           <div className="text-center">
                              <img
                                 src="/logo-with-bg.png"
                                 alt="Jeet Enterprise Logo"
                                 className="w-56 h-56 object-contain mx-auto mb-4"
                              />
                              <h2 className="text-2xl font-bold text-foreground">Jeet Enterprise</h2>
                              <p className="text-primary font-semibold mt-2">Since Establishment</p>
                           </div>
                        </div>

                        {/* Company Info */}
                        <div className="w-full md:w-3/5 p-8 md:p-12">
                           <h3 className="text-3xl font-bold mb-6">Who We Are</h3>
                           <div className="space-y-4 text-muted-foreground">
                              <p>
                                 <strong className="text-foreground">Jeet Enterprise</strong> is a leading electrical products supplier based in West Bengal, dedicated to providing high-quality electrical solutions to homes, businesses, and industries.
                              </p>
                              <p>
                                 We specialize in offering a comprehensive range of electrical products including wires, cables, switches, LED lights, safety equipment, and home appliances from premium brands.
                              </p>
                              <p>
                                 Our commitment to quality, competitive pricing, and exceptional customer service has made us a trusted name in the electrical industry.
                              </p>
                           </div>
                        </div>
                     </div>
                  </Card>
               </div>
            </div>
         </section>

         {/* Mission & Vision */}
         <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
               <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="hover:shadow-xl transition-shadow duration-300">
                     <CardHeader>
                        <CardTitle className="text-3xl mb-2">Our Mission</CardTitle>
                     </CardHeader>
                     <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                           To provide our customers with the highest quality electrical products and services at competitive prices, ensuring safety, reliability, and customer satisfaction in every interaction.
                        </p>
                     </CardContent>
                  </Card>

                  <Card className="hover:shadow-xl transition-shadow duration-300">
                     <CardHeader>
                        <CardTitle className="text-3xl mb-2">Our Vision</CardTitle>
                     </CardHeader>
                     <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                           To become the most trusted and preferred electrical solutions provider in West Bengal, known for our quality products, expert guidance, and unwavering commitment to customer excellence.
                        </p>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </section>

         {/* Values Section */}
         <section className="py-16 bg-gradient-to-br from-primary/5 to-background">
            <div className="container mx-auto px-4">
               <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                     Our Core Values
                  </h2>
                  <p className="text-muted-foreground text-lg">
                     What makes Jeet Enterprise stand out
                  </p>
               </div>

               <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {values.map((value, index) => (
                     <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <CardHeader>
                           <div className="mb-4">
                              {value.icon}
                           </div>
                           <CardTitle className="text-xl">{value.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <CardDescription className="text-base">
                              {value.description}
                           </CardDescription>
                        </CardContent>
                     </Card>
                  ))}
               </div>
            </div>
         </section>

         {/* Why Choose Us */}
         <section className="py-16">
            <div className="container mx-auto px-4">
               <div className="max-w-5xl mx-auto">
                  <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Why Choose Jeet Enterprise?
                     </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3 text-primary">Authentic Products</h3>
                        <p className="text-muted-foreground">
                           All our products are sourced directly from authorized distributors, ensuring 100% authenticity and warranty support.
                        </p>
                     </div>

                     <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3 text-primary">Wide Product Range</h3>
                        <p className="text-muted-foreground">
                           From basic wiring to advanced electrical systems, we have everything you need under one roof.
                        </p>
                     </div>

                     <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3 text-primary">Expert Consultation</h3>
                        <p className="text-muted-foreground">
                           Our knowledgeable team provides free technical consultation to help you choose the right products.
                        </p>
                     </div>

                     <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3 text-primary">After-Sales Support</h3>
                        <p className="text-muted-foreground">
                           We stand by our products and provide excellent after-sales support and warranty assistance.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Contact CTA */}
         <section className="py-16 bg-primary text-white">
            <div className="container mx-auto px-4 text-center">
               <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Ready to Work With Us?
               </h2>
               <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
                  Visit our store or contact us today for expert advice and quality electrical products
               </p>
               <div className="flex gap-4 justify-center flex-wrap">
                  <a
                     href="tel:+919474051466"
                     className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary rounded-md hover:bg-white/90 font-semibold text-lg transition-colors"
                  >
                     Call +91 9474051466
                  </a>
                  <a
                     href="/contact"
                     className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-md hover:bg-white hover:text-primary font-semibold text-lg transition-colors"
                  >
                     Visit Our Store
                  </a>
               </div>
            </div>
         </section>
      </>
   );
};

export default About;
