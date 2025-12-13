"use client";

import ContactForm from "@/components/ContactForm";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const PermitApplication = () => {
  const [activeTab, setActiveTab] = useState("rol");

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

        {/* Overview Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Approvals & Permits
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Navigating approvals can be time-consuming — we take care of it for you.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our team manages the submission and approval process for:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#2B7FFF] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">
                  <strong>Road Occupancy Licences (ROLs)</strong> through TfNSW
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#2B7FFF] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">
                  <strong>Council permits</strong> and local road access approvals
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#2B7FFF] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">
                  <strong>Bus Approvals</strong>
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#2B7FFF] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">
                  <strong>Police notifications</strong> and event traffic permits
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#2B7FFF] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">
                  <strong>Utility and third-party authority clearances</strong>
                </p>
              </li>
            </ul>
            <p className="text-lg text-gray-600">
              With established relationships across multiple NSW councils and road authorities, T&S ensures your paperwork is handled efficiently, keeping your project on schedule and compliant.
            </p>
          </div>
        </div>

        {/* Detailed Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="lg:flex lg:items-start lg:gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:w-1/4 mb-8 lg:mb-0">
              <nav className="space-y-1">
                <a
                  href="#rol"
                  onClick={() => setActiveTab("rol")}
                  className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    activeTab === "rol"
                      ? "bg-[#2B7FFF]/10 text-[#2B7FFF]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Road Occupancy Licences (ROLs)
                </a>
                <a
                  href="#council-permits"
                  onClick={() => setActiveTab("council-permits")}
                  className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    activeTab === "council-permits"
                      ? "bg-[#2B7FFF]/10 text-[#2B7FFF]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Council Permits
                </a>
                <a
                  href="#bus-approvals"
                  onClick={() => setActiveTab("bus-approvals")}
                  className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    activeTab === "bus-approvals"
                      ? "bg-[#2B7FFF]/10 text-[#2B7FFF]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Bus Approvals
                </a>
                <a
                  href="#police-notifications"
                  onClick={() => setActiveTab("police-notifications")}
                  className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    activeTab === "police-notifications"
                      ? "bg-[#2B7FFF]/10 text-[#2B7FFF]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Police Notifications
                </a>
                <a
                  href="#utility-clearances"
                  onClick={() => setActiveTab("utility-clearances")}
                  className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    activeTab === "utility-clearances"
                      ? "bg-[#2B7FFF]/10 text-[#2B7FFF]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Utility & Authority Clearances
                </a>
              </nav>

              <div className="mt-8 bg-[#2B7FFF]/10 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-[#2B7FFF] mb-4 flex items-center gap-2">
                  <FaEnvelope />
                  Contact Information
                </h3>
                <ul className="text-gray-700 mb-4 space-y-2">
                  <li>
                    <span className="font-semibold">Permits Email:</span>{" "}
                    <a
                      href="mailto:Plans@tstc.com.au"
                      className="text-[#2B7FFF] hover:underline"
                    >
                      Plans@tstc.com.au
                    </a>
                  </li>
                  <li>
                    <span className="font-semibold">Phone:</span>{" "}
                    <a
                      href="tel:+611300008782"
                      className="text-[#2B7FFF] hover:underline"
                    >
                      +61 1300 008 782
                    </a>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#2B7FFF] hover:bg-[#2B7FFF]/90"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Road Occupancy Licences */}
              {activeTab === "rol" && (
                <div id="rol">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Road Occupancy Licences (ROLs)
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">Through TfNSW</p>
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
              {activeTab === "bus-approvals" && (
                <div id="bus-approvals">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Bus Approvals
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">STA and Transport Authority Coordination</p>
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

              {/* Police Notifications */}
              {activeTab === "police-notifications" && (
                <div id="police-notifications">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Police Notifications & Event Traffic Permits
                  </h2>
                  <div className="prose prose-blue max-w-none">
                    <p className="text-lg text-gray-600">
                      We manage all police notifications and event traffic permit applications, ensuring authorities are informed and approvals are obtained for special events and emergency works.
                    </p>

                    <div className="mt-8 bg-[#2B7FFF]/10 border-l-4 border-[#2B7FFF] p-6 mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <FaPhoneAlt className="text-[#2B7FFF] text-xl" />
                        <h3 className="text-lg font-medium text-[#2B7FFF]">
                          24/7 Emergency Response
                        </h3>
                      </div>
                      <p className="text-gray-700">
                        Contact us anytime for urgent permit requirements: <a href="tel:+611300008782" className="font-semibold text-[#2B7FFF] hover:underline">+61 1300 008 782</a>
                      </p>
                    </div>

                    <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Our Services Include
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Police notifications for emergency and planned works</li>
                        <li>Event traffic permits for community and sporting events</li>
                        <li>Film and production traffic management permits</li>
                        <li>Special event approvals and road closure notifications</li>
                        <li>Coordination with emergency services for critical works</li>
                      </ul>
                    </div>

                    <div className="mt-8">
                      <p className="text-gray-600">
                        Our established relationships with NSW Police and emergency services ensure timely notifications and approvals, keeping your events and projects compliant and on schedule.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Utility & Authority Clearances */}
              {activeTab === "utility-clearances" && (
                <div id="utility-clearances">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Utility & Third-Party Authority Clearances
                  </h2>
                  <div className="prose prose-blue max-w-none">
                    <p className="text-lg text-gray-600">
                      We coordinate all utility and third-party authority clearances, ensuring your works are approved by all relevant stakeholders before commencing.
                    </p>

                    <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Clearances We Manage
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Electrical utility clearances (Ausgrid, Endeavour Energy, Essential Energy)</li>
                        <li>Water and sewerage authority approvals (Sydney Water, Hunter Water, local councils)</li>
                        <li>Gas utility notifications and approvals (Jemena, APA Group)</li>
                        <li>Telecommunications and NBN coordination (Telstra, TPG, NBN Co)</li>
                        <li>Rail authority clearances (Sydney Trains, Transport for NSW)</li>
                        <li>Private property and easement access approvals</li>
                      </ul>
                    </div>

                    <div className="mt-8">
                      <p className="text-gray-600">
                        With comprehensive knowledge of utility and authority requirements across NSW, T&S ensures all necessary clearances are obtained efficiently, preventing costly delays and ensuring full compliance with all stakeholder requirements.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#2B7FFF]">
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
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#2B7FFF] bg-white hover:bg-[#2B7FFF]/10"
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
