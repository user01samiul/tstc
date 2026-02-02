export function HeroStats() {
  const stats = [
    { value: "1500+", label: "Students Trained" },
    { value: "98%", label: "Pass Rate" },
    { value: "50+", label: "Corporate Clients" }
  ];

  return (
    <div className="flex flex-wrap gap-8 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col">
          <div className="text-3xl md:text-4xl font-bold text-white mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-white/60">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
