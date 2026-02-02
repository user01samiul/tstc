export function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button className="px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all font-semibold text-base">
        Book a Course
      </button>
      <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-black/90 transition-all font-medium text-base">
        Group Training Enquiry
      </button>
    </div>
  );
}
