export default function Solutions() {
  return (
    <section className="h-screen flex flex-col lg:flex-row">
      {/* Column 1 - Dark Background with Text */}
      <div
        className="flex-1 relative flex flex-col justify-between p-8 lg:p-12 text-white h-[33.33vh] lg:h-full"
        style={{ backgroundColor: "#151623" }}
      >
        {/* Top Left Title */}
        <div className="animate-element">
          <h2 className="text-4xl lg:text-5xl font-semibold text-white">
            Our Courses
          </h2>
        </div>

        {/* Bottom Content */}
        <div className="space-y-6 animate-element">
          <p className="text-xl lg:text-2xl text-white/90">
            Choose from our range of nationally accredited training programs
          </p>
          <a
            href="/courses"
            className="px-6 py-3 lg:px-8 lg:py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all font-medium text-sm lg:text-base inline-block text-center"
          >
            View All Courses
          </a>
        </div>
      </div>

      {/* Column 2 - Image Background with Bottom Text */}
      <div
        className="flex-1 relative flex flex-col justify-end p-8 lg:p-12 text-white h-[33.33vh] lg:h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/download.png')" }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Bottom Content */}
        <div className="relative z-10 space-y-3 animate-element">
          <h3 className="text-5xl lg:text-6xl font-bold">First Aid & CPR</h3>
          <p className="text-lg lg:text-xl text-white/90">
            Essential life-saving skills for workplaces, schools and
            individuals. Courses starting from $55.
          </p>
        </div>
      </div>

      {/* Column 3 - Image Background with Bottom Text */}
      <div
        className="flex-1 relative flex flex-col justify-end p-8 lg:p-12 text-white h-[33.33vh] lg:h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/image.png')" }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Bottom Content */}
        <div className="relative z-10 space-y-3 animate-element">
          <h3 className="text-4xl lg:text-5xl font-bold">NDIS & Community</h3>
          <p className="text-lg lg:text-xl text-white/90">
            Specialised training for support workers, disability services and
            community care providers.
          </p>
        </div>
      </div>
    </section>
  );
}
