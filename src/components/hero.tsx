'use client'
import { GeistPixelSquare } from 'geist/font/pixel';
import Image from 'next/image'
import React from 'react'

function HeroSection() {
  return (
    <section
      className="w-full h-full mb-10"
      style={{ minHeight: 'calc(64vh - 64px)' }}
    >
      <div className="max-w-7xl mx-auto mt-10 h-full flex items-center">
        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 w-full items-center h-full border border-[color:var(--border)] p-6 rounded-lg">
          {/* Left Column - Visual (72%) */}
          <div className="lg:col-span-9 w-full h-full min-h-[420px] lg:min-h-[480px] border border-[color:var(--border)] overflow-hidden">
            <div className="relative w-full h-full overflow-hidden">
              <Image 
                src="https://res.cloudinary.com/dy5xyare1/image/upload/v1778953296/hero-image-8bit_sw5h1t.png"
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          {/* Right Column - Content (28%) */}
          <div className="lg:col-span-3 w-full flex flex-col justify-center space-y-6">
            {/* Title */}
            <h1 className={`${GeistPixelSquare.className} text-5xl lg:text-6xl font-semibold leading-tight text-[color:var(--foreground)]`}>
              Joaquim Silva
            </h1>

            {/* Paragraph */}
            <p className="text-base lg:text-lg text-[color:var(--muted)] leading-relaxed font-normal">
              Engenheiro de Software especializado em Cloud, DevOps e Confiabilidade.
            </p>

            <span>
              <a href="https://github.com/joaquimsnjunior" className="text-sm link-accent inline-flex">
                Explore meu GitHub
              </a>
            </span>
          </div>
          <div className="border-b border-[color:var(--border)] col-span-full">
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection