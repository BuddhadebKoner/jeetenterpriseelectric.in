import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
   return (
      <footer className="bg-secondary border-t border-border py-12 mt-auto">
         <div className="container mx-auto px-4">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
               {/* About Section */}
               <div>
                  <h5 className="font-semibold text-foreground mb-4">About Us</h5>
                  <ul className="space-y-2">
                     <li>
                        <Link to="/about" className="text-muted-foreground hover:text-primary text-sm">
                           Our Story
                        </Link>
                     </li>
                     <li>
                        <Link to="/about" className="text-muted-foreground hover:text-primary text-sm">
                           Infrastructure
                        </Link>
                     </li>
                     <li>
                        <Link to="/support" className="text-muted-foreground hover:text-primary text-sm">
                           Certifications
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Products Section */}
               <div>
                  <h5 className="font-semibold text-foreground mb-4">Products</h5>
                  <ul className="space-y-2">
                     <li>
                        <a href="#" className="text-muted-foreground hover:text-primary text-sm">
                           Electrical Supplies
                        </a>
                     </li>
                     <li>
                        <a href="#" className="text-muted-foreground hover:text-primary text-sm">
                           Wires & Cables
                        </a>
                     </li>
                     <li>
                        <a href="#" className="text-muted-foreground hover:text-primary text-sm">
                           LED Products
                        </a>
                     </li>
                     <li>
                        <a href="#" className="text-muted-foreground hover:text-primary text-sm">
                           Switches & Sockets
                        </a>
                     </li>
                  </ul>
               </div>

               {/* Support Section */}
               <div>
                  <h5 className="font-semibold text-foreground mb-4">Support</h5>
                  <ul className="space-y-2">
                     <li>
                        <Link to="/contact" className="text-muted-foreground hover:text-primary text-sm">
                           Customer Care
                        </Link>
                     </li>
                     <li>
                        <Link to="/support" className="text-muted-foreground hover:text-primary text-sm">
                           Help Center
                        </Link>
                     </li>
                     <li>
                        <Link to="/dissolve" className="text-muted-foreground hover:text-primary text-sm">
                           Dissolve
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Contact Section */}
               <div>
                  <h5 className="font-semibold text-foreground mb-4">Contact Info</h5>
                  <ul className="space-y-2 text-sm">
                     <li className="text-muted-foreground">
                        <strong className="text-foreground">Address:</strong><br />
                        Bahadurpur, Abhirampur<br />
                        West Bengal 713144
                     </li>
                     <li>
                        <strong className="text-foreground">Phone:</strong><br />
                        <a href="tel:+919474041466" className="text-primary hover:underline">
                           +91 9474041466
                        </a>
                     </li>
                     <li>
                        <strong className="text-foreground">Owner:</strong><br />
                        <span className="text-muted-foreground">Biplab Koner</span>
                     </li>
                  </ul>
               </div>
            </div>

            {/* More Ways to Shop */}
            <div className="border-t border-border pt-6 mb-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                     <p className="text-sm text-muted-foreground">
                        More ways to shop: Visit our store, call{' '}
                        <a href="tel:+919474041466" className="text-primary hover:underline font-semibold">
                           +91 9474041466
                        </a>
                        , or find us in Bahadurpur.
                     </p>
                  </div>
                  <div className="text-right">
                     <p className="text-sm text-muted-foreground font-semibold">
                        Serving West Bengal with Quality
                     </p>
                  </div>
               </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-border pt-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                  <div>
                     <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">© 2026 Jeet Enterprise Electric. All rights reserved.</span>
                        {' '}
                        <Link to="/" className="hover:text-primary">Privacy Policy</Link>
                        {' | '}
                        <Link to="/" className="hover:text-primary">Terms of Use</Link>
                     </p>
                  </div>
                  <div className="text-right">
                     <p className="text-sm text-muted-foreground">
                        Electrical Supply Store in West Bengal
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
