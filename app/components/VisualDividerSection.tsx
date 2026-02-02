import Image from "next/image";

interface VisualDividerItem {
  src: string;
  alt: string;
  label: string;
}

interface VisualDividerSectionProps {
  title?: string;
  titleHighlight?: string;
  description?: string;
  items: VisualDividerItem[];
}

const VisualDividerSection = ({
  title = "",
  titleHighlight = "",
  description,
  items,
}: VisualDividerSectionProps) => {
  return (
    <section className="py-20 md:py-24 px-5 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {(title || titleHighlight) && (
          <div className="text-center mb-16 animate-element">
            <div className="w-16 h-1 bg-btn mx-auto mb-6"></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {title}{" "}
              {titleHighlight && (
                <span className="text-btn">{titleHighlight}</span>
              )}
            </h2>
            {description && (
              <p
                className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed"
                style={{ color: "#8E8E95" }}
              >
                {description}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-element">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg group"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-bold font-anton uppercase">
                    {item.label}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualDividerSection;
