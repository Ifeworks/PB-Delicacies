import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import Icon from "../common/Icon";
import type { ServicePackage } from "../../types";

const PACKAGES: ServicePackage[] = [
  {
    id: "pkg-1",
    title: "Family Weekend Feast",
    subtitle: "Ideal for family lunches & weekend chill",
    price: "From ₦15,000 service fee + ingredients",
    recommendedFor: "4–8 Guests",
    features: [
      "Chef cooks 2–3 main dishes live",
      "Pounded Yam, Jollof Rice, or Egusi",
      "Complete kitchen sanitation afterwards",
      "Freshly prepared hot & served at your table",
    ],
  },
  {
    id: "pkg-2",
    title: "Celebration & Birthday Party",
    subtitle: "Stress-free catering for your special guests",
    price: "From ₦35,000 service fee + ingredients",
    recommendedFor: "10–25 Guests",
    isPopular: true,
    features: [
      "2 Chefs assigned to your home",
      "Smoky Jollof, Fried Rice, Swallow, Peppered Meats",
      "Sides (Dodo, Coleslaw, Pepper Sauce, Zobo)",
      "Continuous cooking & kitchen clean-up",
    ],
  },
  {
    id: "pkg-3",
    title: "Weekly Bulk Soup & Stew Pots",
    subtitle: "Stock your home freezer for the week",
    price: "From ₦20,000 service fee + ingredients",
    recommendedFor: "Busy Homes & Doctors",
    features: [
      "2L, 4L, or 5L large family pots cooked",
      "Egusi, Efo Riro, Seafood Okro, or Ayamase",
      "Portioned into freezer-safe containers",
      "Saves 10+ hours of weekday cooking",
    ],
  },
];

