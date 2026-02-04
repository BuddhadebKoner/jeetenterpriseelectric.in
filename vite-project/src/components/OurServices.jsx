import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Plug, Lightbulb, Wrench, Zap } from 'lucide-react';
import { services } from '@/data/hero';

const iconMap = {
   plug: Plug,
   lightbulb: Lightbulb,
   wrench: Wrench,
   zap: Zap
};

const OurServices = () => {
   const navigate = useNavigate();

   const handleWhatsAppClick = (serviceTitle) => {
      const message = `Hello! I'm interested in: ${serviceTitle}`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappNumber = "919474051466"; // Replace with your WhatsApp number
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
   };

   const handleNavigate = (route) => {
      navigate(route);
   };

   return (
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
               {services.map((service) => {
                  const IconComponent = iconMap[service.iconName];
                  return (
                     <Card key={service.id} className="hover:shadow-lg transition-shadow flex flex-col h-full">
                        <CardContent className="p-6 text-center flex flex-col flex-1">
                           <div className="flex justify-center mb-4">
                              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                 <IconComponent className="w-8 h-8 text-primary" />
                              </div>
                           </div>
                           <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                           <p className="text-muted-foreground mb-6 flex-1">{service.description}</p>
                           <button
                              onClick={() => {
                                 if (service.action === "whatsapp") {
                                    handleWhatsAppClick(service.title);
                                 } else if (service.action === "navigate") {
                                    handleNavigate(service.route);
                                 }
                              }}
                              className="mt-auto bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                           >
                              {service.buttonText}
                           </button>
                        </CardContent>
                     </Card>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default OurServices;
