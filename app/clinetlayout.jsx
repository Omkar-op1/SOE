'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const hiddenPaths = ['/register', '/login'];
  const shouldHide = hiddenPaths.includes(pathname);

  return (
    <>
      {!shouldHide && <Header />}
      {children}
      {!shouldHide && <Footer />}
    </>
  );
}