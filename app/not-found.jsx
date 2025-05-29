// app/not-found.js
"use client"
import Link from 'next/link';
import BrandButton from '@/components/button';
import { useRouter } from 'next/navigation';

export default function NotFound() {
     const router = useRouter();
    
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-xl">Sorry, this page does not exist. <br /> </p>
      <br />
              <BrandButton label="Go to Home" onClick={() => router.push('/')} />  
    </div>
  );
}
