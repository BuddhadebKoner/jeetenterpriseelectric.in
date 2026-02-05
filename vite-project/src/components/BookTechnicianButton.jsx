import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Wrench } from 'lucide-react';

const BookTechnicianButton = () => {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         // Show button after scrolling 200px down
         if (window.scrollY > 200) {
            setIsVisible(true);
         } else {
            setIsVisible(false);
         }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <Link
         to="/contact"
         className={`fixed bottom-4 left-4 right-4 mx-auto max-w-xs
            md:left-1/2 md:-translate-x-1/2 md:right-auto md:max-w-fit md:bottom-6
            flex items-center justify-center gap-2 
            bg-primary text-white 
            px-6 py-3.5 md:px-8 md:py-3
            rounded-xl md:rounded-full
            border-2 border-white/20
            shadow-xl hover:shadow-2xl
            hover:bg-primary/90 hover:scale-[1.02]
            transition-all duration-300 
            z-40 
            font-semibold text-sm md:text-base
            whitespace-nowrap
            ${isVisible
               ? 'translate-y-0 opacity-100'
               : 'translate-y-32 opacity-0 pointer-events-none'
            }`}
      >
         <Wrench className="h-5 w-5 flex-shrink-0" />
         <span>Book a Technician</span>
      </Link>
   );
};

export default BookTechnicianButton;
