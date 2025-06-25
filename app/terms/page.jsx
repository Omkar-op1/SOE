// app/terms/page.js
"use client";
import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-[#0a0a0a] text-[#ccc] font-sans">
      {/* Background Effects */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(255,215,0,0.05)_0%,transparent_70%)] rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[250px] h-[250px] bg-[radial-gradient(circle,rgba(255,165,0,0.04)_0%,transparent_70%)] rounded-full blur-[80px]"></div>
      </div>

      <div className="relative z-[2] max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Terms & Conditions
            </span>
          </h1>
          <p className="text-lg text-[#ddd] max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using our services.
          </p>
        </div>

        {/* Content */}
        <div className="bg-[rgba(255,255,255,0.02)] backdrop-blur-sm rounded-2xl p-8 border border-[rgba(255,215,0,0.1)] shadow-2xl">
          <div className="prose prose-invert max-w-none">
            <p className="text-[#ddd] mb-6">
              These Terms and Conditions, along with privacy policy or other terms ("Terms") constitute a binding agreement by and between TIC INVENTORS PRIVATE LIMITED, ( "Website Owner" or "we" or "us" or "our") and you ("you" or "your") and relate to your use of our website, goods (as applicable) or services (as applicable) (collectively, "Services").
            </p>

            <p className="text-[#ddd] mb-8">
              By using our website and availing the Services, you agree that you have read and accepted these Terms (including the Privacy Policy). We reserve the right to modify these Terms at any time and without assigning any reason. It is your responsibility to periodically review these Terms to stay informed of updates.
            </p>

            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Terms of Use</h2>
            <p className="text-[#ddd] mb-6">
              The use of this website or availing of our Services is subject to the following terms of use:
            </p>

            <div className="space-y-4 text-[#ddd]">
              <div className="flex gap-3">
                <span className="text-[#FFD700] font-bold">1.</span>
                <p>To access and use the Services, you agree to provide true, accurate and complete information to us during and after registration, and you shall be responsible for all acts done through the use of your registered account.</p>
              </div>

              <div className="flex gap-3">
                <span className="text-[#FFD700] font-bold">2.</span>
                <p>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials offered on this website or through the Services, for any specific purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</p>
              </div>

              <div className="flex gap-3">
                <span className="text-[#FFD700] font-bold">3.</span>
                <p>Your use of our Services and the website is solely at your own risk and discretion. You are required to independently assess and ensure that the Services meet your requirements.</p>
              </div>

              <div className="flex gap-3">
                <span className="text-[#FFD700] font-bold">4.</span>
                <p>The contents of the Website and the Services are proprietary to Us and you will not have any authority to claim any intellectual property rights, title, or interest in its contents.</p>
              </div>

              <div className="flex gap-3">
                <span className="text-[#FFD700] font-bold">5.</span>
                <p>You acknowledge that unauthorized use of the Website or the Services may lead to action against you as per these Terms or applicable laws.</p>
              </div>

              <div className="flex gap-3">
                <span className="text-[#FFD700] font-bold">6.</span>
                <p>You agree to pay us the charges associated with availing the Services.</p>
              </div>

              <div className="flex gap-3">
                <span className="text-[#FFD700] font-bold">7.</span>
                <p>You agree not to use the website and/or Services for any purpose that is unlawful, illegal or forbidden by these Terms, or Indian or local laws that might apply to you.</p>
              </div>

              <div className="flex gap-3">
                <span className="text-[#FFD700] font-bold">8.</span>
                <p>You agree and acknowledge that website and the Services may contain links to other third party websites. On accessing these links, you will be governed by the terms of use, privacy policy and such other policies of such third party websites.</p>
              </div>

              <div className="flex gap-3">
                <span className="text-[#FFD700] font-bold">9.</span>
                <p>You understand that upon initiating a transaction for availing the Services you are entering into a legally binding and enforceable contract with us for the Services.</p>
              </div>

              <div className="flex gap-3">
                <span className="text-[#FFD700] font-bold">10.</span>
                <p>You shall be entitled to claim a refund of the payment made by you in case we are not able to provide the Service. The timelines for such return and refund will be according to the specific Service you have availed or within the time period provided in our policies (as applicable). In case you do not raise a refund claim within the stipulated time, than this would make you ineligible for a refund.</p>
              </div>

              <div className="flex gap-3">
                <span className="text-[#FFD700] font-bold">11.</span>
                <p>Notwithstanding anything contained in these Terms, the parties shall not be liable for any failure to perform an obligation under these Terms if performance is prevented or delayed by a force majeure event.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#FFD700] mb-4 mt-8">Governing Law</h2>
            <p className="text-[#ddd] mb-4">
              These Terms and any dispute or claim relating to it, or its enforceability, shall be governed by and construed in accordance with the laws of India.
            </p>
            <p className="text-[#ddd] mb-4">
              All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Nagpur, Maharashtra.
            </p>

            <h2 className="text-2xl font-bold text-[#FFD700] mb-4 mt-8">Contact Information</h2>
            <p className="text-[#ddd]">
              All concerns or communications relating to these Terms must be communicated to us using the contact information provided on this website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}