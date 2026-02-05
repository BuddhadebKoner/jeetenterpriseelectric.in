import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsConditions = () => {
   return (
      <>
         <Helmet>
            <title>Terms and Conditions - Jeet Enterprise</title>
            <meta name="description" content="Terms and Conditions for using Jeet Enterprise services. Please read these terms carefully before making a purchase." />
            <link rel="canonical" href="https://jeetenterpriseelectric.in/terms-conditions" />
         </Helmet>

         <div className="min-h-screen bg-gray-50 py-16">
            <div className="container mx-auto px-4">
               <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
                  <h1 className="text-4xl font-bold text-foreground mb-6">Terms and Conditions</h1>
                  <p className="text-muted-foreground mb-8">
                     <strong>Last Updated:</strong> February 5, 2026
                  </p>

                  <div className="space-y-8 text-muted-foreground">
                     <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                        <p className="leading-relaxed mb-3">
                           By visiting our physical store, purchasing products, or using our services, you agree to be bound by these Terms and
                           Conditions. If you do not agree with any part of these terms, please do not use our services.
                        </p>
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                           <p className="font-semibold text-foreground mb-2">⚠️ Important Business Model Notice:</p>
                           <p className="text-sm">
                              <strong>Jeet Enterprise is exclusively an offline business.</strong> We do not provide online purchase services or accept
                              online payments. Our website serves as an informational resource only. All transactions, purchases, and payments must be
                              conducted in-person at our physical store located in Goligram Road, Abhirampur, West Bengal. Please visit us or contact
                              us at +91 9474051466 for product information, pricing, and purchases.
                           </p>
                        </div>
                     </section>

                     <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">2. Products and Services</h2>
                        <p className="leading-relaxed mb-3">
                           Jeet Enterprise provides quality electrical products and related services including:
                        </p>
                        <ul className="space-y-2 ml-6 list-disc">
                           <li>Sale of electrical supplies, wires, cables, switches, and accessories</li>
                           <li>House wiring and electrical installation services</li>
                           <li>Technical consultation and support</li>
                           <li>Product recommendations and guidance</li>
                        </ul>
                        <p className="leading-relaxed mt-3">
                           All products are sourced from reputable manufacturers and are subject to their respective warranties and specifications.
                        </p>
                     </section>

                     <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">3. Pricing and Payment</h2>
                        <p className="leading-relaxed mb-3 font-semibold text-foreground">
                           All payments must be made in-person at our physical store. We do not accept online payments.
                        </p>
                        <ul className="space-y-3 ml-6 list-disc">
                           <li>All prices are in Indian Rupees (INR) and are subject to change without prior notice.</li>
                           <li>We strive to offer the most competitive and affordable prices in Purba Bardhaman.</li>
                           <li>Payment can be made via cash, UPI, bank transfer, or other accepted methods <strong>at our physical store only</strong>.</li>
                           <li>Full payment is required at the time of in-store purchase unless otherwise agreed upon.</li>
                           <li>Proper invoices will be provided for all in-store transactions for your records.</li>
                           <li>For current pricing and payment options, please visit our store or contact us directly.</li>
                        </ul>
                     </section>

                     <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">4. Product Quality and Warranty</h2>
                        <p className="leading-relaxed mb-3">
                           We are committed to providing authentic, ISI-certified, and high-quality electrical products:
                        </p>
                        <ul className="space-y-2 ml-6 list-disc">
                           <li>All products come with manufacturer's warranty as specified</li>
                           <li>Warranty terms vary by product and manufacturer</li>
                           <li>We will assist with warranty claims for defective products</li>
                           <li>Products must be inspected at the time of purchase</li>
                           <li>No warranty claims will be entertained for damaged products due to misuse or improper installation</li>
                        </ul>
                     </section>

                     <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">5. Returns and Exchanges</h2>
                        <p className="leading-relaxed mb-3">Our in-store return and exchange policy:</p>
                        <ul className="space-y-2 ml-6 list-disc">
                           <li>Products can be exchanged within 7 days of in-store purchase if they are unused and in original packaging</li>
                           <li>Returns and exchanges must be conducted at our physical store with the original invoice</li>
                           <li>Manufacturing defects will be replaced or refunded as per manufacturer's policy</li>
                           <li>Custom orders or cut cables/wires are non-returnable</li>
                           <li>Original purchase invoice must be presented for returns or exchanges</li>
                           <li>Cash refunds will be processed immediately at the store after approval; other refund methods within 7-10 business days</li>
                        </ul>
                     </section>

                     <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">6. Installation Services</h2>
                        <p className="leading-relaxed mb-3">For house wiring and installation services:</p>
                        <ul className="space-y-2 ml-6 list-disc">
                           <li>All installations will be carried out by qualified electricians</li>
                           <li>Installation costs are separate from product costs unless specified</li>
                           <li>We provide cost-effective and efficient installation services</li>
                           <li>Installation warranty covers workmanship for a specified period</li>
                           <li>Customer must provide necessary access and cooperation for installation work</li>
                           <li>Any structural modifications required must be approved by the customer</li>
                        </ul>
                     </section>

                     <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">7. Customer Responsibilities</h2>
                        <p className="leading-relaxed mb-3">As a customer, you agree to:</p>
                        <ul className="space-y-2 ml-6 list-disc">
                           <li>Visit our physical store for all purchases and transactions</li>
                           <li>Provide accurate information for service requests and installations</li>
                           <li>Inspect products thoroughly at the time of in-store purchase</li>
                           <li>Use products as per manufacturer's guidelines</li>
                           <li>Ensure proper handling and storage of electrical products</li>
                           <li>Allow access to premises for installation and service work</li>
                           <li>Make timely payments as agreed at the time of purchase</li>
                           <li>Contact us directly via phone or in-person for any inquiries rather than expecting online support</li>
                        </ul>
                     </section>

                     <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitation of Liability</h2>
                        <p className="leading-relaxed">
                           Jeet Enterprise shall not be liable for any indirect, incidental, special, or consequential damages arising from
                           the use or inability to use our products or services. Our liability is limited to the purchase price of the product
                           or service. We are not responsible for damages caused by improper installation, misuse, or normal wear and tear.
                        </p>
                     </section>

                     <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">9. Safety and Compliance</h2>
                        <p className="leading-relaxed">
                           All products and services comply with relevant Indian electrical safety standards. Customers are responsible for
                           ensuring that installations meet local electrical codes and regulations. We recommend professional installation
                           for all electrical products.
                        </p>
                     </section>

                     <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">10. Intellectual Property</h2>
                        <p className="leading-relaxed">
                           All content on our website and marketing materials, including text, images, logos, and designs, are the property
                           of Jeet Enterprise or our partners. Unauthorized use or reproduction is prohibited.
                        </p>
                     </section>

                     <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">11. Privacy</h2>
                        <p className="leading-relaxed">
                           Your privacy is important to us. Please refer to our{' '}
                           <a href="/privacy-policy" className="text-primary hover:underline font-medium">
                              Privacy Policy
                           </a>{' '}
                           for information on how we collect, use, and protect your personal data.
                        </p>
                     </section>

                     <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">12. Dispute Resolution</h2>
                        <p className="leading-relaxed">
                           Any disputes arising from these terms or our services shall be resolved through mutual discussion. If unresolved,
                           disputes will be subject to the jurisdiction of courts in West Bengal, India.
                        </p>
                     </section>

                     <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">13. Modifications</h2>
                        <p className="leading-relaxed">
                           We reserve the right to modify these Terms and Conditions at any time. Updated terms will be effective immediately
                           upon posting. Continued use of our services after changes constitutes acceptance of the modified terms.
                        </p>
                     </section>

                     <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">14. Contact Information</h2>
                        <p className="leading-relaxed mb-3">
                           For questions, concerns, or clarifications regarding these Terms and Conditions, please contact us:
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                           <p className="font-semibold text-foreground">Jeet Enterprise</p>
                           <p>Goligram Road, Abhirampur</p>
                           <p>West Bengal 713144</p>
                           <p className="mt-2">
                              <strong>Phone:</strong>{' '}
                              <a href="tel:+919474051466" className="text-primary hover:underline">
                                 +91 9474051466
                              </a>
                           </p>
                           <p><strong>Owner:</strong> Biplab Koner</p>
                        </div>
                     </section>

                     <section className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                        <p className="text-foreground font-medium mb-3">
                           By visiting our store and using our services, you acknowledge that you have read, understood, and agree to be bound by these
                           Terms and Conditions.
                        </p>
                        <p className="text-sm text-muted-foreground">
                           <strong>Reminder:</strong> All business is conducted in-person at our store. Please visit us at Goligram Road, Abhirampur,
                           West Bengal 713144 or call +91 9474051466 for purchases, product information, and services.
                        </p>
                     </section>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default TermsConditions;
