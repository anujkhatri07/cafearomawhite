import { useState } from "react";
import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Newsletter */}
          <p className="text-sm tracking-[0.25em] uppercase opacity-70 mb-3 font-sans">
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
            Join Our Coffee Club
          </h2>
          <p className="text-sm opacity-70 font-sans mb-8 max-w-md mx-auto">
            Get exclusive offers, new menu updates, and a dose of warmth delivered to your inbox.
          </p>

          {submitted ? (
            <p className="text-sm font-sans opacity-80">
              Welcome to the club! ☕ Check your inbox.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm px-4 py-3 text-sm font-sans text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/50 transition-colors"
              />
              <button
                type="submit"
                className="bg-primary-foreground text-primary font-sans text-sm tracking-widest uppercase px-6 py-3 rounded-sm hover:opacity-90 transition-opacity"
              >
                Join
              </button>
            </form>
          )}

          {/* Social */}
          <div className="flex justify-center gap-6 mt-12 mb-10">
            <a href="#" aria-label="Instagram" className="opacity-60 hover:opacity-100 transition-opacity">
              <Instagram size={22} />
            </a>
            <a href="#" aria-label="Facebook" className="opacity-60 hover:opacity-100 transition-opacity">
              <Facebook size={22} />
            </a>
            <a href="mailto:hello@cafearomawhite.com" aria-label="Email" className="opacity-60 hover:opacity-100 transition-opacity">
              <Mail size={22} />
            </a>
          </div>

          <div className="border-t border-primary-foreground/15 pt-8">
            <p className="text-xs font-sans opacity-50">
              © 2024 Cafe Aroma White. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
