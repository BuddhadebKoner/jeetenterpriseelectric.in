import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';
import BiplabKonerImage from '@/assets/BiplabKoner.png';

const FindUsHere = () => {
   return (
      <section className="py-16 md:py-20 bg-white">
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Find Us Here
               </h2>
               <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Visit our store at Goligram Road, Abhirampur, West Bengal 713144
               </p>
            </div>

            <div className="max-w-7xl mx-auto">
               {/* Side by Side Layout */}
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  {/* Map Container - Takes 2 columns on large screens */}
                  <div className="lg:col-span-2 order-1">
                     <div className="relative w-full overflow-hidden rounded-xl shadow-lg" style={{ paddingBottom: '75%', minHeight: '400px' }}>
                        <iframe
                           src="https://www.google.com/maps/embed?pb=!4v1770237438669!6m8!1m7!1shYQFr1TMJtUiV9OLbUa4QQ!2m2!1d23.43782389600117!2d87.64263436624991!3f60.792066479476695!4f-2.8159022756295826!5f0.7820865974627469"
                           className="absolute top-0 left-0 w-full h-full"
                           style={{ border: 0 }}
                           allowFullScreen=""
                           loading="lazy"
                           referrerPolicy="no-referrer-when-downgrade"
                           title="Jeet Enterprise Location"
                        />
                     </div>
                  </div>

                  {/* Info Cards - Takes 1 column on large screens */}
                  <div className="lg:col-span-1 order-2 flex flex-col gap-6">
                     {/* Address Card */}
                     <Card className="group hover:shadow-xl transition-all duration-300 border hover:border-primary/30">
                        <CardContent className="p-6">
                           <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                 <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                 </svg>
                              </div>
                              <div className="flex-1">
                                 <h3 className="text-lg font-bold mb-2 text-foreground">Address</h3>
                                 <p className="text-sm text-muted-foreground leading-relaxed">
                                    Goligram Road, Abhirampur<br />
                                    West Bengal 713144
                                 </p>
                              </div>
                           </div>
                        </CardContent>
                     </Card>

                     {/* Call Us Card */}
                     <Card className="group hover:shadow-xl transition-all duration-300 border hover:border-primary/30">
                        <CardContent className="p-6">
                           <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                 <Phone className="w-6 h-6 text-primary" />
                              </div>
                              <div className="flex-1">
                                 <h3 className="text-lg font-bold mb-2 text-foreground">Call Us</h3>
                                 <a
                                    href="tel:+919474051466"
                                    className="text-sm text-primary hover:text-primary/80 font-semibold transition-colors block"
                                 >
                                    +91 9474051466
                                 </a>
                                 <p className="text-xs text-muted-foreground mt-1">Available 9 AM - 8 PM</p>
                              </div>
                           </div>
                        </CardContent>
                     </Card>

                     {/* Owner Card */}
                     <Card className="group hover:shadow-xl transition-all duration-300 border hover:border-primary/30">
                        <CardContent className="p-6">
                           <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                 <img
                                    src={BiplabKonerImage}
                                    alt="Biplab Koner"
                                    className="w-12 h-12 rounded-full object-cover"
                                    onError={(e) => {
                                       e.target.style.display = 'none';
                                       e.target.nextSibling.style.display = 'block';
                                    }}
                                 />
                                 <svg
                                    className="w-6 h-6 text-primary"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    style={{ display: 'none' }}
                                 >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                 </svg>
                              </div>
                              <div className="flex-1">
                                 <h3 className="text-lg font-bold mb-2 text-foreground">Owner</h3>
                                 <p className="text-sm text-muted-foreground font-semibold">Biplab Koner</p>
                                 <p className="text-xs text-muted-foreground mt-1">Proprietor</p>
                              </div>
                           </div>
                        </CardContent>
                     </Card>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default FindUsHere;
