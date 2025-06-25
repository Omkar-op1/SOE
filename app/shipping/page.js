"use client";
import React from "react";

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-[#0a0a0a] text-[#ccc] font-sans">
      {/* Background Effects */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(255,215,0,0.05)_0%,transparent_70%)] rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[250px] h-[250px] bg-[radial-gradient(circle,rgba(255,165,0,0.04)_0%,transparent_70%)] rounded-full blur-[80px]"></div>
      </div>

      <div className="relative z-[2] max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Shipping Policy
            </span>
          </h1>
          <p className="text-lg text-[#ddd] max-w-2xl mx-auto">
            Transparency on how and when your products are delivered.
          </p>
        </div>

        {/* Content */}
        <div className="bg-[rgba(255,255,255,0.02)] backdrop-blur-sm rounded-2xl p-8 border border-[rgba(255,215,0,0.1)] shadow-2xl">
          <div className="prose prose-invert max-w-none">

            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Shipping Coverage</h2>
            <p className="text-[#ddd] mb-4">
              The Idea Company provides shipping services for digital and physical products based on availability. 
              Please read carefully for how and where we ship.
            </p>

            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Digital Products</h2>
            <ul className="list-disc list-inside space-y-2 text-[#ddd] mb-6">
              <li>Digital services (e.g., consultations, design assets, code) are delivered via email or platform dashboard.</li>
              <li>Delivery usually occurs within 24 hours after confirmation of payment.</li>
              <li>Ensure your email is valid and monitored for updates.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Physical Shipments (If Applicable)</h2>
            <ul className="list-disc list-inside space-y-2 text-[#ddd] mb-6">
              <li>Shipping is available within India for select products and merchandise.</li>
              <li>Orders are processed within 2–3 business days.</li>
              <li>Delivery times range from 5–10 business days depending on your location.</li>
              <li>Tracking details will be shared via email once dispatched.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Shipping Charges</h2>
            <p className="text-[#ddd] mb-6">
              Shipping charges (if applicable) are calculated at checkout and are based on location and product weight. 
              Some digital services include no shipping fees.
            </p>

            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Delays & Exceptions</h2>
            <p className="text-[#ddd] mb-4">
              We are not liable for delays caused by:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#ddd] mb-6">
              <li>Natural disasters or uncontrollable events</li>
              <li>Incorrect shipping addresses</li>
              <li>Courier service delays</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Need Assistance?</h2>
            <p className="text-[#ddd] mb-4">
              If you haven’t received your item, or if you face any delivery issues, please contact us immediately.
            </p>
            <p className="text-[#ddd]">
              📧 Email: <span className="text-[#FFD700]">theideacompanyofficial@gmail.com</span>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
