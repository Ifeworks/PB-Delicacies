import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import MealCard from "./MealCard";
import Icon from "../common/Icon";
import type { FAQItem } from "../../types";

const HOME_FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "When does PB DELICACIES operate and deliver?",
    answer:
      "We prepare and deliver fresh delicacies every weekend (Fridays, Saturdays, and Sundays) from 10:00 AM to 9:00 PM. Pre-orders open early every Thursday so you can secure your preferred delivery slot.",
  },
  {
    id: "faq-2",
    question: "How does the Home Cooking private chef service work?",
    answer:
      "Our culinary team brings the ingredients, spices, and skills directly to your home kitchen in Ido-Ekiti or surrounding towns. We cook your chosen Nigerian dishes on-site for family dinners, birthdays, or weekend get-togethers.",
  },
  {
    id: "faq-3",
    question: "What payment methods are supported?",
    answer:
      "We accept seamless Bank Transfers (with copyable account details during checkout) as well as Pay on Delivery (Cash or POS) upon receiving your meal.",
  },
  {
    id: "faq-4",
    question: "Which areas in Ekiti do you deliver to?",
    answer:
      "We provide fast hot delivery across Ido-Ekiti, including the Federal Medical Centre (FMC), Doctors' Quarters, Hospital Road, Fajuyi Street, Central Market, and Federal Poly Junction, with a flat ₦1,000 delivery fee.",
  },
  {
    id: "faq-5",
    question: "Can I order large soup bowls or party bulk pots?",
    answer:
      "Yes! We prepare 2-Litre, 4-Litre, and 5-Litre family pots of Egusi, Efo Riro, Seafood Okro, and Designer Ayamase Stew for your home freezer. Contact us on WhatsApp for custom bulk orders.",
  },
];

