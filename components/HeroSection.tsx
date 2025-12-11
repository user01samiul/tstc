
import Image from 'next/image';
import Link from 'next/link';
import { FaHardHat, FaTrafficLight, FaRoad, FaPhoneAlt, FaClock } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="font-opensans relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/75" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 w-full max-w-6xl px-6 lg:px-8">
        <div className="mx-auto text-center text-white space-y-4">
          {/* Company Logo */}
          <div className="flex justify-center mb-3 animate-fade-in">
            <Image
              src="/logo.png"
              alt="T&S Traffic Solutions Logo"
              width={160}
              height={74}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-anton font-bold tracking-wide">
            SAFE AND EFFICIENT <br />
            <span className="text-btn">TRAFFIC CONTROL</span> SOLUTIONS
          </h1>

          {/* Slogan */}
          <p className="text-xl md:text-2xl lg:text-3xl font-anton text-btn italic">
            "A Safe Way Home"
          </p>

          {/* Experts in Road Safety */}
          <p className="text-lg md:text-xl font-semibold tracking-wide">
            Experts in Road Safety
          </p>

          {/* Description */}
          <p className="text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed opacity-90">
            From lane closures on Motorways to pedestrian management, we provide reliable and effective traffic control services for projects of all sizes.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center pt-4">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-btn hover:bg-btn/90 text-white px-8 py-3 rounded-lg font-semibold text-base transition-all duration-300 hover:shadow-2xl hover:shadow-btn/50 hover:scale-105"
            >
              <FaPhoneAlt className="text-base" />
              Contact Us Today
            </Link>
          </div>

          {/* Feature Icons - Compact */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              <div className="bg-btn/30 p-3 rounded-full backdrop-blur-sm">
                <FaHardHat className="text-2xl text-btn" />
              </div>
              <span className="font-medium text-sm">Construction</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              <div className="bg-btn/30 p-3 rounded-full backdrop-blur-sm">
                <FaTrafficLight className="text-2xl text-btn" />
              </div>
              <span className="font-medium text-sm">Traffic Control</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              <div className="bg-btn/30 p-3 rounded-full backdrop-blur-sm">
                <FaRoad className="text-2xl text-btn" />
              </div>
              <span className="font-medium text-sm">Road Safety</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              <div className="bg-btn/30 p-3 rounded-full backdrop-blur-sm">
                <FaClock className="text-2xl text-btn" />
              </div>
              <span className="font-medium text-sm">24/7 Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scrolling Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-btn/60 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-btn rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;