import aboutImg from "@/assets/cafe-corner.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="overflow-hidden rounded-sm">
            <img
              src={aboutImg}
              alt="Cozy reading corner at Cafe Aroma White"
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-3 font-sans">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-8 leading-tight">
              Where Every Sip <br />
              <em className="italic font-normal">Tells a Story</em>
            </h2>
            <div className="space-y-5 text-muted-foreground font-sans leading-relaxed">
              <p>
                At Cafe Aroma White, we believe coffee is more than a drink — it's a ritual. 
                Every bean is ethically sourced from small farms across Colombia, Ethiopia, and Guatemala, 
                roasted in small batches to bring out its unique character.
              </p>
              <p>
                Our space is designed for moments of calm. Whether you're deep in work, 
                catching up with a friend, or simply watching the world go by, 
                we've created a sanctuary where time slows down and every cup feels like home.
              </p>
            </div>
            <div className="mt-10 flex gap-12">
              <div>
                <p className="font-serif text-3xl font-medium text-primary">12+</p>
                <p className="text-sm text-muted-foreground mt-1">Origin Farms</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-medium text-primary">100%</p>
                <p className="text-sm text-muted-foreground mt-1">Ethically Sourced</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-medium text-primary">Daily</p>
                <p className="text-sm text-muted-foreground mt-1">Fresh Roasted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
