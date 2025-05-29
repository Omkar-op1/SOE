'use client';
import React from 'react';

export default function BrandButton({
  label,
  onClick,
  type = 'button',
  icon = null, // Accepts SVG element or <img>
  iconPosition = 'left', // 'left' or 'right'
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-6 py-3 rounded-2xl font-serif font-bold text-base shadow-md
                 transition-transform duration-300 ease-in-out
                 hover:scale-105 active:scale-95
                 focus:outline-none focus:ring-2 focus:ring-yellow-400
                 hover:shadow-[0_0_12px_1px_rgba(184,134,11,0.6)] relative overflow-hidden flex items-center gap-2"
      style={{
        backgroundColor: 'var(--color--gold)',
        color: 'var(--color--button-text)',
        transition: 'box-shadow 0.3s ease-in-out',
      }}
    >
      {/* Shiny effect */}
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-2xl"
        style={{
          background:
            'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 60%)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Icon Left */}
      {icon && iconPosition === 'left' && (
        <span className="w-5 h-5 flex items-center justify-center">{icon}</span>
      )}

      {label}

      {/* Icon Right */}
      {icon && iconPosition === 'right' && (
        <span className="w-5 h-5 flex items-center justify-center">{icon}</span>
      )}
    </button>
  );
}
