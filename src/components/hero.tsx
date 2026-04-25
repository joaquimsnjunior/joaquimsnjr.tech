'use client'
import { GeistPixelLine, GeistPixelSquare } from 'geist/font/pixel';
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 w-full items-center h-full">
          {/* Left Column - Visual (72%) */}
          <div className="lg:col-span-9 w-full h-full min-h-[400px] lg:min-h-[460px]">
            <div className="relative w-full h-full rounded-[12px] overflow-hidden">
              <Image 
                src="https://res.cloudinary.com/dy5xyare1/image/upload/v1777131410/Hero_image_zpqux7.jpg"
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              {/* Overlay com sombra */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#13343B]/55 via-[#13343B]/5 to-transparent rounded-[12px]"></div>
            </div>
          </div>

          {/* Right Column - Content (28%) */}
          <div className="lg:col-span-3 w-full flex flex-col justify-center space-y-6">
            {/* Title */}
            <h1 className={`${GeistPixelLine.className} text-5xl lg:text-6xl font-semibold leading-tight text-[color:var(--foreground)]`}>
              Joaquim Silva
            </h1>

            {/* Paragraph */}
            <p className="text-base lg:text-lg text-[color:var(--muted)] leading-relaxed font-normal">
              Engenheiro de Software especializado em Cloud, DevOps e Confiabilidade.
              <span className={`${GeistPixelSquare.className} block mt-2 font-extrabold text-2xl text-[color:var(--accent)]`}>Site Reliability Engineer</span>
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