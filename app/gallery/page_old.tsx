"use client";

import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  const galleryImages = {
    telecom: [
      { src: '/DSC00836.JPG', alt: 'Telecom Equipment Installation' },
      { src: '/DSC00847.JPG', alt: 'Telecom Traffic Control Setup' },
      { src: '/DSC00850.JPG', alt: 'Telecom Project Work' },
      { src: '/DSC00852.JPG', alt: 'Telecom Site Management' },
    ],
    crane: [
      { src: '/DSC00810.JPG', alt: 'Crane Operation Traffic Management' },
      { src: '/DSC00943.JPG', alt: 'Night Crane Traffic Control' },
      { src: '/DSC00807.JPG', alt: 'Heavy Equipment Traffic Control' },
      { src: '/DSC00809.JPG', alt: 'Crane Site Safety' },
      { src: '/DSC00811.JPG', alt: 'Large Equipment Operations' },
    ],
    construction: [
      { src: '/DSC00717.JPG', alt: 'Construction Site Traffic Control' },
      { src: '/DSC00721.JPG', alt: 'Construction Traffic Management' },
      { src: '/DSC00723.JPG', alt: 'Construction Zone Setup' },
      { src: '/DSC00726.JPG', alt: 'Construction Site Safety' },
      { src: '/DSC00732.JPG', alt: 'Construction Traffic Plan' },
      { src: '/DSC00849.JPG', alt: 'Construction Vehicle Operations' },
      { src: '/DSC00844.JPG', alt: 'Construction Site Work' },
      { src: '/DSC00845.JPG', alt: 'Construction Zone Management' },
    ],
    civil: [
      { src: '/DSC00838.JPG', alt: 'Civil Works Traffic Control' },
      { src: '/DSC00862.JPG', alt: 'Civil Project Management' },
      { src: '/DSC00947.JPG', alt: 'Civil Infrastructure Work' },
      { src: '/DSC00949.JPG', alt: 'Civil Engineering Traffic Setup' },
      { src: '/DSC00807 (1).JPG', alt: 'Civil Works Night Operations' },
    ],
  }

  const openLightbox = (image: { src: string; alt: string }) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00726.JPG"
            alt="Traffic Control Gallery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-anton uppercase">
              PROJECT <span className="text-[#2B7FFF]">GALLERY</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-opensans">
              Explore our diverse portfolio of traffic control and management projects across NSW
            </p>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce flex flex-col items-center">
            <div className="w-8 h-12 border-2 border-[#2B7FFF] rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#2B7FFF] rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section with Tabs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Browse Our Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              PROJECTS BY <span className="text-[#2B7FFF]">CATEGORY</span>
            </h2>
            <div className="w-24 h-1 bg-[#2B7FFF] mx-auto"></div>
          </div>

          <Tabs defaultValue="telecom" className="w-full">
            <div className="mb-12 flex justify-center">
              <TabsList className="grid h-auto w-full max-w-3xl grid-cols-2 gap-3 bg-transparent p-0 md:grid-cols-4">
                <TabsTrigger
                  value="telecom"
                  className="data-[state=active]:bg-[#2B7FFF] data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-gray-700 border-2 data-[state=active]:border-[#2B7FFF] data-[state=inactive]:border-gray-200 text-base font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:border-[#2B7FFF] font-opensans"
                >
                  Telecom
                </TabsTrigger>
                <TabsTrigger
                  value="crane"
                  className="data-[state=active]:bg-[#2B7FFF] data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-gray-700 border-2 data-[state=active]:border-[#2B7FFF] data-[state=inactive]:border-gray-200 text-base font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:border-[#2B7FFF] font-opensans"
                >
                  Crane
                </TabsTrigger>
                <TabsTrigger
                  value="construction"
                  className="data-[state=active]:bg-[#2B7FFF] data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-gray-700 border-2 data-[state=active]:border-[#2B7FFF] data-[state=inactive]:border-gray-200 text-base font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:border-[#2B7FFF] font-opensans"
                >
                  Construction
                </TabsTrigger>
                <TabsTrigger
                  value="civil"
                  className="data-[state=active]:bg-[#2B7FFF] data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-gray-700 border-2 data-[state=active]:border-[#2B7FFF] data-[state=inactive]:border-gray-200 text-base font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:border-[#2B7FFF] font-opensans"
                >
                  Civil
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Telecom Tab */}
            <TabsContent value="telecom" className="mt-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {galleryImages.telecom.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => openLightbox(image)}
                    className="group relative aspect-[4/3] overflow-hidden rounded-xl border-4 border-gray-200 hover:border-[#2B7FFF] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="text-white text-base font-semibold font-opensans">{image.alt}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-[#2B7FFF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply"></div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Crane Tab */}
            <TabsContent value="crane" className="mt-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {galleryImages.crane.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => openLightbox(image)}
                    className="group relative aspect-[4/3] overflow-hidden rounded-xl border-4 border-gray-200 hover:border-[#2B7FFF] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="text-white text-base font-semibold font-opensans">{image.alt}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-[#2B7FFF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply"></div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Construction Tab */}
            <TabsContent value="construction" className="mt-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {galleryImages.construction.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => openLightbox(image)}
                    className="group relative aspect-[4/3] overflow-hidden rounded-xl border-4 border-gray-200 hover:border-[#2B7FFF] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="text-white text-base font-semibold font-opensans">{image.alt}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-[#2B7FFF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply"></div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Civil Tab */}
            <TabsContent value="civil" className="mt-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {galleryImages.civil.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => openLightbox(image)}
                    className="group relative aspect-[4/3] overflow-hidden rounded-xl border-4 border-gray-200 hover:border-[#2B7FFF] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="text-white text-base font-semibold font-opensans">{image.alt}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-[#2B7FFF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply"></div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-3 bg-white/10 hover:bg-[#2B7FFF] text-white rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Close lightbox"
          >
            <FaTimes className="text-2xl" />
          </button>
          <div className="relative w-full max-w-6xl h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white text-xl font-semibold text-center font-opensans">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
