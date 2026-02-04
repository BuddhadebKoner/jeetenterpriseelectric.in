import React from 'react';
import LogoMarquee from './LogoMarquee';
import { electricalCompanyLogos } from '@/data/companyLogos';

const PremiumBrands = () => {
   return (
      <section className="py-12 bg-white">
         <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
               Premium Brands
            </h2>
            <LogoMarquee logos={electricalCompanyLogos} speed={30} />
         </div>
      </section>
   );
};

export default PremiumBrands;
