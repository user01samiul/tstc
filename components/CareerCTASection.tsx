import Link from "next/link";
import { FaBriefcase } from "react-icons/fa";

const CareerCTASection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-gray-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-anton uppercase">
            Looking for a role at T&S?
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join our team of dedicated traffic management professionals. We're always looking for skilled traffic controllers, team leaders, and support staff who are passionate about road safety.
          </p>
          <Link
            href="/career"
            className="inline-flex items-center justify-center bg-btn hover:bg-btn/90 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <FaBriefcase className="mr-3 text-xl" />
            View Career Opportunities
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareerCTASection;
