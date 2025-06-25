"use client";
import React from "react";

export default function RefundPolicy() {
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
              Refund Policy
            </span>
          </h1>
          <p className="text-lg text-[#ddd] max-w-2xl mx-auto">
            Fair, transparent, and customer-focused.
          </p>
        </div>

        {/* Content */}
        <div className="bg-[rgba(255,255,255,0.02)] backdrop-blur-sm rounded-2xl p-8 border border-[rgba(255,215,0,0.1)] shadow-2xl">
          <div className="prose prose-invert max-w-none">

            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Refund Eligibility</h2>
            <p className="text-[#ddd] mb-4">
              We value your trust and strive to provide exceptional services at The Idea Company. If you're not completely satisfied, here's how we can help:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#ddd] mb-6">
              <li>Refunds apply to service fees only and not to investments made through our platform.</li>
              <li>The service must not have been fully utilized or accessed.</li>
              <li>Request must be made within 5-7 days of purchase.</li>
              <li>Provide order details and reason for refund.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Refund Process</h2>
            <ol className="list-decimal list-inside space-y-2 text-[#ddd] mb-6">
              <li>Email us at <span className="text-[#FFD700]">theideacompanyofficial@gmail.com</span>.</li>
              <li>Include your order details and reason for request.</li>
              <li>We'll review and respond within 24 hours.</li>
              <li>Approved refunds are processed in 5–7 business days.</li>
            </ol>
            <p className="text-[#ddd] mb-6">
              <strong>Note:</strong> Refunds are issued to the original payment method only.
            </p>

            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Important Exceptions</h2>
            <ul className="list-disc list-inside space-y-2 text-[#ddd] mb-6">
              <li>Investments through our platform are non-refundable.</li>
              <li>Services already rendered may not qualify for a refund.</li>
              <li>Special promotions may have different refund terms.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Need Help?</h2>
            <p className="text-[#ddd] mb-4">
              If you haven't received your refund or have any questions:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#ddd] mb-6">
              <li>First, check with your bank — transfers may take 3–5 business days.</li>
              <li>Still missing? Contact us immediately, and we’ll investigate.</li>
              <li>Reach us at <span className="text-[#FFD700]">theideacompanyofficial@gmail.com</span>.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Still Have Questions?</h2>
            <p className="text-[#ddd]">
              Our team is ready to assist you with any concerns about our refund policy. <br />
              <span className="text-[#FFA500]">Contact Support</span>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
