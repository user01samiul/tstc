import Link from "next/link";
import { FaBriefcase } from "react-icons/fa";

const CareerCTASection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-anton uppercase">
            Looking for a role at T&S?
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Allow for a section for employees to apply
          </p>
          <Link
            href="/career"
            className="inline-flex items-center justify-center bg-white text-blue-700 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <FaBriefcase className="mr-3 text-xl" />
            Straight to Careers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareerCTASection;
