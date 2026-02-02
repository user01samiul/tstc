"use client";

interface CTASectionProps {
  courseName: string;
  onBookNowClick: () => void;
}

export default function CTASection({
  courseName,
  onBookNowClick,
}: CTASectionProps) {
  return (
    <section className="py-20 md:py-32 px-5 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6 text-black">
          Ready to get started?
        </h2>
        <p className="text-xl sm:text-2xl text-black/70 mb-10 max-w-2xl mx-auto">
          Book your {courseName} course today and gain essential life-saving
          skills.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onBookNowClick}
            className="px-10 py-5 bg-pink text-white rounded-full hover:bg-pink-fade transition-all font-semibold text-lg cursor-pointer"
          >
            Book This Course
          </button>
          <a
            href="/courses"
            className="px-10 py-5 bg-white text-pink border-2 border-pink rounded-full hover:bg-pink hover:text-white transition-all font-semibold text-lg inline-block cursor-pointer"
          >
            View All Courses
          </a>
        </div>
      </div>
    </section>
  );
}
