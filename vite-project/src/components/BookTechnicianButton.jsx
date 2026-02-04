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
         className={`fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 z-40 font-semibold ${isVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-32 opacity-0 pointer-events-none'
            }`}
      >
         <Wrench className="h-5 w-5" />
         Book a Technician
      </Link>
   );
};

export default BookTechnicianButton;
