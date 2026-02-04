import React from 'react';

const RentHouse = () => {
   return (
      <div className="min-h-screen bg-white py-12 px-4">
         <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
               <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Affordable House Rentals
               </h1>
               <p className="text-lg text-muted-foreground mb-8">
                  Budget-friendly housing solutions for college students and professional working individuals
               </p>

               <div className="bg-gray-50 rounded-lg p-8 mb-8">
                  <h2 className="text-2xl font-semibold mb-6">Available Properties</h2>
                  {/* Placeholder for property listings - to be designed */}
                  <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
                     <p className="text-muted-foreground mb-4">
                        Property listings will be displayed here
                     </p>
                     <p className="text-sm text-gray-500">
                        This page is currently under development
                     </p>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 rounded-lg p-6">
                     <h3 className="text-lg font-semibold mb-2">For College Students</h3>
                     <p className="text-muted-foreground">
                        Find affordable shared apartments and single rooms near colleges and universities
                     </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                     <h3 className="text-lg font-semibold mb-2">For Professionals</h3>
                     <p className="text-muted-foreground">
                        Comfortable and well-equipped homes for working professionals at minimum rates
                     </p>
                  </div>
               </div>

               <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-400">
                  <p className="text-muted-foreground">
                     <strong>Note:</strong> This is a dedicated page for house rental inquiries.
                     More details and property listings will be added soon.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default RentHouse;
