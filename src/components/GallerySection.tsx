import img1 from "@/assets/cafe-interior-1.jpg";
import img2 from "@/assets/cafe-food-1.jpg";
import img3 from "@/assets/cafe-barista.jpg";
import img4 from "@/assets/cafe-flatlay.jpg";
import img5 from "@/assets/cafe-food-2.jpg";
import img6 from "@/assets/cafe-corner.jpg";

const images = [
  { src: img1, alt: "Warm cafe interior with brick walls" },
  { src: img2, alt: "Fresh croissant with cappuccino" },
  { src: img3, alt: "Barista crafting latte art" },
  { src: img4, alt: "Coffee beans and pour-over setup" },
  { src: img5, alt: "Avocado toast with matcha latte" },
  { src: img6, alt: "Cozy reading corner" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-3 font-sans">
            Our Space
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
            Gallery
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-sm group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
