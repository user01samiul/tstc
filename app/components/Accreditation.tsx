export default function Accreditation() {
  const partners = [
    {
      name: "Allens Training",
      description: "Registered Training Organisation",
    },
    {
      name: "Nationally Recognised",
      description: "Australian Qualifications Framework",
    },
    {
      name: "NDIS Approved",
      description: "Quality & Safeguards Commission",
    },
    {
      name: "First Aid Accredited",
      description: "Australian Resuscitation Council",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-5 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="mb-16 md:mb-20 animate-element">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-pink mb-4">
            Accredited & Recognised
          </h2>
          <p className="text-lg sm:text-xl text-black/70 max-w-2xl">
            Our courses meet national standards and are recognised across
            Australia
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10">
          {partners.map((partner, index) => (
            <div key={index} className="space-y-3 animate-element">
              {/* Horizontal Line */}
              <div className="w-12 h-px bg-black"></div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-blue">
                {partner.name}
              </h3>

              {/* Description */}
              <p
                className="text-base leading-relaxed"
                style={{ color: "#8E8E95" }}
              >
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
