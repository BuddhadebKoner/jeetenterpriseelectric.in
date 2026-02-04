import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Autoplay from 'embla-carousel-autoplay';
import { heroSlides } from '@/data/hero';

const Hero = () => {
   const plugin = React.useRef(
      Autoplay({ delay: 4000, stopOnInteraction: true })
   );

   return (
      <section className="relative">
         <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
         >
            <CarouselContent>
               {heroSlides.map((slide) => (
                  <CarouselItem key={slide.id}>
                     <div className="relative h-[500px] md:h-[600px] flex items-end justify-center overflow-hidden">
                        <div
                           className="absolute inset-0 bg-cover bg-center"
                           style={{ backgroundImage: `url(${slide.image})` }}
                        >
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        </div>
                        <div className="container mx-auto px-4 pb-12 relative z-10">
                           <div className="flex gap-4 justify-center flex-wrap">
                              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                                 <Link to="/contact">Contact Us</Link>
                              </Button>
                              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                                 <Link to="/about">Learn More</Link>
                              </Button>
                           </div>
                        </div>
                     </div>
                  </CarouselItem>
               ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
         </Carousel>
      </section>
   );
};

export default Hero;
