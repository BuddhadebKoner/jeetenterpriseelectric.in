import React from 'react';
import { productsGrid } from '@/data/productsGrid';

const ProductsGrid = () => {
   return (
      <section className="py-12 md:py-20 bg-white">
         <div className="container mx-auto px-4">
            {/* Grid Layout - Masonry Style like Gold Medal */}
            <div className="relative w-full">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 max-w-7xl mx-auto">
                  {productsGrid.map((product, index) => (
                     <div
                        key={product.id}
                        className="group relative overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-gray-50"
                     >
                        {/* Alternate Layout: Image on left, Text on right for certain items */}
                        <div className="flex flex-col h-full min-h-64">
                           {product.hasImage ? (
                              <>
                                 {/* Image Container */}
                                 <div className="relative h-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                                    <img
                                       src={product.image}
                                       alt={product.title}
                                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                 </div>
                              </>
                           ) : (
                              <>
                                 {/* Text Only Container */}
                                 <div className="w-full h-full flex flex-col items-center justify-center p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white text-center">
                                    <h3 className="text-lg md:text-2xl font-bold text-foreground mb-3 group-hover:text-red-600 transition-colors">
                                       {product.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                       {product.category}
                                    </p>
                                 </div>
                              </>
                           )}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default ProductsGrid;
