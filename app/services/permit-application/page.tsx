"use client";

import ContactForm from "@/components/ContactForm";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const PermitApplication = () => {
  const [activeTab, setActiveTab] = useState("tf-nsw");

  return (
    <>
      <Head>
        <title>Approvals & Permits | T&S Traffic Solutions</title>
        <meta
          name="description"
          content="Professional permit and approval services for road occupancy licences, council permits, bus approvals, and more across NSW."
        />
      </Head>

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900">
          <div className="absolute inset-0">
            <Image
              src="/DSC00732.JPG"
              alt="Permit Application Services"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Approvals & <span className="text-[#2B7FFF]">Permits</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl">
              Navigating approvals can be time-consuming — we take care of it for you.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="lg:flex lg:items-start lg:gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:w-1/4 mb-8 lg:mb-0">
              <nav className="space-y-1">
                <a
                  href="#tf-nsw"
                  onClick={() => setActiveTab("tf-nsw")}
                  className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    activeTab === "tf-nsw"
                      ? "bg-btn/10 text-btn"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  TfNSW TMC ROL
                </a>
                <a
                  href="#council-permits"
                  onClick={() => setActiveTab("council-permits")}
                  className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    activeTab === "council-permits"
                      ? "bg-btn/10 text-btn"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Council Permits
                </a>
                <a
                  href="#sta-bus"
                  onClick={() => setActiveTab("sta-bus")}
                  className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    activeTab === "sta-bus"
                      ? "bg-btn/10 text-btn"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  STA Bus Approvals
                </a>
                <a
                  href="#emergency-approvals"
                  onClick={() => setActiveTab("emergency-approvals")}
                  className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    activeTab === "emergency-approvals"
                      ? "bg-btn/10 text-btn"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Emergency Approvals
                </a>
              </nav>

              <div className="mt-8 bg-btn/10 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-btn mb-4 flex items-center gap-2">
                  <FaEnvelope />
                  Contact Information
                </h3>
                <ul className="text-gray-700 mb-4 space-y-2">
                  <li>
                    <span className="font-semibold">Permits Email:</span>{" "}
                    <a
                      href="mailto:Plans@tstc.com.au"
                      className="text-btn hover:underline"
                    >
                      Plans@tstc.com.au
                    </a>
                  </li>
                  <li>
                    <span className="font-semibold">Phone:</span>{" "}
                    <a
                      href="tel:+611300008782"
                      className="text-btn hover:underline"
                    >
                      +61 1300 008 782
                    </a>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-btn hover:bg-btn/90"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* TfNSW TMC ROL */}
              {activeTab === "tf-nsw" && (
                <div id="tf-nsw">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Road Occupancy Licences (ROLs) through TfNSW
                  </h2>
                  <div className="prose prose-blue max-w-none">
                    <p className="text-lg text-gray-600">
                      Our team manages the complete submission and approval process for Road Occupancy Licences through Transport for NSW (TfNSW).
                    </p>

                    <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        What We Handle
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Complete ROL application preparation and submission</li>
                        <li>Traffic Management Plan development and coordination</li>
                        <li>Liaison with TfNSW Traffic Management Committee representatives</li>
                        <li>Approval tracking and follow-up communications</li>
                        <li>Compliance documentation and record keeping</li>
                      </ul>
                    </div>

                    <div className="mt-8">
                      <p className="text-gray-600">
                        With established relationships across NSW road authorities, T&S ensures your paperwork is handled efficiently, keeping your project on schedule and compliant.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Council Permits */}
              {activeTab === "council-permits" && (
                <div id="council-permits">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Council Permits & Local Road Access
                  </h2>
                  <div className="prose prose-blue max-w-none">
                    <p className="text-lg text-gray-600">
                      We manage council permit applications and local road access approvals across multiple NSW councils.
                    </p>

                    <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Our Services Include
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Council road occupancy permits</li>
                        <li>Local road access approvals</li>
                        <li>Footpath closure permits</li>
                        <li>Works zone applications</li>
                        <li>Parking bay suspensions</li>
                        <li>Hoarding and scaffolding permits</li>
                      </ul>
                    </div>

                    <div className="mt-8">
                      <p className="text-gray-600">
                        Our established relationships with councils throughout NSW enable us to navigate each council's unique requirements efficiently, minimizing delays and ensuring compliance.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Bus Approvals */}
              {activeTab === "sta-bus" && (
                <div id="sta-bus">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Bus Approvals
                  </h2>
                  <div className="prose prose-blue max-w-none">
                    <p className="text-lg text-gray-600">
                      We coordinate bus approvals and manage liaison with transport authorities for works affecting bus routes and stops.
                    </p>

                    <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Bus Approval Management
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Coordination with bus operators for works near bus routes</li>
                        <li>Temporary bus stop relocations and approvals</li>
                        <li>Bus lane closure applications</li>
                        <li>Impact assessments for public transport</li>
                        <li>Ongoing communication with transport authorities</li>
                      </ul>
                    </div>

                    <div className="mt-8">
                      <p className="text-gray-600">
                        Our team ensures all bus-related approvals are obtained efficiently, minimizing disruption to public transport services while keeping your project moving forward.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Emergency Approvals */}
              {activeTab === "emergency-approvals" && (
                <div id="emergency-approvals">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Emergency Approvals
                  </h2>
                  <div className="prose prose-blue max-w-none">
                    <p className="text-lg text-gray-600">
                      For urgent situations requiring immediate approvals, our team provides rapid response permit services.
                    </p>

                    <div className="mt-8 bg-btn/10 border-l-4 border-btn p-6 mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <FaPhoneAlt className="text-btn text-xl" />
                        <h3 className="text-lg font-medium text-btn">
                          24/7 Emergency Response
                        </h3>
                      </div>
                      <p className="text-gray-700">
                        Contact us anytime for urgent permit requirements: <a href="tel:+611300008782" className="font-semibold text-btn hover:underline">+61 1300 008 782</a>
                      </p>
                    </div>

                    <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Emergency Services Include
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Police notifications for emergency works</li>
                        <li>Utility and third-party authority clearances</li>
                        <li>Event traffic permits and special approvals</li>
                        <li>Rapid response permit applications</li>
                        <li>Direct liaison with approval authorities</li>
                      </ul>
                    </div>

                    <div className="mt-8">
                      <p className="text-gray-600">
                        Our established relationships and 24-hour response capability ensure critical approvals are obtained quickly, keeping essential works on track.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-btn">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">
                Ready to streamline your permit process?
              </span>
              <span className="block text-white/80">
                Contact our permit specialists today.
              </span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-btn bg-white hover:bg-btn/10"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </>
  );
};

export default PermitApplication;
