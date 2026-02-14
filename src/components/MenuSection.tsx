import { useState } from "react";

type MenuItem = { name: string; price: string; desc: string };

const menuData: Record<string, MenuItem[]> = {
  Coffee: [
    { name: "Classic Espresso", price: "$3.50", desc: "Rich, bold single-origin shot" },
    { name: "Flat White", price: "$4.50", desc: "Velvety smooth with silky microfoam" },
    { name: "Café Latte", price: "$5.00", desc: "Creamy espresso with steamed milk" },
    { name: "Pour Over", price: "$5.50", desc: "Hand-brewed, single-origin highlight" },
    { name: "Cold Brew", price: "$5.00", desc: "Slow-steeped 18 hours, naturally sweet" },
    { name: "Mocha", price: "$5.50", desc: "Espresso, dark chocolate & steamed milk" },
  ],
  Tea: [
    { name: "Matcha Latte", price: "$5.00", desc: "Ceremonial grade, oat milk" },
    { name: "English Breakfast", price: "$3.50", desc: "Robust, malty classic blend" },
    { name: "Chamomile", price: "$3.50", desc: "Calming, floral herbal infusion" },
    { name: "Earl Grey", price: "$3.50", desc: "Bergamot-scented black tea" },
  ],
  Breakfast: [
    { name: "Avocado Toast", price: "$9.50", desc: "Sourdough, cherry tomatoes, microgreens" },
    { name: "Eggs Benedict", price: "$12.00", desc: "Poached eggs, hollandaise, brioche" },
    { name: "Açaí Bowl", price: "$11.00", desc: "Granola, fresh berries, honey drizzle" },
    { name: "Smoked Salmon Bagel", price: "$10.50", desc: "Cream cheese, capers, red onion" },
  ],
  Desserts: [
    { name: "Butter Croissant", price: "$4.00", desc: "Flaky, golden, freshly baked daily" },
    { name: "Tiramisu", price: "$7.50", desc: "Espresso-soaked, mascarpone layered" },
    { name: "Banana Bread", price: "$4.50", desc: "Warm, walnut-studded, house recipe" },
    { name: "Dark Chocolate Tart", price: "$6.50", desc: "Rich ganache, sea salt finish" },
  ],
};

const tabs = Object.keys(menuData);

const MenuSection = () => {
  const [active, setActive] = useState(tabs[0]);

  return (
    <section id="menu" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-3 font-sans">
            Our Offerings
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">
            The Menu
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 md:gap-6 mb-14 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`font-sans text-sm tracking-widest uppercase px-5 py-2.5 rounded-sm transition-all duration-300 ${
                active === tab
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="max-w-2xl mx-auto space-y-0">
          {menuData[active].map((item, i) => (
            <div
              key={item.name}
              className="flex items-baseline justify-between py-5 border-b border-border/60 animate-fade-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div>
                <h3 className="font-serif text-lg text-foreground">{item.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
              <span className="font-sans text-sm font-medium text-accent ml-4 shrink-0">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
