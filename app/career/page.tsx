"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaHardHat, FaPhoneAlt, FaRoad, FaTrafficLight } from "react-icons/fa";
import AnimatedSection from "../components/AnimatedSection";

interface FormData {
  firstName: string;
  familyName: string;
  phoneNumber: string;
  email: string;
  streetAddress: string;
  suburb: string;
  message: string;
  canDriveManual: string;
  hasOwnVehicle: string;
  shiftPreference: string;
  daysAvailable: string[];
  qualifications: string[];
}

const JobOpportunities = () => {
  const initialFormData: FormData = {
    firstName: "",
    familyName: "",
    phoneNumber: "",
    email: "",
    streetAddress: "",
    suburb: "",
    message: "",
    canDriveManual: "",
    hasOwnVehicle: "",
    shiftPreference: "",
    daysAvailable: [],
    qualifications: [],
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );
  const fileRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      qualifications: checked
        ? [...prev.qualifications, value]
        : prev.qualifications.filter((q) => q !== value),
    }));
  };

  const handleDaysCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      daysAvailable: checked
        ? [...prev.daysAvailable, value]
        : prev.daysAvailable.filter((d) => d !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    const submitData = new FormData();
    submitData.append("firstName", formData.firstName);
    submitData.append("familyName", formData.familyName);
    submitData.append("phoneNumber", formData.phoneNumber);
    submitData.append("email", formData.email);
    submitData.append("streetAddress", formData.streetAddress);
    submitData.append("suburb", formData.suburb);
    submitData.append("message", formData.message);
    submitData.append("canDriveManual", formData.canDriveManual);
    submitData.append("hasOwnVehicle", formData.hasOwnVehicle);
    submitData.append("shiftPreference", formData.shiftPreference);
    formData.daysAvailable.forEach((d) =>
      submitData.append("daysAvailable[]", d),
    );
    formData.qualifications.forEach((q) =>
      submitData.append("qualifications[]", q),
    );

    if (fileRef.current && fileRef.current.files) {
      for (let file of fileRef.current.files) {
        submitData.append("files", file);
      }
    }

    try {
      const response = await fetch("/api/career", {
        method: "POST",
        body: submitData,
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData(initialFormData);
        if (fileRef.current) {
          fileRef.current.value = "";
        }
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00810.JPG"
            alt="Career Opportunities"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-5 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center text-white space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-anton uppercase">
              T&S <span className="text-btn">CAREERS</span> <br />
              <span className="text-btn">TRAFFIC CONTROL JOBS</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Join our dynamic team to ensure road safety and efficient traffic
              management
            </p>
            <div className="pt-6">
              <Link
                href="#application-form"
                className="inline-flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Working with T&S Section */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              {/* Left: Content */}
              <div className="space-y-8 animate-element">
                <div>
                  <div className="w-16 h-1 bg-btn mb-6"></div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Working With <span className="text-btn">T&S</span>
                  </h2>
                </div>

                <div
                  className="space-y-6 text-lg leading-relaxed"
                  style={{ color: "#8E8E95" }}
                >
                  <p>
                    At T&S Traffic Solutions, you'll join a vibrant team
                    dedicated to ensuring road safety and smooth traffic flow.
                    From major roadworks to small construction sites, our
                    diverse projects offer opportunities for growth and skill
                    development.
                  </p>
                  <p>
                    We foster a supportive and collaborative environment that
                    values innovation and job satisfaction. Our team, including
                    traffic controllers, team leaders, TMA drivers, and
                    spotters, shares a passion for excellence in traffic
                    management.
                  </p>
                  <p>
                    If you're driven to make a difference in road safety,
                    explore our job opportunities and apply today to become part
                    of T&S Traffic Solutions.
                  </p>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative animate-element">
                <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/montage/4. Career/Career/Ute pic 2.png"
                    alt="Working with T&S"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Employment Opportunities Section */}
      <AnimatedSection direction="right">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              {/* Left: Image */}
              <div className="relative animate-element order-2 lg:order-1">
                <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/DSC00844.JPG"
                    alt="Employment Opportunities"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Right: Content */}
              <div className="space-y-8 animate-element order-1 lg:order-2">
                <div>
                  <div className="w-16 h-1 bg-btn mb-6"></div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Employment <span className="text-btn">Opportunities</span>
                  </h2>
                </div>

                <div
                  className="space-y-4 text-base leading-relaxed"
                  style={{ color: "#8E8E95" }}
                >
                  <p>
                    We're looking for passionate individuals to join our team.
                    To succeed, you'll need:
                  </p>

                  <ul className="space-y-3">
                    {[
                      "Current and valid driver's license (C Class)",
                      "Construction Induction Course (White Card)",
                      "RIISS00054 - Traffic Controller Skill Set",
                      "RIISS00055 - Traffic Management Implementer Skill Set",
                      "Basic reading and writing skills to interpret road traffic diagrams",
                      "Clear communication skills in English, including via radio",
                      "Ability to work effectively in a team environment",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-btn mr-3 flex-shrink-0 font-bold text-lg">
                          •
                        </span>
                        <span className="pt-0.5">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6">
                    <p className="mb-4">
                      Contact our office between 9am-5pm at{" "}
                      <a
                        href="tel:+611300008782"
                        className="text-btn font-semibold hover:underline"
                      >
                        +61 1300 008 782
                      </a>{" "}
                      or apply below.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Application Form Section */}
      <AnimatedSection direction="left">
        <section
          id="application-form"
          className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-white"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-element">
              <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Employment <span className="text-btn">Application</span>
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "#8E8E95" }}
              >
                Fill out the form below to apply for a position with T&S Traffic
                Solutions
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 animate-element bg-white rounded-2xl border-2 border-dashed border-gray-300 p-8 md:p-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-btn focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="familyName"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Family Name *
                  </label>
                  <input
                    type="text"
                    name="familyName"
                    id="familyName"
                    value={formData.familyName}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-btn focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-btn focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-btn focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="streetAddress"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Street Address *
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  id="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-btn focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="suburb"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Suburb *
                </label>
                <input
                  type="text"
                  name="suburb"
                  id="suburb"
                  value={formData.suburb}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-btn focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-btn focus:border-transparent"
                  rows={4}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Upload Documents (Cover Letter, Resume, License, Tickets)
                </label>
                <input
                  type="file"
                  multiple
                  ref={fileRef}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-btn focus:border-transparent"
                />
              </div>

              <div className="bg-gray-50 rounded-lg p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    Can you competently drive a manual vehicle? *
                  </label>
                  <div className="flex gap-6">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="canDriveManual"
                        value="Yes"
                        checked={formData.canDriveManual === "Yes"}
                        onChange={handleInputChange}
                        className="form-radio text-btn focus:ring-btn"
                        required
                      />
                      <span className="ml-2 text-gray-700">Yes</span>
                    </label>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="canDriveManual"
                        value="No"
                        checked={formData.canDriveManual === "No"}
                        onChange={handleInputChange}
                        className="form-radio text-btn focus:ring-btn"
                        required
                      />
                      <span className="ml-2 text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    Do you have your own vehicle? *
                  </label>
                  <div className="flex gap-6">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="hasOwnVehicle"
                        value="Yes"
                        checked={formData.hasOwnVehicle === "Yes"}
                        onChange={handleInputChange}
                        className="form-radio text-btn focus:ring-btn"
                        required
                      />
                      <span className="ml-2 text-gray-700">Yes</span>
                    </label>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="hasOwnVehicle"
                        value="No"
                        checked={formData.hasOwnVehicle === "No"}
                        onChange={handleInputChange}
                        className="form-radio text-btn focus:ring-btn"
                        required
                      />
                      <span className="ml-2 text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    Shift Preference *
                  </label>
                  <div className="flex flex-wrap gap-6">
                    {["Day Shift", "Night Shift", "Both"].map((shift) => (
                      <label
                        key={shift}
                        className="inline-flex items-center cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="shiftPreference"
                          value={shift}
                          checked={formData.shiftPreference === shift}
                          onChange={handleInputChange}
                          className="form-radio text-btn focus:ring-btn"
                          required
                        />
                        <span className="ml-2 text-gray-700">{shift}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">
                  Days Available (select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ].map((day) => (
                    <label
                      key={day}
                      className="inline-flex items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        value={day}
                        checked={formData.daysAvailable.includes(day)}
                        onChange={handleDaysCheckboxChange}
                        className="form-checkbox text-btn focus:ring-btn rounded"
                      />
                      <span className="ml-2 text-gray-700">{day}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">
                  Qualifications (select all that apply)
                </label>
                <div className="space-y-3">
                  {[
                    "Automatic Drivers Licence",
                    "Manual Drivers Licence",
                    "Operate TMA Card and HR Licence",
                    "OHS Induction (White Card)",
                    "Traffic Controller (Blue Card)",
                    "Implementer (Yellow Card)",
                    "PWZTMP (Red Card)",
                  ].map((qual) => (
                    <label
                      key={qual}
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        value={qual}
                        checked={formData.qualifications.includes(qual)}
                        onChange={handleCheckboxChange}
                        className="form-checkbox text-btn focus:ring-btn rounded"
                      />
                      <span className="ml-3 text-gray-700">{qual}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-btn hover:bg-btn/90 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 ${
                    isLoading
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:scale-105"
                  }`}
                >
                  {isLoading ? "Submitting..." : "Submit Application"}
                </button>
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 text-center">
                  Application submitted successfully! We'll be in touch soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 text-center">
                  Error submitting application. Please try again.
                </div>
              )}
            </form>
          </div>
        </section>
      </AnimatedSection>

      {/* Other Services Section */}
      <AnimatedSection direction="right">
        <section
          className="py-20 md:py-32 px-5 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#151623" }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Title */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight text-white mb-8 md:mb-12 animate-element">
              Explore Our
              <br />
              <span className="text-btn">Other Services</span>
            </h2>

            {/* Description */}
            <div className="mb-16 md:mb-20 max-w-4xl">
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed animate-element">
                Beyond career opportunities, T&S offers a comprehensive range of
                traffic management solutions. From detailed planning to
                emergency response, we're your trusted partner for all traffic
                control needs.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Traffic Management Plans",
                  icon: <FaHardHat className="text-3xl" />,
                  description:
                    "Customized plans designed to ensure safety and efficiency, tailored to your project's unique requirements.",
                },
                {
                  name: "Permit Applications",
                  icon: <FaTrafficLight className="text-3xl" />,
                  description:
                    "Streamlined permit application services for hassle-free project compliance with councils and authorities.",
                },
                {
                  name: "Equipment Hire",
                  icon: <FaRoad className="text-3xl" />,
                  description:
                    "Access a wide range of high-quality traffic management equipment, including signs, barriers, and more.",
                },
                {
                  name: "Emergency Response",
                  icon: <FaPhoneAlt className="text-3xl" />,
                  description:
                    "Our 24/7 emergency response service addresses unexpected traffic issues with rapid deployment and expertise.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="space-y-6 animate-element p-8 rounded-2xl border-2 border-dashed border-white/30 hover:border-white/50 transition-all duration-300 text-center"
                >
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className="p-5 bg-btn text-white rounded-full">
                      {service.icon}
                    </div>
                  </div>

                  {/* Service Name */}
                  <h3 className="text-xl font-semibold text-white">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-base leading-relaxed text-white/90">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection direction="left">
        <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8 animate-element">
              <div>
                <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Ready to Join <span className="text-btn">Our Team?</span>
                </h2>
                <p
                  className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
                  style={{ color: "#8E8E95" }}
                >
                  Contact us today to learn more about our exciting
                  opportunities in traffic management. Call us between 9am-5pm,
                  Monday to Friday.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                  href="tel:+611300008782"
                  className="inline-flex items-center justify-center gap-3 bg-btn hover:bg-btn/90 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
                >
                  <FaPhoneAlt className="text-lg" />
                  Call +61 1300 008 782
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-white border-2 border-btn text-btn hover:bg-btn hover:text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default JobOpportunities;
