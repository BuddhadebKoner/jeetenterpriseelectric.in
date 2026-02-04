import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
   return (
      <>
         {/* Top Bar */}
         <div className="bg-primary text-white py-2">
            <div className="container mx-auto px-4">
               <div className="flex items-center justify-center text-sm gap-5">
                  <div className="font-semibold">
                     Biplab Koner
                  </div>
                  <div className="flex items-center gap-2">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                     </svg>
                     <a href="tel:+919474051466" className="hover:underline text-white">
                        +91 9474051466
                     </a>
                  </div>
               </div>
            </div>
         </div>

         {/* Main Navigation */}
         <nav className="bg-white border-b border-border shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4">
               {/* Navigation Links Row */}
               <div className="py-3 flex gap-6 md:gap-8 justify-center items-center">
                  <NavLink
                     to="/"
                     end
                     className="flex items-center hover:opacity-80 transition-opacity"
                  >
                     <img
                        className="h-14 w-auto object-contain"
                        src="/logo.png"
                        alt="Jeet Enterprise Electric Logo"
                     />
                  </NavLink>

                  <NavLink
                     to="/about"
                     className={({ isActive }) =>
                        `flex items-center h-14 transition-colors ${isActive
                           ? "text-primary font-semibold"
                           : "text-foreground hover:text-primary"
                        }`
                     }
                  >
                     About
                  </NavLink>

                  <NavLink
                     to="/contact"
                     className={({ isActive }) =>
                        `flex items-center h-14 transition-colors ${isActive
                           ? "text-primary font-semibold"
                           : "text-foreground hover:text-primary"
                        }`
                     }
                  >
                     Contact
                  </NavLink>

                  <NavLink
                     to="/support"
                     className={({ isActive }) =>
                        `flex items-center h-14 transition-colors ${isActive
                           ? "text-primary font-semibold"
                           : "text-foreground hover:text-primary"
                        }`
                     }
                  >
                     Support
                  </NavLink>

                  <NavLink
                     to="/dissolve"
                     className={({ isActive }) =>
                        `flex items-center h-14 transition-colors ${isActive
                           ? "text-primary font-semibold"
                           : "text-foreground hover:text-primary"
                        }`
                     }
                  >
                     Dissolve
                  </NavLink>
               </div>
            </div>
         </nav>
      </>
   );
};

export default Navbar;
