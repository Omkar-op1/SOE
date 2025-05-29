"use client";
import BrandButton from '@/components/button';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color--bg)] text-white">
      <h1 className="text-4xl mb-6">Welcome</h1>
      <div className="mt-4">
        <BrandButton label="Join Our Establishment" onClick={() => alert('Join clicked')} />
      </div>
    </div>
  );
}
