import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
   return (
      <footer className="bg-white border-t border-border py-12 mt-auto">
         <div className="container mx-auto px-4">
            {/* Main Footer Content - Premium Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
               {/* Company Info Section */}
               <div>
                  <img
                     className="h-14 w-auto object-contain mb-3"
                     src="/logo.png"
                     alt="Jeet Enterprise Logo"
                  />
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Jeet Enterprise</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                     Your trusted electrical partner in Purba Bardhaman. We provide quality products and
                     affordable solutions for all your electrical needs.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                     <MapPin className="w-4 h-4 text-primary" />
                     <span>Serving West Bengal since inception</span>
                  </div>
               </div>

               {/* Quick Links Section */}
               <div>
                  <h5 className="font-semibold text-foreground mb-4">Quick Links</h5>
                  <ul className="space-y-3">
                     <li>
                        <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group">
                           <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                           Home
                        </Link>
                     </li>
                     <li>
                        <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group">
                           <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                           About Us
                        </Link>
                     </li>
                     <li>
                        <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group">
                           <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                           Products
                        </Link>
                     </li>
                     <li>
                        <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group">
                           <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                           Contact
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Products & Services Section */}
               <div>
                  <h5 className="font-semibold text-foreground mb-4">Our Services</h5>
                  <ul className="space-y-3">
                     <li>
                        <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group">
                           <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                           Electrical Supplies
                        </Link>
                     </li>
                     <li>
                        <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group">
                           <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                           House Wiring
                        </Link>
                     </li>
                     <li>
                        <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group">
                           <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                           LED Solutions
                        </Link>
                     </li>
                     <li>
                        <Link to="/dissolve" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group">
                           <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                           Dissolve Services
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Contact Section */}
               <div>
                  <h5 className="font-semibold text-foreground mb-4">Contact Info</h5>
                  <ul className="space-y-4">
                     <li className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div className="text-sm">
                           <p className="text-muted-foreground">Goligram Road, Abhirampur</p>
                           <p className="text-muted-foreground">West Bengal 713144</p>
                        </div>
                     </li>
                     <li className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                        <a href="tel:+919474051466" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                           +91 9474051466
                        </a>
                     </li>
                     <li className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Owner:</strong> Biplab Koner
                     </li>
                  </ul>
               </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border mb-8"></div>

            {/* Bottom Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
               <div className="text-sm text-muted-foreground">
                  <p>
                     © {new Date().getFullYear()} <span className="text-foreground font-semibold">Jeet Enterprise</span>. All rights reserved.
                  </p>
               </div>
               <div className="flex gap-6 text-sm">
                  <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                     Privacy Policy
                  </Link>
                  <span className="text-border">|</span>
                  <Link to="/terms-conditions" className="text-muted-foreground hover:text-primary transition-colors">
                     Terms & Conditions
                  </Link>
               </div>
            </div>


         </div>
      </footer>
   );
};

export default Footer;
