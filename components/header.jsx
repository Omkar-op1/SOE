'use client';
import React, { useState } from 'react';

import Link from 'next/link';
import '@/css/header.css';
import BrandButton from '@/components/button';
import { useRouter } from 'next/navigation';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 const router = useRouter();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
 

  return (
    <>
      {/* Desktop Navbar */}
      <div className="navbar w-nav">
        <div className="padding-global">
          <div className="container-large is-nav">
            <Link href="/" className="university-logo_wrap w-nav-brand">
              <img 
                src="theidea.webp" 
                loading="lazy" 
                width="140" 
                alt="theideacompany.com logo" 
                className="university-logo" 
              />
            </Link>

            <nav role="navigation" className="nav_links w-nav-menu">
              <Link href="/thinkers" className="nav_link w-inline-block">
                <div className="nav_link_text">Thinkers Club</div>
                <div className="nav_link_line"></div>
              </Link>
              <Link href="/investor" className="nav_link w-inline-block">
                <div className="nav_link_text">Investors Table</div>
                <div className="nav_link_line"></div>
              </Link>
              <Link href="/Idea-community" className="nav_link w-inline-block">
                <div className="nav_link_text">Idea Community</div>
                <div className="nav_link_line"></div>
              </Link>
            </nav>
           <BrandButton
      label="Login"
      onClick={() => router.push('https://admin.theideacompany.io/login')}
      icon={
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
            fill="currentColor"
          />
        </svg>
      }
      iconPosition="left" // optional, defaults to left
    />
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className={`topnav ${isMobileMenuOpen ? 'responsive' : ''}`} id="myTopnav">
        <div className="mobile-header">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <img src="/images/theidea.png" alt="theideacompany.com logo" className="university-logo" />
          </Link>
          <a 
            href="#" 
            className="icon" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <i className={`fa ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </a>
        </div>
        <div className="mobile-menu">
          <Link href="/thinkers" onClick={() => setIsMobileMenuOpen(false)}>Thinkers Club</Link>
          <Link href="/investor" onClick={() => setIsMobileMenuOpen(false)}>Investors Table</Link>
          <Link href="/Idea-community" onClick={() => setIsMobileMenuOpen(false)}>Idea Community</Link>
          <a href="https://admin.theideacompany.io/login" className="mobile-login" onClick={() => setIsMobileMenuOpen(false)}>
            Log In
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;