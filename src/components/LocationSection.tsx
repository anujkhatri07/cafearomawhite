import { MapPin, Clock } from "lucide-react";

const hours = [
  { day: "Monday – Friday", time: "7:00 AM – 8:00 PM" },
  { day: "Saturday", time: "8:00 AM – 9:00 PM" },
  { day: "Sunday", time: "8:00 AM – 6:00 PM" },
];

const LocationSection = () => {
  return (
    <section id="location" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-3 font-sans">
            Find Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
            Location & Hours
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Map placeholder */}
          <div className="rounded-sm overflow-hidden bg-cream-dark h-80 md:h-full min-h-[320px]">
            <iframe
              title="Cafe Aroma White Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2!2d-73.987!3d40.748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzUyLjgiTiA3M8KwNTknMTMuMiJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={20} className="text-accent" />
                <h3 className="font-serif text-xl text-foreground">Address</h3>
              </div>
              <p className="text-muted-foreground font-sans leading-relaxed pl-8">
                123 Aroma Street, Suite 4<br />
                Manhattan, New York, NY 10001
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Clock size={20} className="text-accent" />
                <h3 className="font-serif text-xl text-foreground">Opening Hours</h3>
              </div>
              <div className="pl-8 space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between font-sans text-sm">
                    <span className="text-foreground">{h.day}</span>
                    <span className="text-muted-foreground">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
