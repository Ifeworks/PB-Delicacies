import React from "react";
import { useApp } from "../../context/AppContext";
import Icon from "../common/Icon";

export function AboutView() {
  const { go, settings } = useApp();

  return (
    <div className="animate-fade-in pb-16">
      {/* ------------------------------------------------------------- */}
      {/*  HERO / STORY HEADER                                          */}
      {/* ------------------------------------------------------------- */}
      <section className="relative overflow-hidden" style={{ background: "var(--brown)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-float-up">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold mb-5"
              style={{ background: "rgba(217, 138, 61, 0.2)", color: "var(--gold)" }}
            >
              <Icon name="heart" size={14} /> Our Story & Heritage
            </span>
            <h1
              className="font-serif font-bold leading-tight"
              style={{ color: "#f4e6d2", fontSize: "clamp(2.3rem, 5vw, 3.8rem)" }}
            >
              Real Homemade Flavors, Cooked With Love in Ido-Ekiti.
            </h1>
            <p
              className="mt-5 text-base sm:text-lg leading-relaxed max-w-lg"
              style={{ color: "rgba(244, 230, 210, 0.85)" }}
            >
              At <strong className="text-white">PB DELICACIES</strong>, we believe great food brings family, friends, and communities together. We started with a simple vision: to give every home in Ido-Ekiti and surrounding Ekiti towns access to hot, delicious, hygienically prepared Nigerian delicacies every weekend.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => go("menu")}
                className="px-7 py-3.5 rounded-full font-bold shadow-md transition-transform hover:scale-105 active:scale-95 text-sm flex items-center gap-2"
                style={{ background: "var(--primary)", color: "#fff" }}
              >
                <span>View Weekend Menu</span>
                <Icon name="arrow" size={15} />
              </button>
              <button
                onClick={() => go("cooking")}
                className="px-7 py-3.5 rounded-full font-bold border border-white/20 hover:bg-white/10 transition-colors text-sm text-secondary flex items-center gap-2"
              >
                <Icon name="chef" size={16} />
                <span>Book Home Cooking</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div
              className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10"
              style={{ background: "var(--muted)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&h=700&fit=crop&auto=format"
                alt="PB DELICACIES kitchen team preparing fresh dishes"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="absolute -bottom-6 -left-4 sm:-left-6 bg-card rounded-2xl p-5 border border-border shadow-xl flex items-center gap-3.5 max-w-xs"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--secondary)", color: "var(--primary)" }}
              >
                <Icon name="food" size={24} />
              </div>
              <div>
                <div className="font-serif text-lg font-bold" style={{ color: "var(--brown)" }}>
                  100% Homemade
                </div>
                <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                  Never pre-frozen. Cooked fresh each weekend.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/*  THE EKITI FOOD STORY                                         */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              Rooted in Tradition
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2" style={{ color: "var(--brown)" }}>
              Why We Cook: Honoring Nigerian Culinary Heritage
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed" style={{ color: "var(--foreground)" }}>
              Ekiti State is famous across Nigeria for its rich agricultural heritage, fertile soils, and unmatched love for genuine Pounded Yam. We take pride in sourcing local Ekiti puna yams, sun-ripened native peppers, and farm-fresh meat to ensure every bite takes you back to mom's authentic kitchen.
            </p>
            <p className="mt-3 text-sm sm:text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              Whether you are a busy medical doctor on call at the Federal Medical Centre (FMC), a family looking forward to a relaxing Sunday lunch, or hosting friends for an event, PB DELICACIES eliminates the kitchen sweat so you can just enjoy.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-card rounded-2xl p-4 border border-border">
                <div className="font-serif text-2xl font-bold" style={{ color: "var(--primary)" }}>
                  500+
                </div>
                <div className="text-xs font-medium mt-1" style={{ color: "var(--muted-foreground)" }}>
                  Weekend Meals Delivered in Ido-Ekiti
                </div>
              </div>
              <div className="bg-card rounded-2xl p-4 border border-border">
                <div className="font-serif text-2xl font-bold" style={{ color: "var(--primary)" }}>
                  4.9★
                </div>
                <div className="text-xs font-medium mt-1" style={{ color: "var(--muted-foreground)" }}>
                  Average Local Satisfaction Rating
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=600&h=800&fit=crop&auto=format"
                alt="Pounded Yam and Egusi soup"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-md mt-6">
              <img
                src="https://images.unsplash.com/photo-1665332195309-9d75071138f0?w=600&h=800&fit=crop&auto=format"
                alt="Nigerian Jollof rice and fried chicken"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/*  OUR 4 CORE PROMISES                                          */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
            Our Values
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-1" style={{ color: "var(--brown)" }}>
            The PB DELICACIES Standard
          </h2>
          <p className="text-sm sm:text-base mt-2" style={{ color: "var(--muted-foreground)" }}>
            Every plate that leaves our kitchen and every meal we cook in your home adheres to our unbending culinary principles.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "fire" as const,
              title: "Cooked to Order",
              text: "We do not reheat old food. Every meal ordered for weekend delivery is prepared fresh to preserve maximum aroma and flavor.",
            },
            {
              icon: "shield" as const,
              title: "Kitchen Hygiene Pledge",
              text: "Our cooking stations adhere to strict sanitation guidelines with premium food-grade packaging to keep meals safe.",
            },
            {
              icon: "chef" as const,
              title: "Private In-Home Cooking",
              text: "Our trained culinary team brings all utensils and skills directly to your home kitchen for stress-free celebrations.",
            },
            {
              icon: "location" as const,
              title: "Local Ido-Ekiti Delivery",
              text: "Quick, dependable door-to-door dispatch across hospital quarters, campus axis, and central Ido-Ekiti town.",
            },
          ].map(p => (
            <div
              key={p.title}
              className="bg-card rounded-3xl p-7 border border-border shadow-xs hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: "var(--secondary)", color: "var(--primary)" }}
                >
                  <Icon name={p.icon} size={22} />
                </div>
                <h3 className="font-serif text-xl font-bold" style={{ color: "var(--brown)" }}>
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm mt-2.5 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {p.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/*  BOTTOM CTA BANNER                                            */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-24">
        <div
          className="rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-xl"
          style={{ background: "var(--secondary)" }}
        >
          <div className="max-w-2xl mx-auto relative z-10">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
              style={{ background: "var(--primary)", color: "#fff" }}
            >
              Experience the Magic
            </span>
            <h2
              className="font-serif text-3xl sm:text-4xl font-bold"
              style={{ color: "var(--brown)" }}
            >
              Ready to Taste What Everyone is Talking About?
            </h2>
            <p className="mt-3 text-sm sm:text-base max-w-lg mx-auto" style={{ color: "var(--secondary-foreground)" }}>
              Explore this weekend's menu selection or book our chef to prepare a feast right in your kitchen.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => go("menu")}
                className="px-8 py-4 rounded-full font-bold text-sm shadow-md transition-transform hover:scale-105"
                style={{ background: "var(--primary)", color: "#fff" }}
              >
                Order This Weekend's Menu
              </button>
              <a
                href={`https://wa.me/${settings.business.whatsapp}?text=${encodeURIComponent("Hello PB DELICACIES, I would like to learn more about your services.")}`}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-full font-bold text-sm border transition-colors hover:bg-card flex items-center gap-2"
                style={{ borderColor: "var(--border)", color: "var(--brown)" }}
              >
                <Icon name="whatsapp" size={16} />
                <span>Chat with Owner</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutView;
