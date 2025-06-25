// app/privacy/page.js
"use client";
import React from "react";

export default function PrivacyPolicy() {
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
              Privacy Policy
            </span>
          </h1>
          <p className="text-lg text-[#ddd] max-w-2xl mx-auto">
            Last updated on 22-09-2024. Your privacy is important to us.
          </p>
        </div>

        {/* Content */}
        <div className="bg-[rgba(255,255,255,0.02)] backdrop-blur-sm rounded-2xl p-8 border border-[rgba(255,215,0,0.1)] shadow-2xl">
          <div className="prose prose-invert max-w-none">
            <p className="text-[#ddd] mb-6">
              This privacy policy ("Policy") relates to the manner TIC INVENTORS PRIVATE LIMITED ("we", "us", "our") in which we use, handle and process the data that you provide us in connection with using the products or services we offer. By using this website or by availing goods or services offered by us, you agree to the terms and conditions of this Policy, and consent to our use, storage, disclosure, and transfer of your information or data in the manner described in this Policy.
            </p>

            <p className="text-[#ddd] mb-8">
              We are committed to ensuring that your privacy is protected in accordance with applicable laws and regulations. We urge you to acquaint yourself with this Policy to familiarize yourself with the manner in which your data is being handled by us.
            </p>

            <div className="bg-[rgba(255,215,0,0.1)] rounded-lg p-4 mb-8 border-l-4 border-[#FFD700]">
              <p className="text-[#FFD700] font-semibold">
                Note: TIC INVENTORS PRIVATE LIMITED may change this Policy periodically and we urge you to check this page for the latest version of the Policy in order to keep yourself updated.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">What Data is Being Collected</h2>
            <p className="text-[#ddd] mb-4">We may collect the following information from you:</p>
            <div className="space-y-2 text-[#ddd] mb-6">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                <span>Name</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                <span>Contact information including address and email address</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                <span>Demographic information or, preferences or interests</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                <span>Personal Data or Other information relevant/required for providing the goods or services to you</span>
              </div>
            </div>

            <div className="bg-[rgba(255,165,0,0.1)] rounded-lg p-4 mb-8">
              <p className="text-[#ddd]">
                <strong>Note:</strong> The meaning of Personal Data will be as defined under relevant Indian laws. Notwithstanding anything under this Policy as required under applicable Indian laws, we will not be storing any credit card, debit card or any other similar card data of yours. Please also note that all data or information collected from you will be strictly in accordance with applicable laws and guidelines.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">What We Do With the Data We Gather</h2>
            <p className="text-[#ddd] mb-4">We require this data to provide you with the goods or services offered by us including but not limited, for the below set out purposes:</p>
            <div className="space-y-2 text-[#ddd] mb-6">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#FFA500] rounded-full"></span>
                <span>Internal record keeping</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#FFA500] rounded-full"></span>
                <span>For improving our products or services</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#FFA500] rounded-full"></span>
                <span>For providing updates to you regarding our products or services including any special offers</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#FFA500] rounded-full"></span>
                <span>To communicate information to you</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#FFA500] rounded-full"></span>
                <span>For internal training and quality assurance purposes</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Who Do We Share Your Data With</h2>
            <p className="text-[#ddd] mb-4">We may share your information or data with:</p>
            <div className="space-y-3 text-[#ddd] mb-6">
              <div className="flex gap-3">
                <span className="text-[#FFD700] font-bold">•</span>
                <p>Third parties including our service providers in order to facilitate the provisions of goods or services to you, carry out your requests, respond to your queries, fulfil your orders or for other operational and business reasons.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#FFD700] font-bold">•</span>
                <p>With our group companies (to the extent relevant)</p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#FFD700] font-bold">•</span>
                <p>Our auditors or advisors to the extent required by them for performing their services</p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#FFD700] font-bold">•</span>
                <p>Governmental bodies, regulatory authorities, law enforcement authorities pursuant to our legal obligations or compliance requirements.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">How We Use Cookies</h2>
            <p className="text-[#ddd] mb-6">
              We use "cookies" to collect information and to better understand customer behaviour. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to avail our goods or services to the full extent. We do not control the use of cookies by third parties. The third party service providers have their own privacy policies addressing how they use such information.
            </p>

            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Your Rights Relating to Your Data</h2>
            <div className="space-y-4 text-[#ddd] mb-6">
              <div>
                <h3 className="text-lg font-semibold text-[#FFA500] mb-2">Right to Review</h3>
                <p>You can review the data provided by you and can request us to correct or amend such data (to the extent feasible, as determined by us). That said, we will not be responsible for the authenticity of the data or information provided by you.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#FFA500] mb-2">Withdrawal of your Consent</h3>
                <p>You can choose not to provide your data, at any time while availing our goods or services or otherwise withdraw your consent provided to us earlier, in writing to our email ID: <span className="text-[#FFD700]">theideacompanyofficial@gmail.com</span>. In the event you choose to not provide or later withdraw your consent, we may not be able to provide you our services or goods. Please note that these rights are subject to our compliance with applicable laws.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Data Retention</h2>
            <p className="text-[#ddd] mb-6">
              We may retain your information or data (i) for as long as we are providing goods and services to you; and (ii) as permitted under applicable law, we may also retain your data or information even after you terminate the business relationship with us. However, we will process such information or data in accordance with applicable laws and this Policy.
            </p>

            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Data Security</h2>
            <p className="text-[#ddd] mb-6">
              We will use commercially reasonable and legally required precautions to preserve the integrity and security of your information and data.
            </p>

            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Contact Us</h2>
            <p className="text-[#ddd]">
              For any queries, questions or grievances about this Policy, please contact us using the contact information provided on this website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}