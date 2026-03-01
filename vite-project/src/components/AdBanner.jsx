import React, { useEffect, useRef } from 'react';

/**
 * Google AdSense Ad Banner Component
 * 
 * @param {Object} props
 * @param {'horizontal'|'vertical'|'square'|'leaderboard'|'banner'} props.variant - Ad layout variant
 * @param {string} props.slot - AdSense ad slot ID (required for real ads)
 * @param {string} props.className - Additional CSS classes
 */
const AdBanner = ({ variant = 'horizontal', slot = '', className = '' }) => {
   const adRef = useRef(null);
   const isAdPushed = useRef(false);

   useEffect(() => {
      // Only push ad if slot is provided and not already pushed
      if (slot && !isAdPushed.current && adRef.current) {
         try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            isAdPushed.current = true;
         } catch (e) {
            console.error('AdSense error:', e);
         }
      }
   }, [slot]);

   // Variant-based sizing
   const variantStyles = {
      horizontal: 'min-h-[90px] md:min-h-[90px]',      // 728x90 Leaderboard
      leaderboard: 'min-h-[90px] md:min-h-[250px]',     // Large leaderboard / billboard
      banner: 'min-h-[60px] md:min-h-[90px]',           // Standard banner
      square: 'min-h-[250px] max-w-[336px] mx-auto',    // 300x250 / 336x280
      vertical: 'min-h-[600px] max-w-[300px]',          // 300x600 Half-page
   };

   const adFormats = {
      horizontal: 'horizontal',
      leaderboard: 'auto',
      banner: 'horizontal',
      square: 'rectangle',
      vertical: 'vertical',
   };

   return (
      <div className={`w-full overflow-hidden ${className}`}>
         <div className={`bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center ${variantStyles[variant]}`}>
            {slot ? (
               // Real AdSense ad unit
               <ins
                  ref={adRef}
                  className="adsbygoogle"
                  style={{ display: 'block', width: '100%', height: '100%' }}
                  data-ad-client="ca-pub-7019770614779391"
                  data-ad-slot={slot}
                  data-ad-format={adFormats[variant]}
                  data-full-width-responsive="true"
               />
            ) : (
               // Placeholder when no slot is configured yet
               <div className="text-center p-4 w-full">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Advertisement</p>
                  <div className="mt-2 border-2 border-dashed border-gray-300 rounded-md p-4 flex items-center justify-center">
                     <span className="text-sm text-gray-400">Ad Space — Configure slot ID in AdBanner</span>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

/**
 * Full-width ad section wrapper for placing between page sections
 */
export const AdSection = ({ variant = 'horizontal', slot = '', className = '' }) => {
   return (
      <section className={`py-4 md:py-6 ${className}`}>
         <div className="container mx-auto px-4">
            <AdBanner variant={variant} slot={slot} />
         </div>
      </section>
   );
};

export default AdBanner;
