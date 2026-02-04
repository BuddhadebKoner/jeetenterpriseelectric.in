import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
   return (
      <>
         {/* Top Bar */}
         <div className="bg-primary text-white py-2">
            <div className="container mx-auto px-4">
               <div className="flex items-center justify-center text-sm gap-10">
                  <div className="font-semibold">
                     Biplab Koner
                  </div>
                  <div className="flex items-center gap-2">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                     </svg>
                     <a href="tel:+919474041466" className="hover:underline text-white">
                        +91 9474041466
                     </a>
                  </div>
               </div>
            </div>
         </div>

         {/* Main Navigation */}
         <nav className="bg-white border-b border-border shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4">
               {/* Logo Row */}
               <div className="py-4 text-center border-b border-border">
                  <Link
                     to="/"
                     className="text-3xl font-bold text-primary hover:no-underline inline-block"
                  >
                     Jeet Enterprise
                  </Link>
               </div>

               {/* Navigation Links Row */}
               <div className="py-3">
                  <ul className="flex gap-8 justify-center">
                     <li>
                        <NavLink
                           to="/"
                           end
                           className={({ isActive }) =>
                              isActive
                                 ? "text-primary font-semibold"
                                 : "text-foreground hover:text-primary"
                           }
                        >
                           Home
                        </NavLink>
                     </li>
                     <li>
                        <NavLink
                           to="/about"
                           className={({ isActive }) =>
                              isActive
                                 ? "text-primary font-semibold"
                                 : "text-foreground hover:text-primary"
                           }
                        >
                           About
                        </NavLink>
                     </li>
                     <li>
                        <NavLink
                           to="/contact"
                           className={({ isActive }) =>
                              isActive
                                 ? "text-primary font-semibold"
                                 : "text-foreground hover:text-primary"
                           }
                        >
                           Contact
                        </NavLink>
                     </li>
                     <li>
                        <NavLink
                           to="/support"
                           className={({ isActive }) =>
                              isActive
                                 ? "text-primary font-semibold"
                                 : "text-foreground hover:text-primary"
                           }
                        >
                           Support
                        </NavLink>
                     </li>
                     <li>
                        <NavLink
                           to="/dissolve"
                           className={({ isActive }) =>
                              isActive
                                 ? "text-primary font-semibold"
                                 : "text-foreground hover:text-primary"
                           }
                        >
                           Dissolve
                        </NavLink>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </>
   );
};

export default Navbar;