export function HomeView() {
  const { menu, categories, settings, go, setDetailItem, quickAdd } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openFaq, setOpenFaq] = useState<string | null>("faq-1");

  const featuredMeals = menu.filter(m => m.featured || m.isSpecial);
  const displayMeals =
    activeCategory === "All"
      ? (featuredMeals.length > 0 ? featuredMeals : menu).slice(0, 6)
      : menu.filter(m => m.category === activeCategory).slice(0, 6);

  const categoryNames = ["All", ...categories.map(c => c.name)];

  const waMenuAlertLink = `https://wa.me/${settings.business.whatsapp}?text=${encodeURIComponent(
    "Hello PB DELICACIES, please add my number to your weekly weekend menu broadcast list!"
  )}`;

  return (
    <div className="animate-fade-in">
      {/* ------------------------------------------------------------- */}
      {/*  HERO SECTION                                                 */}
      {/* ------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-radial from-secondary/40 via-background to-background pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-7 animate-float-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6 shadow-2xs border border-border bg-card">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span style={{ color: "var(--brown)" }}>{settings.hero.badgeText}</span>
            </div>

            <h1
              className="font-serif font-bold leading-[1.06] tracking-tight"
              style={{ color: "var(--brown)", fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)" }}
            >
              {settings.hero.headline}
              <br />
              <span className="text-primary relative inline-block">
                {settings.hero.highlightedText}
                <svg
                  className="absolute -bottom-2 left-0 w-full text-gold/60"
                  viewBox="0 0 250 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C60 2.5 180 2.5 247 9"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p
              className="mt-6 text-base sm:text-lg max-w-xl leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              {settings.hero.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => go("menu")}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold shadow-lg transition-transform hover:scale-105 active:scale-95 text-sm sm:text-base"
                style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
              >
                <span>{settings.hero.primaryCtaText}</span>
                <Icon name="arrow" size={17} />
              </button>

              <button
                onClick={() => go("cooking")}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-bold border border-border bg-card transition-all hover:bg-secondary active:scale-95 text-sm sm:text-base shadow-2xs"
                style={{ color: "var(--brown)" }}
              >
                <Icon name="chef" size={18} />
                <span>{settings.hero.secondaryCtaText}</span>
              </button>

              <button
                onClick={() => go("track")}
                className="text-xs font-bold underline hover:text-primary transition-colors ml-1"
                style={{ color: "var(--muted-foreground)" }}
              >
                Track an existing order →
              </button>
            </div>

            {/* Quick Trust Badges */}
            <div className="mt-10 pt-8 border-t border-border/70 flex flex-wrap items-center gap-6 text-xs font-semibold" style={{ color: "var(--brown)" }}>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-[10px]">✓</span>
                <span>Cooked Fresh to Order</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-[10px]">✓</span>
                <span>Hot Doorstep Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-[10px]">✓</span>
                <span>Hygiene Certified</span>
              </div>
            </div>
          </div>

          {/* Right Column Showcase */}
          <div className="lg:col-span-5 relative">
            <div
              className="aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-card rotate-1 transition-transform duration-700 hover:rotate-0"
              style={{ background: "var(--muted)" }}
            >
              <img
                src={settings.hero.heroImage}
                alt="Nigerian food delicacies feast by PB Delicacies"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Rating floating card */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-card rounded-2xl shadow-xl px-5 py-3.5 border border-border flex items-center gap-3.5 -rotate-2 animate-float-up">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner"
                style={{ background: "rgba(217, 138, 61, 0.15)", color: "var(--gold)" }}
              >
                <Icon name="star" size={22} fill="var(--gold)" />
              </div>
              <div>
                <div className="font-serif text-lg font-bold" style={{ color: "var(--brown)" }}>
                  {settings.hero.ratingScore}
                </div>
                <div className="text-xs font-semibold" style={{ color: "var(--muted-foreground)" }}>
                  {settings.hero.ratingLabel}
                </div>
              </div>
            </div>

            {/* Weekend special tag badge */}
            <div
              className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-2xl text-xs font-bold shadow-lg rotate-3"
            >
              Weekend Fresh
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/*  TRUST STATS STRIP                                            */}
      {/* ------------------------------------------------------------- */}
      <section className="border-y border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-bold" style={{ color: "var(--primary)" }}>
              500+
            </div>
            <div className="text-xs sm:text-sm font-medium mt-1" style={{ color: "var(--muted-foreground)" }}>
              Weekend Meals Delivered
            </div>
          </div>
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-bold" style={{ color: "var(--primary)" }}>
              100%
            </div>
            <div className="text-xs sm:text-sm font-medium mt-1" style={{ color: "var(--muted-foreground)" }}>
              Fresh Local Ingredients
            </div>
          </div>
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-bold" style={{ color: "var(--primary)" }}>
              45–75m
            </div>
            <div className="text-xs sm:text-sm font-medium mt-1" style={{ color: "var(--muted-foreground)" }}>
              Fast Dispatch in Ido-Ekiti
            </div>
          </div>
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-bold" style={{ color: "var(--primary)" }}>
              4.9 / 5
            </div>
            <div className="text-xs sm:text-sm font-medium mt-1" style={{ color: "var(--muted-foreground)" }}>
              Loved by Ekiti Foodies
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/*  WEEKLY SPECIALS & MENU HIGHLIGHTS                            */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              {settings.weekLabel}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-1" style={{ color: "var(--brown)" }}>
              What's Cooking This Weekend?
            </h2>
            <p className="text-sm sm:text-base mt-2" style={{ color: "var(--muted-foreground)" }}>
              Select your favorite delicacies, customize extras, and place your order in minutes.
            </p>
          </div>

          <button
            onClick={() => go("menu")}
            className="self-start md:self-auto inline-flex items-center gap-2 text-sm font-bold transition-transform hover:translate-x-1"
            style={{ color: "var(--primary)" }}
          >
            <span>View Full Menu ({menu.length} items)</span>
            <Icon name="arrow" size={16} />
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none">
          {categoryNames.map(c => {
            const active = activeCategory === c;
            return (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all shadow-2xs active:scale-95"
                style={{
                  background: active ? "var(--primary)" : "var(--card)",
                  color: active ? "#fff" : "var(--muted-foreground)",
                  border: `1px solid ${active ? "var(--primary)" : "var(--border)"}`,
                }}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Meals Grid */}
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayMeals.map(item => (
            <MealCard
              key={item.id}
              item={item}
              onOpen={() => setDetailItem(item)}
              onAdd={() => quickAdd(item)}
            />
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/*  SIGNATURE SERVICES SECTION                                   */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
            Our Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-1" style={{ color: "var(--brown)" }}>
            Tailored Culinary Experiences
          </h2>
          <p className="text-sm sm:text-base mt-2" style={{ color: "var(--muted-foreground)" }}>
            Choose whether you want hot meals delivered to your doorstep or our chefs cooking right inside your home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: Weekend Delivery */}
          <div
            className="rounded-3xl p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            style={{ background: "var(--secondary)" }}
          >
            <div>
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-xs"
                style={{ background: "var(--primary)", color: "#fff" }}
              >
                <Icon name="truck" size={28} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Service 01
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1" style={{ color: "var(--brown)" }}>
                Weekend Food Delivery
              </h3>
              <p
                className="mt-3 text-sm sm:text-base leading-relaxed"
                style={{ color: "var(--secondary-foreground)" }}
              >
                Order freshly prepared authentic Nigerian meals every weekend. Hot, timely delivery straight to your doorstep across Ido-Ekiti, hospital quarters, and institutions.
              </p>

              <ul className="mt-6 space-y-2 text-xs sm:text-sm font-semibold text-brown">
                <li className="flex items-center gap-2">✓ Smoky Jollof, Ofada, Pounded Yam & Egusi</li>
                <li className="flex items-center gap-2">✓ Friday, Saturday & Sunday deliveries</li>
                <li className="flex items-center gap-2">✓ Flat ₦1,000 Ido-Ekiti delivery fee</li>
              </ul>
            </div>

            <div className="mt-8">
              <button
                onClick={() => go("menu")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold shadow-md transition-transform hover:scale-105"
                style={{ background: "var(--primary)", color: "#fff" }}
              >
                <span>View This Week's Menu</span>
                <Icon name="arrow" size={16} />
              </button>
            </div>
          </div>

          {/* Card 2: Home Cooking Service */}
          <div
            className="rounded-3xl p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between shadow-xl"
            style={{ background: "var(--brown)" }}
          >
            <div>
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner"
                style={{ background: "var(--gold)", color: "#3a2412" }}
              >
                <Icon name="chef" size={28} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-gold">
                Service 02
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1" style={{ color: "#f4e6d2" }}>
                In-Home Chef & Cooking
              </h3>
              <p
                className="mt-3 text-sm sm:text-base leading-relaxed"
                style={{ color: "rgba(244, 230, 210, 0.85)" }}
              >
                Hosting a family gathering, birthday celebration, or simply want a hot meal cooked live in your kitchen? Book PB DELICACIES chefs for a personalized culinary experience.
              </p>

              <ul className="mt-6 space-y-2 text-xs sm:text-sm font-semibold text-secondary">
                <li className="flex items-center gap-2">✓ We arrive with all spices & ingredients</li>
                <li className="flex items-center gap-2">✓ Suitable for family meals & celebrations</li>
                <li className="flex items-center gap-2">✓ Flexible custom menu options</li>
              </ul>
            </div>

            <div className="mt-8">
              <button
                onClick={() => go("cooking")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold shadow-md transition-transform hover:scale-105"
                style={{ background: "var(--gold)", color: "#3a2412" }}
              >
                <span>Book a Cooking Session</span>
                <Icon name="arrow" size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/*  HOW IT WORKS                                                 */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-24">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
            Simple & Fast
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-1" style={{ color: "var(--brown)" }}>
            How It Works
          </h2>
          <p className="text-sm sm:text-base mt-2" style={{ color: "var(--muted-foreground)" }}>
            Three simple steps to enjoying delicious homemade food this weekend.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              n: "01",
              title: "Choose Your Food",
              text: "Browse our weekly rotating menu, pick your favorite dishes, and customize with plantains, extra chicken, or special instructions.",
            },
            {
              n: "02",
              title: "Place Your Order",
              text: "Enter your delivery address in Ido-Ekiti, select Bank Transfer or Pay on Delivery, and receive instant WhatsApp order verification.",
            },
            {
              n: "03",
              title: "Enjoy Your Delicacies",
              text: "Our rider delivers your freshly packed meal steaming hot right to your doorstep, or our chef prepares it live in your kitchen.",
            },
          ].map((s, i) => (
            <div
              key={s.n}
              className="relative bg-card rounded-3xl p-8 border border-border shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="font-serif text-5xl font-bold opacity-30" style={{ color: "var(--primary)" }}>
                  {s.n}
                </div>
                <h4 className="font-serif text-xl font-bold mt-3" style={{ color: "var(--brown)" }}>
                  {s.title}
                </h4>
                <p className="text-sm mt-2 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {s.text}
                </p>
              </div>
              {i < 2 && (
                <div
                  className="hidden md:block absolute top-1/2 -right-3.5 z-10 p-2 rounded-full bg-card border border-border shadow-xs"
                  style={{ color: "var(--gold)" }}
                >
                  <Icon name="arrow" size={16} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/*  OUR STORY TEASER SECTION                                     */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-24">
        <div className="bg-card rounded-3xl border border-border p-8 sm:p-12 grid lg:grid-cols-2 gap-10 items-center shadow-xs">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              The PB DELICACIES Promise
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2" style={{ color: "var(--brown)" }}>
              Authentic Ekiti Kitchen Heritage
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              Born and rooted in Ido-Ekiti, PB DELICACIES was created out of a deep passion for traditional home cooking. We source fresh yam, native vegetables, unpolished ofada, and quality meats locally, preparing each recipe with utmost hygiene and care.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => go("about")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold border border-border hover:bg-secondary transition-colors"
                style={{ color: "var(--brown)" }}
              >
                <span>Read Our Full Story</span>
                <Icon name="arrow" size={14} />
              </button>

              <button
                onClick={() => go("menu")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white shadow-sm"
                style={{ background: "var(--primary)" }}
              >
                <span>Order Food Now</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop&auto=format"
                alt="Native Ofada Rice in banana leaves"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=500&fit=crop&auto=format"
                alt="Spicy Peppered Asun bowl"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/*  TESTIMONIALS SECTION                                         */}
      {/* ------------------------------------------------------------- */}
      {settings.testimonials && settings.testimonials.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              Customer Love
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-1" style={{ color: "var(--brown)" }}>
              What Our Customers Say
            </h2>
            <p className="text-sm sm:text-base mt-2" style={{ color: "var(--muted-foreground)" }}>
              Verified reviews from happy food lovers across Ido-Ekiti & Ekiti State.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {settings.testimonials.map(t => (
              <div
                key={t.id}
                className="bg-card rounded-3xl p-7 border border-border shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-4" style={{ color: "var(--gold)" }}>
                    {Array.from({ length: t.rating || 5 }).map((_, i) => (
                      <Icon key={i} name="star" size={16} fill="var(--gold)" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed italic" style={{ color: "var(--foreground)" }}>
                    "{t.text}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-base shadow-xs"
                    style={{ background: "var(--secondary)", color: "var(--primary)" }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--brown)" }}>
                      {t.name}
                    </div>
                    <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------- */}
      {/*  FAQ SECTION                                                  */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-24">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-1" style={{ color: "var(--brown)" }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {HOME_FAQS.map(faq => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-card rounded-2xl border border-border overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                  className="w-full px-6 py-4.5 text-left font-serif text-base sm:text-lg font-bold flex items-center justify-between gap-4"
                  style={{ color: "var(--brown)" }}
                >
                  <span>{faq.question}</span>
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform"
                    style={{
                      background: isOpen ? "var(--secondary)" : "transparent",
                      color: isOpen ? "var(--primary)" : "var(--muted-foreground)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <Icon name="chevronDown" size={16} />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm leading-relaxed border-t border-border/40" style={{ color: "var(--muted-foreground)" }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/*  WEEKEND BROADCAST / WHATSAPP ALERT CTA                       */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-8">
        <div
          className="rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-xl"
          style={{ background: "var(--brown)", color: "#f4e6d2" }}
        >
          <div className="max-w-2xl mx-auto relative z-10">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
              style={{ background: "rgba(217, 138, 61, 0.2)", color: "var(--gold)" }}
            >
              Never Miss What's Cooking
            </span>
            <h2
              className="font-serif text-3xl sm:text-4xl font-bold"
              style={{ color: "#fff" }}
            >
              Get This Weekend's Menu Every Thursday!
            </h2>
            <p className="mt-3 text-sm sm:text-base max-w-lg mx-auto" style={{ color: "rgba(244, 230, 210, 0.85)" }}>
              Join our WhatsApp broadcast community in Ido-Ekiti to receive early access to the weekly menu and special chef discounts.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={waMenuAlertLink}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-full font-bold text-sm shadow-md transition-transform hover:scale-105 flex items-center gap-2.5"
                style={{ background: "var(--green)", color: "#fff" }}
              >
                <Icon name="whatsapp" size={18} />
                <span>Join Weekly Menu WhatsApp List</span>
              </a>

              <button
                onClick={() => go("menu")}
                className="px-8 py-4 rounded-full font-bold text-sm border border-white/20 hover:bg-white/10 transition-colors"
                style={{ color: "#f4e6d2" }}
              >
                Browse Menu Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeView;
