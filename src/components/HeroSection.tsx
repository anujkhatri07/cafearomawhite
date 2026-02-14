import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-espresso/60" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-sm tracking-[0.3em] uppercase text-cream/80 mb-6 font-sans animate-fade-up">
          Est. 2024 · Specialty Coffee
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-medium leading-tight text-cream mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Brewing Moments,
          <br />
          <em className="italic font-normal">One Cup at a Time</em>
        </h1>
        <a
          href="#menu"
          className="inline-block bg-cream text-espresso font-sans text-sm tracking-widest uppercase px-10 py-4 rounded-sm hover:bg-cream-dark transition-colors duration-300 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          View Menu
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-cream/40" />
      </div>
    </section>
  );
};

export default HeroSection;
