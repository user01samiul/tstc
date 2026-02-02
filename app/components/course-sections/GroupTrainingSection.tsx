"use client";

import { useState } from "react";

interface GroupTrainingSectionProps {
  courseName?: string;
  courseId?: string;
}

export default function GroupTrainingSection({
  courseName,
  courseId,
}: GroupTrainingSectionProps) {
  const [formData, setFormData] = useState({
    organizationName: "",
    coursesOfInterest: courseName || "",
    numberOfParticipants: "",
    preferredDates: "",
    locationSuburb: "",
    contactPerson: "",
    contactPhone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/group-enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          courseId,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          organizationName: "",
          coursesOfInterest: courseName || "",
          numberOfParticipants: "",
          preferredDates: "",
          locationSuburb: "",
          contactPerson: "",
          contactPhone: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Failed to submit enquiry:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-20 px-5 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Group & Workplace Training
          </h2>
          <p className="text-xl text-black/70">
            Need training for your team? We can deliver this course at your
            workplace with customised scheduling.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Submit request", icon: "📋" },
              { step: "2", title: "Receive quote", icon: "💰" },
              { step: "3", title: "Confirm and schedule", icon: "📅" },
              { step: "4", title: "Training delivered on site", icon: "✅" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-black text-white rounded-full flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <div className="text-sm font-bold text-black mb-1">
                  Step {item.step}
                </div>
                <div className="text-sm text-black/70">{item.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Message */}
        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
            <p className="font-semibold">Thank you for your enquiry!</p>
            <p className="text-sm">
              We'll get back to you within 24 hours with a customised quote.
            </p>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === "error" && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
            <p className="font-semibold">Something went wrong</p>
            <p className="text-sm">Please try again or contact us directly.</p>
          </div>
        )}

        {/* Enquiry Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-black/5 to-black/10 p-8 rounded-2xl space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Organisation Name *
              </label>
              <input
                type="text"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-black/20 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/20"
                placeholder="Your organisation"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Course(s) of Interest *
              </label>
              <input
                type="text"
                name="coursesOfInterest"
                value={formData.coursesOfInterest}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-black/20 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/20"
                placeholder="e.g., Mental Health First Aid"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Number of Participants *
              </label>
              <input
                type="text"
                name="numberOfParticipants"
                value={formData.numberOfParticipants}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-black/20 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/20"
                placeholder="e.g., 15-20 people"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Preferred Dates *
              </label>
              <input
                type="text"
                name="preferredDates"
                value={formData.preferredDates}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-black/20 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/20"
                placeholder="e.g., Week of Jan 15"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Location Suburb *
              </label>
              <input
                type="text"
                name="locationSuburb"
                value={formData.locationSuburb}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-black/20 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/20"
                placeholder="e.g., Melbourne CBD"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Contact Person *
              </label>
              <input
                type="text"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-black/20 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Contact Phone *
              </label>
              <input
                type="tel"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-black/20 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/20"
                placeholder="0400 000 000"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Additional Information
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-black/20 rounded-2xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-black/20 resize-none"
              placeholder="Tell us about your specific training needs..."
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-pink text-white rounded-full hover:bg-pink-fade transition-all font-semibold text-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Enquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}
