"use client"

import Image from "next/image"
import React, { useState } from "react"
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { cn } from "@/lib/utils"

interface Image {
  src: string
  alt: string
}

interface CustomCarouselProps {
  images: Image[]
}

export default function CustomCarousel({ images }: CustomCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showFullScreen, setShowFullScreen] = useState(false)

  const handleImageChange = (index: number) => {
    if (images.length === 1) return
    setCurrentIndex((images.length + index) % images.length)
  }

  const toggleFullScreen = () => setShowFullScreen(!showFullScreen)

  return (
    <div className="rounded-xl">
      <div className="relative h-[400px] w-full shadow-md">
        <Image
          src={images[currentIndex].src}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={images[currentIndex].alt}
          className="rounded-xl object-cover"
        />
        <button
          onClick={toggleFullScreen}
          className="absolute bottom-3 right-3 rounded-xl bg-white/40 p-2 transition-colors hover:bg-white/60"
          aria-label="View full screen"
        >
          <Maximize2 className="h-5 w-5" />
        </button>
      </div>
      <div className="flex justify-center gap-2 py-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleImageChange(index)}
            className={cn(
              "relative h-[124px] w-[148px] cursor-pointer rounded-xl border-2 object-cover p-2 shadow-md",
              currentIndex === index && "border-primary"
            )}
            aria-label={`View image ${index + 1}`}
          >
            <Image
              src={image.src}
              fill
              sizes="(max-width: 768px) 25vw, (max-width: 1200px) 15vw, 10vw"
              alt={image.alt}
              className="rounded-xl object-cover"
            />
          </button>
        ))}
      </div>
      {showFullScreen && (
        <div className="fixed inset-0 z-50 grid h-screen w-screen place-content-center bg-black/90">
          <div className="relative h-screen max-h-[600px] w-[90vw] max-w-[900px] rounded-md bg-black/80">
            <button
              onClick={toggleFullScreen}
              className="absolute right-2 top-2 z-10 rounded-full bg-white/60 p-1 transition-colors hover:bg-white/80"
              aria-label="Close full screen view"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="relative h-full w-full overflow-hidden rounded-md">
              <Image
                src={images[currentIndex].src}
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 50vw"
                alt={images[currentIndex].alt}
                className="object-contain md:object-cover"
              />
            </div>
            <div className="absolute left-5 top-1/2 flex w-[95%] -translate-y-1/2 justify-between">
              <button
                onClick={() => handleImageChange(currentIndex - 1)}
                className="rounded-lg bg-white/60 p-2 transition-colors hover:bg-white/80"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => handleImageChange(currentIndex + 1)}
                className="rounded-lg bg-white/60 p-2 transition-colors hover:bg-white/80"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
