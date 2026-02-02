import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* Mobile Layout */}
      <section className="md:hidden relative min-h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        {/* Blur Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        {/* Hero Content */}
        <div className="relative w-full pt-24 pb-20 min-h-dvh flex flex-col justify-between px-5">
          <div className="space-y-6 flex-1 flex flex-col justify-center pb-8">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight font-anton tracking-wide">
              SAFE AND EFFICIENT <br />
              <span className="text-btn">TRAFFIC CONTROL</span> SOLUTIONS
            </h1>

            {/* Slogan */}
            {/* <p className="text-2xl sm:text-3xl font-anton text-btn italic">
              "A Safe Way Home"
            </p> */}

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-semibold tracking-wide text-white">
              "A Safe Way Home" | Experts in Road Safety
            </p>

            {/* Description */}
            <p className="text-base text-white/80">
              From lane closures on Motorways to pedestrian management, we
              provide reliable and effective traffic control services for
              projects of all sizes.
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-pink text-white rounded-full hover:bg-pink-fade transition-all font-semibold text-base text-center cursor-pointer"
              >
                Contact Us Today
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 bg-white text-pink rounded-full hover:bg-btn hover:text-white transition-all font-semibold text-base text-center cursor-pointer shadow-xl"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Bottom Navigation */}
          <nav className="flex justify-center gap-4 sm:gap-8 pb-4">
            <Link
              href="/services"
              className="text-xs sm:text-sm font-medium text-white/90 hover:text-white transition-all border-b border-white/30 hover:border-white pb-0.5 tracking-wide uppercase"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-xs sm:text-sm font-medium text-white/90 hover:text-white transition-all border-b border-white/30 hover:border-white pb-0.5 tracking-wide uppercase"
            >
              About us
            </Link>
            <Link
              href="/contact"
              className="text-xs sm:text-sm font-medium text-white/90 hover:text-white transition-all border-b border-white/30 hover:border-white pb-0.5 tracking-wide uppercase"
            >
              Contact
            </Link>
          </nav>
        </div>
      </section>

      {/* Desktop Layout - Keep original full-screen design */}
      <section className="hidden md:block relative min-h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        {/* Blur Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        {/* Hero Content */}
        <div className="relative w-full pt-32 pb-20 min-h-screen flex flex-col justify-between">
          <div className="flex-1 flex items-center">
            {/* Main Content - Full Width */}
            <div className="w-full space-y-4 pl-5 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-24 pr-5 sm:pr-8 md:pr-12 lg:pr-16 xl:pr-24">
              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-anton tracking-wide">
                SAFE AND EFFICIENT <br />
                <span className="text-btn">TRAFFIC CONTROL</span> SOLUTIONS
              </h1>

              {/* Slogan */}
              {/* <p className="text-3xl md:text-4xl font-anton text-btn italic">
                "A Safe Way Home"
              </p> */}

              {/* Subtitle */}
              <p className="text-xl md:text-2xl font-semibold tracking-wide text-white">
                "A Safe Way Home" | Experts in Road Safety
              </p>

              {/* Description */}
              <p className="text-lg text-white/80">
                From lane closures on Motorways to pedestrian management, <br />
                we provide reliable and effective traffic control services for
                projects of all sizes.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2 pb-16 md:pb-20 lg:pb-24">
                <Link
                  href="/contact"
                  className="px-6 md:px-8 py-3 md:py-4 bg-pink text-white rounded-full hover:bg-pink-fade transition-all font-semibold text-base md:text-lg text-center cursor-pointer whitespace-nowrap"
                >
                  Contact Us Today
                </Link>
                <Link
                  href="/services"
                  className="px-6 md:px-8 py-3 md:py-4 bg-white text-pink rounded-full hover:bg-btn hover:text-white transition-all font-semibold text-base md:text-lg text-center cursor-pointer shadow-xl whitespace-nowrap"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Navigation - Professional Links */}
          <nav className="flex justify-center gap-12 pb-8">
            <Link
              href="/services"
              className="text-base font-medium text-white/90 hover:text-white transition-all border-b border-white/30 hover:border-white pb-0.5 tracking-wide uppercase text-sm"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-base font-medium text-white/90 hover:text-white transition-all border-b border-white/30 hover:border-white pb-0.5 tracking-wide uppercase text-sm"
            >
              About us
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium text-white/90 hover:text-white transition-all border-b border-white/30 hover:border-white pb-0.5 tracking-wide uppercase text-sm"
            >
              Contact
            </Link>
          </nav>
        </div>
      </section>
    </>
  );
}