export function CookingView() {
  const { settings, flash } = useApp();
  const [f, setF] = useState({
    name: "",
    phone: "",
    address: "",
    date: "",
    time: "",
    people: "4",
    package: "Family Weekend Feast",
    event: "Family Weekend Gathering",
    meals: "Smoky Jollof Rice, Pounded Yam & Egusi Soup, Peppered Chicken",
    notes: "",
  });
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setF(p => ({ ...p, [k]: e.target.value }));

  const selectPackage = (pkg: ServicePackage) => {
    setF(p => ({
      ...p,
      package: pkg.title,
      event: pkg.title,
    }));
    const el = document.getElementById("booking-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const message =
    `Hello PB DELICACIES, I would like to book an in-home cooking session.\n\n` +
    `*Package:* ${f.package}\n` +
    `*Name:* ${f.name}\n` +
    `*Phone:* ${f.phone}\n` +
    `*Date:* ${f.date}\n` +
    `*Time:* ${f.time}\n` +
    `*Number of People:* ${f.people} guests\n` +
    `*Event Type:* ${f.event}\n` +
    `*Location/Address:* ${f.address}\n` +
    `*Preferred Dishes:* ${f.meals}\n` +
    (f.notes ? `*Notes / Kitchen details:* ${f.notes}` : "");

  const waLink = `https://wa.me/${settings.business.whatsapp}?text=${encodeURIComponent(message)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.name || !f.phone) return;
    setSent(true);
    flash("Home cooking booking request received!");
  };

  return (
    <div className="animate-fade-in pb-16">
      {/* ------------------------------------------------------------- */}
      {/*  HERO BANNER                                                  */}
      {/* ------------------------------------------------------------- */}
      <section className="relative overflow-hidden" style={{ background: "var(--brown)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-5 shadow-inner"
              style={{ background: "rgba(217, 138, 61, 0.2)", color: "var(--gold)" }}
            >
              <Icon name="chef" size={15} /> Private Chef & In-Home Cooking
            </span>
            <h1
              className="font-serif font-bold leading-tight"
              style={{ color: "#f4e6d2", fontSize: "clamp(2.3rem, 5vw, 3.8rem)" }}
            >
              Let Us Bring the Kitchen to You.
            </h1>
            <p
              className="mt-4 text-base sm:text-lg max-w-lg leading-relaxed"
              style={{ color: "rgba(244, 230, 210, 0.85)" }}
            >
              Planning a weekend gathering, family celebration, or craving authentic Nigerian meals cooked fresh in your home kitchen? Book PB DELICACIES chefs for a personalized culinary experience.
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3.5">
              {[
                "We come straight to your home",
                "Freshly cooked to your taste",
                "Great for families & gatherings",
                "We bring ingredients & spices",
                "Full kitchen clean-up included",
                "Bulk freezer soup pots available",
              ].map(b => (
                <li key={b} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-secondary">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--green)", color: "#fff" }}
                  >
                    <Icon name="check" size={12} />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div
              className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10"
              style={{ background: "var(--muted)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=900&h=700&fit=crop&auto=format"
                alt="PB DELICACIES private chef cooking in home kitchen"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-card rounded-2xl p-5 border border-border shadow-xl flex items-center gap-3.5 max-w-xs text-left">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--secondary)", color: "var(--primary)" }}
              >
                <Icon name="chef" size={24} />
              </div>
              <div>
                <div className="font-serif text-lg font-bold" style={{ color: "var(--brown)" }}>
                  Chef on Demand
                </div>
                <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                  Available in Ido-Ekiti & Ekiti environs
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/*  POPULAR PACKAGES                                             */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
            Choose A Package
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-1" style={{ color: "var(--brown)" }}>
            Private Cooking Packages
          </h2>
          <p className="text-sm sm:text-base mt-2" style={{ color: "var(--muted-foreground)" }}>
            Select a tailored package below to prefill the booking form.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PACKAGES.map(pkg => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 border flex flex-col justify-between relative transition-all duration-300 hover:shadow-xl ${
                pkg.isPopular
                  ? "bg-card border-primary shadow-md scale-[1.02]"
                  : "bg-card border-border shadow-2xs hover:-translate-y-1"
              }`}
            >
              {pkg.isPopular && (
                <div
                  className="absolute -top-3 right-6 text-[10px] uppercase font-bold px-3 py-1 rounded-full text-white shadow-sm"
                  style={{ background: "var(--primary)" }}
                >
                  Most Popular
                </div>
              )}

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {pkg.recommendedFor}
                </span>
                <h3 className="font-serif text-2xl font-bold mt-1" style={{ color: "var(--brown)" }}>
                  {pkg.title}
                </h3>
                <p className="text-xs sm:text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>
                  {pkg.subtitle}
                </p>

                <div className="mt-5 p-3 rounded-2xl bg-secondary/40 font-bold text-sm text-primary">
                  {pkg.price}
                </div>

                <ul className="mt-6 space-y-2.5 text-xs sm:text-sm font-medium">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2" style={{ color: "var(--foreground)" }}>
                      <span className="text-primary font-bold mt-0.5">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => selectPackage(pkg)}
                className="mt-8 w-full py-3.5 rounded-full font-bold text-xs shadow-md transition-transform hover:scale-105 active:scale-95 text-center"
                style={{
                  background: pkg.isPopular ? "var(--primary)" : "var(--secondary)",
                  color: pkg.isPopular ? "#fff" : "var(--brown)",
                }}
              >
                Select & Book This Package
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/*  BOOKING FORM SECTION                                         */}
      {/* ------------------------------------------------------------- */}
      <section id="booking-form" className="max-w-4xl mx-auto px-4 sm:px-6 pt-24">
        {sent ? (
          <div className="bg-card rounded-3xl border border-border p-8 sm:p-14 text-center shadow-lg animate-float-up">
            <div
              className="w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-inner mb-6"
              style={{ background: "rgba(74, 107, 61, 0.15)", color: "var(--green)" }}
            >
              <Icon name="check" size={38} />
            </div>
            <h2 className="font-serif text-3xl font-bold" style={{ color: "var(--brown)" }}>
              Booking Request Logged!
            </h2>
            <p className="mt-3 text-base max-w-md mx-auto" style={{ color: "var(--muted-foreground)" }}>
              Thank you, <strong className="text-foreground">{f.name}</strong>. We have received your private chef booking request for <strong className="text-foreground">{f.date || "your selected date"}</strong>.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3.5 justify-center">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm shadow-md transition-transform hover:scale-105"
                style={{ background: "var(--green)", color: "#fff" }}
              >
                <Icon name="whatsapp" size={18} />
                <span>Confirm Instantly on WhatsApp</span>
              </a>
              <button
                onClick={() => setSent(false)}
                className="px-6 py-4 rounded-full font-bold text-sm border hover:bg-secondary transition-colors"
                style={{ borderColor: "var(--border)", color: "var(--brown)" }}
              >
                Submit Another Request
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-card rounded-3xl border border-border p-6 sm:p-12 shadow-sm">
            <div className="mb-8">
              <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
                Reservation Form
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-1" style={{ color: "var(--brown)" }}>
                Book Your Home Cooking Session
              </h2>
              <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>
                Fill out the details below and we will contact you to align on menu choices, market shopping, and timing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: "var(--brown)" }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={f.name}
                  onChange={set("name")}
                  placeholder="e.g. Dr. Bamidele Adeyemi"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 font-medium"
                  style={{ ["--tw-ring-color" as string]: "var(--ring)" }}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: "var(--brown)" }}>
                  Phone Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  value={f.phone}
                  onChange={set("phone")}
                  placeholder="0803 000 0000"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 font-medium"
                  style={{ ["--tw-ring-color" as string]: "var(--ring)" }}
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: "var(--brown)" }}>
                  Home Address / Town *
                </label>
                <input
                  type="text"
                  required
                  value={f.address}
                  onChange={set("address")}
                  placeholder="e.g. Doctors' Quarters FMC / Hospital Road / GRA Ado Road, Ido-Ekiti"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 font-medium"
                  style={{ ["--tw-ring-color" as string]: "var(--ring)" }}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: "var(--brown)" }}>
                  Selected Package
                </label>
                <select
                  value={f.package}
                  onChange={set("package")}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 font-medium"
                  style={{ ["--tw-ring-color" as string]: "var(--ring)" }}
                >
                  {PACKAGES.map(p => (
                    <option key={p.title} value={p.title}>
                      {p.title}
                    </option>
                  ))}
                  <option value="Custom Event">Custom Event / Special Request</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: "var(--brown)" }}>
                  Number of Guests
                </label>
                <input
                  type="number"
                  min={1}
                  max={200}
                  value={f.people}
                  onChange={set("people")}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 font-medium"
                  style={{ ["--tw-ring-color" as string]: "var(--ring)" }}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: "var(--brown)" }}>
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={f.date}
                  onChange={set("date")}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 font-medium"
                  style={{ ["--tw-ring-color" as string]: "var(--ring)" }}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: "var(--brown)" }}>
                  Preferred Cooking Time
                </label>
                <input
                  type="time"
                  value={f.time}
                  onChange={set("time")}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 font-medium"
                  style={{ ["--tw-ring-color" as string]: "var(--ring)" }}
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: "var(--brown)" }}>
                  Preferred Nigerian Dishes to Cook
                </label>
                <input
                  type="text"
                  value={f.meals}
                  onChange={set("meals")}
                  placeholder="e.g. Smoky Party Jollof, Pounded Yam & Egusi, Peppered Goat Meat, Fried Rice"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 font-medium"
                  style={{ ["--tw-ring-color" as string]: "var(--ring)" }}
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: "var(--brown)" }}>
                  Special Instructions / Kitchen Setup Details
                </label>
                <textarea
                  value={f.notes}
                  onChange={set("notes")}
                  rows={2}
                  placeholder="Gas cooker type, spice levels, dietary restrictions, or specific requests..."
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 font-medium"
                  style={{ ["--tw-ring-color" as string]: "var(--ring)" }}
                />
              </div>

              <div className="sm:col-span-2 mt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full font-bold shadow-md transition-transform hover:scale-[1.01] active:scale-95 text-base flex items-center justify-center gap-2"
                  style={{ background: "var(--primary)", color: "#fff" }}
                >
                  <Icon name="chef" size={20} />
                  <span>Request Private Chef Booking</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </section>
    </div>
  );
}

export default CookingView;
