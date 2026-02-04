import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Autoplay from 'embla-carousel-autoplay';
import { heroSlides } from '@/data/hero';

const Hero = () => {
   const plugin = React.useRef(
      Autoplay({ delay: 3000, stopOnInteraction: false, loop: true, jumpToMiddleOfSlide: true })
   );
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
      <section className="relative">
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
               {heroSlides.map((slide) => (
                  <CarouselItem key={slide.id}>
                     <div className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
                        <div
                           className="absolute inset-0 bg-cover bg-center"
                           style={{ backgroundImage: `url(${slide.image})` }}
                        >
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        </div>
                        <div className="container mx-auto px-4 relative z-10 text-center">
                           <div className="text-center mb-8">
                              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
                                 {slide.title}
                              </h1>
                              <p className="text-xl md:text-2xl text-white drop-shadow-md">
                                 {slide.subtitle}
                              </p>
                           </div>
                           <div className="flex gap-4 justify-center flex-wrap">
                              <Button
                                 size="lg"
                                 className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
                                 onClick={() => {
                                    if (slide.action === "whatsapp") {
                                       handleWhatsAppClick(slide.title);
                                    } else if (slide.action === "navigate") {
                                       handleNavigate(slide.route);
                                    }
                                 }}
                              >
                                 {slide.buttonText}
                              </Button>
                           </div>
                        </div>
                     </div>
                  </CarouselItem>
               ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex left-4 md:left-8 bg-red-600 hover:bg-red-700 border-0 text-white" />
            <CarouselNext className="hidden md:flex right-4 md:right-8 bg-red-600 hover:bg-red-700 border-0 text-white" />
         </Carousel>
      </section>
   );
};

export default Hero;
