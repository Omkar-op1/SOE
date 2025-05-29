'use client';
import React from 'react';
import Link from 'next/link';
import '@/css/footer.css';
import BrandButton from '@/components/button';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Left Side Content */}
          <div className="footer-left">
            {/* Links */}
            <div className="footer-links">
              <Link href="/terms" className="footer-link">Terms & Conditions</Link>
              <Link href="/privacy" className="footer-link">Privacy Policy</Link>
              <Link href="/shipping" className="footer-link">Shipping Policy</Link>
              <Link href="/refund" className="footer-link">Refund Policy</Link>
              <Link href="/contact" className="footer-link">Contact Us</Link>
            </div>

            {/* Disclaimer */}
            <div className="footer-disclaimer">
              Everything taught here is for educational purposes only. It is up to each student to implement and do the work. <br />
              <strong className="gold-text">The Real World team</strong> doesn't guarantee any profits or financial success.
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
              © {new Date().getFullYear()} The Idea Company. All rights reserved.
            </div>
          </div>

          {/* Right Side Content */}
          <div className="footer-right">
            {/* Contact */}
            <div className="footer-contact">
              <strong className="gold-text">Support:</strong> 
              <a href="mailto:theideacompanyofficial@gmail.com" className="footer-email">
                theideacompanyofficial@gmail.com
              </a>
            </div>

            {/* Login */}
            <div className="footer-login">
             <BrandButton
      label="Welcome to thinkers club"
      onClick={() => router.push('https://admin.theideacompany.io/login')}
      
    />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;