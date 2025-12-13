import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GalleryPage() {
  const galleryImages = {
    telecom: [
      { src: '/DSC00836.JPG', alt: 'Telecom equipment installation' },
      { src: '/DSC00847.JPG', alt: 'Telecom traffic control setup' },
      { src: '/DSC00850.JPG', alt: 'Telecom project work' },
      { src: '/DSC00852.JPG', alt: 'Telecom site management' },
    ],
    crane: [
      { src: '/DSC00810.JPG', alt: 'Crane operation traffic management' },
      { src: '/DSC00943.JPG', alt: 'Night crane traffic control' },
      { src: '/DSC00807.JPG', alt: 'Heavy equipment traffic control' },
      { src: '/DSC00809.JPG', alt: 'Crane site safety' },
      { src: '/DSC00811.JPG', alt: 'Large equipment operations' },
    ],
    construction: [
      { src: '/DSC00717.JPG', alt: 'Construction site traffic control' },
      { src: '/DSC00721.JPG', alt: 'Construction traffic management' },
      { src: '/DSC00723.JPG', alt: 'Construction zone setup' },
      { src: '/DSC00726.JPG', alt: 'Construction site safety' },
      { src: '/DSC00732.JPG', alt: 'Construction traffic plan' },
      { src: '/DSC00849.JPG', alt: 'Construction vehicle operations' },
      { src: '/DSC00844.JPG', alt: 'Construction site work' },
      { src: '/DSC00845.JPG', alt: 'Construction zone management' },
    ],
    civil: [
      { src: '/DSC00838.JPG', alt: 'Civil works traffic control' },
      { src: '/DSC00862.JPG', alt: 'Civil project management' },
      { src: '/DSC00947.JPG', alt: 'Civil infrastructure work' },
      { src: '/DSC00949.JPG', alt: 'Civil engineering traffic setup' },
      { src: '/DSC00807 (1).JPG', alt: 'Civil works night operations' },
    ],
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
        <Image
          src="/DSC00726.JPG"
          alt="Traffic Control Gallery"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Our Work Gallery
            </h1>
            <p className="text-lg text-gray-200 md:text-xl lg:text-2xl">
              Explore our diverse portfolio of traffic control and management projects
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Section with Tabs */}
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16 lg:py-20">
        <Tabs defaultValue="telecom" className="w-full">
          <div className="mb-8 flex justify-center">
            <TabsList className="grid h-auto w-full max-w-2xl grid-cols-2 gap-2 bg-gray-100 p-2 md:grid-cols-4">
              <TabsTrigger
                value="telecom"
                className="data-[state=active]:bg-blue-700 data-[state=active]:text-white text-sm md:text-base py-3"
              >
                Telecom
              </TabsTrigger>
              <TabsTrigger
                value="crane"
                className="data-[state=active]:bg-blue-700 data-[state=active]:text-white text-sm md:text-base py-3"
              >
                Crane
              </TabsTrigger>
              <TabsTrigger
                value="construction"
                className="data-[state=active]:bg-blue-700 data-[state=active]:text-white text-sm md:text-base py-3"
              >
                Construction
              </TabsTrigger>
              <TabsTrigger
                value="civil"
                className="data-[state=active]:bg-blue-700 data-[state=active]:text-white text-sm md:text-base py-3"
              >
                Civil
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Telecom Tab */}
          <TabsContent value="telecom" className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.telecom.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-sm font-medium text-white">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Crane Tab */}
          <TabsContent value="crane" className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.crane.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-sm font-medium text-white">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Construction Tab */}
          <TabsContent value="construction" className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.construction.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-sm font-medium text-white">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Civil Tab */}
          <TabsContent value="civil" className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.civil.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-sm font-medium text-white">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
