import React from 'react';

const LogoMarquee = ({ logos, speed = 30, className = '' }) => {
   return (
      <>
         <style>{`
            .marquee-inner {
               animation: marqueeScroll linear infinite;
            }

            @keyframes marqueeScroll {
               0% {
                  transform: translateX(0%);
               }
               100% {
                  transform: translateX(-50%);
               }
            }
         `}</style>

         <div className={`overflow-hidden w-full relative select-none ${className}`}>
            <div className="absolute left-0 top-0 h-full w-20 md:w-32 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

            <div
               className="marquee-inner flex will-change-transform min-w-[200%]"
               style={{ animationDuration: `${speed}s` }}
            >
               <div className="flex items-center">
                  {[...logos, ...logos].map((logo, index) => (
                     <div
                        key={index}
                        className="flex-shrink-0 mx-8 md:mx-12"
                     >
                        <img
                           src={logo.src}
                           alt={logo.name}
                           className="h-12 md:h-16 w-auto object-contain"
                           draggable={false}
                        />
                     </div>
                  ))}
               </div>
            </div>

            <div className="absolute right-0 top-0 h-full w-20 md:w-32 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
         </div>
      </>
   );
};

export default LogoMarquee;
