import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Home, Users, MapPin, Phone, IndianRupee, Wifi, Zap, Fan, Sofa } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

const RentHouse = () => {
   const plugin = React.useRef(
      Autoplay({ delay: 3000, stopOnInteraction: false, loop: true })
   );

   // Room images - Unsplash images
   const roomImages = [
      {
         url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2340&auto=format&fit=crop',
         alt: 'Comfortable bedroom with modern furniture',
         title: 'Comfortable Bedrooms'
      },
      {
         url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2340&auto=format&fit=crop',
         alt: 'Clean and modern bathroom',
         title: 'Clean Bathrooms'
      },
      {
         url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2340&auto=format&fit=crop',
         alt: 'Spacious common living area',
         title: 'Common Living Areas'
      },
      {
         url: 'https://images.unsplash.com/photo-1502672260066-6bc35f0a1d57?q=80&w=2340&auto=format&fit=crop',
         alt: 'Well-maintained building exterior',
         title: 'Well-Maintained Building'
      },
      {
         url: 'https://images.unsplash.com/photo-1556912167-f556f1f39faa?q=80&w=2340&auto=format&fit=crop',
         alt: 'Study area with desk and chair',
         title: 'Study-Friendly Spaces'
      }
   ];

   const features = [
      {
         icon: Sofa,
         title: 'Comfortable Rooms',
         description: 'Spacious and well-ventilated rooms'
      },
      {
         icon: Fan,
         title: 'Large Size AC',
         description: 'Air conditioning for comfortable stay'
      },
      {
         icon: Wifi,
         title: 'Wi-Fi Available',
         description: 'High-speed internet connectivity'
      },
      {
         icon: Zap,
         title: '24/7 Electricity',
         description: 'Uninterrupted power supply with backup'
      },
      {
         icon: Home,
         title: 'Clean Bathrooms',
         description: 'Hygienic and well-maintained bathrooms'
      }
   ];

   return (
      <>
         <Helmet>
            <title>Affordable Room Rental in Abhirampur | Jeet Enterprise</title>
            <meta name="description" content="Budget-friendly room rental in Abhirampur. Clean bathrooms, comfortable rooms, large AC, WiFi, 24/7 electricity. Walking distance from NAS Polytechnic College. Perfect for students & professionals." />
            <meta name="keywords" content="room rental Abhirampur, affordable room rental West Bengal, student accommodation, professional housing, room for rent near NAS Polytechnic" />
            <link rel="canonical" href="https://jeetenterpriseelectric.in/rent-house" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://jeetenterpriseelectric.in/rent-house" />
            <meta property="og:title" content="Affordable Room Rental in Abhirampur | Jeet Enterprise" />
            <meta property="og:description" content="Budget-friendly room rental. Clean bathrooms, comfortable rooms, WiFi, 24/7 electricity. Perfect for students & professionals." />
            <meta property="og:image" content="https://jeetenterpriseelectric.in/logo-with-bg.png" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content="https://jeetenterpriseelectric.in/rent-house" />
            <meta name="twitter:title" content="Affordable Room Rental in Abhirampur" />
            <meta name="twitter:description" content="Budget-friendly room rental near NAS Polytechnic College." />
            <meta name="twitter:image" content="https://jeetenterpriseelectric.in/logo-with-bg.png" />
         </Helmet>

         {/* Hero Section */}
         <section className="bg-white py-8 md:py-12 lg:py-16">
            <div className="container mx-auto px-4">
               <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-8 md:mb-12">
                     <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 px-2">
                        Affordable Room Rental in Abhirampur
                     </h1>
                     <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-3 md:mb-4 px-4">
                        Budget-friendly accommodation for college students and working professionals
                     </p>
                     <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-muted-foreground mb-6 md:mb-8 px-4">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm md:text-base text-center">Walking distance from NAS Polytechnic College • Abhirampur, West Bengal 713144</span>
                     </div>
                  </div>

                  {/* Room Facilities */}
                  <div className="mb-8 md:mb-12">
                     <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground text-center mb-6 md:mb-8 px-4">Room Facilities</h2>
                     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
                        {features.map((feature, index) => {
                           const IconComponent = feature.icon;
                           return (
                              <div key={index} className="bg-white border border-border rounded-lg p-3 sm:p-4 md:p-6 text-center hover:shadow-lg transition-shadow">
                                 <div className="flex justify-center mb-2 md:mb-3">
                                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                                 </div>
                                 <h3 className="font-semibold text-foreground text-xs sm:text-sm mb-1">{feature.title}</h3>
                                 <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">{feature.description}</p>
                              </div>
                           );
                        })}
                     </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                     <a
                        href="tel:+919474051466"
                        className="inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-3 md:py-4 bg-primary text-white rounded-lg hover:bg-primary/90 font-semibold text-sm sm:text-base md:text-lg transition-colors shadow-lg"
                     >
                        <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        For College Students
                     </a>
                     <a
                        href="tel:+919474051466"
                        className="inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-3 md:py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white font-semibold text-sm sm:text-base md:text-lg transition-colors"
                     >
                        <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        For Working Professionals
                     </a>
                  </div>
               </div>
            </div>
         </section>

         {/* Room Photos Carousel - Full Width */}
         <section className="relative w-full">
            <div className="w-full">
               <div className="text-center mb-8 md:mb-12 px-4 py-8 md:py-12">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                     Room Photos
                  </h2>
                  <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
                     Clean, comfortable, and affordable rooms
                  </p>
               </div>

               <Carousel
                  plugins={[plugin.current]}
                  className="w-full"
                  opts={{
                     align: "start",
                     loop: true,
                  }}
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}
               >
                  <CarouselContent>
                     {roomImages.map((image, index) => (
                        <CarouselItem key={index}>
                           <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
                              <div
                                 className="absolute inset-0 bg-cover bg-center"
                                 style={{ backgroundImage: `url(${image.url})` }}
                              >
                                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12 z-10">
                                 <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
                                    {image.title}
                                 </h3>
                              </div>
                           </div>
                        </CarouselItem>
                     ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden md:flex left-4 md:left-8 bg-primary hover:bg-primary/90 border-0 text-white" />
                  <CarouselNext className="hidden md:flex right-4 md:right-8 bg-primary hover:bg-primary/90 border-0 text-white" />
               </Carousel>
            </div>
         </section>

         {/* Target Audience */}
         <section className="py-8 md:py-12 lg:py-16 bg-white">
            <div className="container mx-auto px-4">
               <div className="max-w-5xl mx-auto">
                  <div className="text-center mb-8 md:mb-12">
                     <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                        Perfect For
                     </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                     <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <CardHeader className="p-4 sm:p-6">
                           <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                              <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                           </div>
                           <CardTitle className="text-lg sm:text-xl md:text-2xl">For College Students</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 sm:p-6">
                           <CardDescription className="text-sm sm:text-base space-y-2">
                              <p>Perfect accommodation for students of NAS Polytechnic College and nearby institutions.</p>
                              <ul className="mt-4 space-y-2">
                                 <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></span>
                                    <span>Walking distance from NAS Polytechnic College</span>
                                 </li>
                                 <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></span>
                                    <span>Affordable single and shared room options</span>
                                 </li>
                                 <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></span>
                                    <span>Study-friendly environment with Wi-Fi</span>
                                 </li>
                                 <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></span>
                                    <span>Budget-friendly monthly rental plans</span>
                                 </li>
                              </ul>
                           </CardDescription>
                        </CardContent>
                     </Card>

                     <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <CardHeader className="p-4 sm:p-6">
                           <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                              <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                           </div>
                           <CardTitle className="text-lg sm:text-xl md:text-2xl">For Working Professionals</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 sm:p-6">
                           <CardDescription className="text-sm sm:text-base space-y-2">
                              <p>Comfortable housing solutions for professionals.</p>
                              <ul className="mt-4 space-y-2">
                                 <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></span>
                                    <span>Fully furnished and ready to move in</span>
                                 </li>
                                 <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></span>
                                    <span>Modern amenities and facilities</span>
                                 </li>
                                 <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></span>
                                    <span>Peaceful and professional environment</span>
                                 </li>
                                 <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></span>
                                    <span>Flexible rental terms</span>
                                 </li>
                              </ul>
                           </CardDescription>
                        </CardContent>
                     </Card>
                  </div>
               </div>
            </div>
         </section>

         {/* Contact Section */}
         <section className="py-8 md:py-12 lg:py-16 bg-primary text-white">
            <div className="container mx-auto px-4">
               <div className="max-w-4xl mx-auto text-center">
                  <Phone className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white mx-auto mb-4 md:mb-6" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white">
                     Interested in Room Rental?
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-white px-4">
                     Contact us for room viewing, rental inquiries, and booking details
                  </p>

                  <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8 mb-6 md:mb-8 text-left">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                           <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">Contact Details</h3>
                           <div className="space-y-2 sm:space-y-3">
                              <div className="flex items-start gap-2 sm:gap-3">
                                 <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 flex-shrink-0" />
                                 <div>
                                    <p className="text-xs sm:text-sm text-muted-foreground">Call or WhatsApp</p>
                                    <a href="tel:+919474051466" className="text-sm sm:text-base md:text-lg font-bold text-primary hover:underline">
                                       +91 9474051466
                                    </a>
                                 </div>
                              </div>
                              <div className="flex items-start gap-2 sm:gap-3">
                                 <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 flex-shrink-0" />
                                 <div>
                                    <p className="text-xs sm:text-sm text-muted-foreground">Owner</p>
                                    <p className="text-sm sm:text-base md:text-lg font-bold text-foreground">Biplab Koner</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div>
                           <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">Location Address</h3>
                           <div className="flex items-start gap-2 sm:gap-3">
                              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 flex-shrink-0" />
                              <div>
                                 <p className="text-xs sm:text-sm text-muted-foreground">Room Rental Location</p>
                                 <p className="text-sm sm:text-base font-semibold text-foreground">Bahadurpur, Abhirampur</p>
                                 <p className="text-sm sm:text-base font-semibold text-foreground">Purba Bardhaman, West Bengal 713144</p>
                                 <p className="text-xs sm:text-sm text-primary mt-1 sm:mt-2 font-medium">Walking distance from NAS Polytechnic College</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                     <a
                        href="tel:+919474051466"
                        className="inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-white text-primary rounded-md hover:bg-white/90 font-semibold text-sm sm:text-base md:text-lg transition-colors"
                     >
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Call Now
                     </a>
                     <a
                        href="https://wa.me/919474051466?text=Hi, I'm interested in room rental in Abhirampur"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 border-2 border-white text-white rounded-md hover:bg-white hover:text-primary font-semibold text-sm sm:text-base md:text-lg transition-colors"
                     >
                        WhatsApp Inquiry
                     </a>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default RentHouse;
