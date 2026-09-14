import React from "react";
import { useApp } from "../../context/AppContext";
import { Logo } from "../common/Logo";
import Icon from "../common/Icon";
import type { Page } from "../../types";

export function Footer() {
  const { go, settings } = useApp();

  const waLink = `https://wa.me/${settings.business.whatsapp}?text=${encodeURIComponent(
    "Hello PB DELICACIES, I would like to make an enquiry."
  )}`;

  return (
    <footer
      className="mt-24 border-t border-brown/20 relative overflow-hidden"
      style={{ background: "var(--brown)", color: "#f4e6d2" }}
    >
      {/* Decorative top pattern/accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-primary via-gold to-accent" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
        {/* Brand & Mission */}
        <div className="lg:col-span-2">
          <Logo light size="lg" />
          <p
            className="mt-4 text-sm max-w-sm leading-relaxed"
            style={{ color: "rgba(244, 230, 210, 0.82)" }}
          >
            Authentic, freshly prepared weekend Nigerian meals delivered straight to your door across Ido-Ekiti — or booked for personalized, private in-home chef cooking experiences.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-transform hover:scale-105 shadow-md"
              style={{ background: "var(--green)", color: "#fff" }}
            >
              <Icon name="whatsapp" size={16} />
              <span>WhatsApp: {settings.business.phone}</span>
            </a>

            <a
              href={`tel:${settings.business.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold border border-white/20 hover:bg-white/10 transition-colors"
            >
              <Icon name="phone" size={15} />
              <span>Direct Call</span>
            </a>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs" style={{ color: "rgba(244, 230, 210, 0.65)" }}>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Serving Ido-Ekiti every Friday, Saturday & Sunday</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-base font-bold mb-4" style={{ color: "var(--gold)" }}>
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-xs font-medium" style={{ color: "rgba(244, 230, 210, 0.82)" }}>
            {[
              { label: "Home", page: "home" as Page },
              { label: "This Week's Menu", page: "menu" as Page },
              { label: "Home Cooking & Chef", page: "cooking" as Page },
              { label: "About Our Kitchen", page: "about" as Page },
              { label: "Track Your Order", page: "track" as Page },
              { label: "Contact & Location", page: "contact" as Page },
              { label: "Shopping Cart", page: "cart" as Page },
            ].map(n => (
              <li key={n.label}>
                <button
                  onClick={() => go(n.page)}
                  className="hover:underline transition-colors hover:text-white text-left flex items-center gap-1.5"
                >
                  <Icon name="arrow" size={11} />
                  <span>{n.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Weekend Deliveries & Zones */}
        <div>
          <h4 className="font-serif text-base font-bold mb-4" style={{ color: "var(--gold)" }}>
            Delivery Areas (Ekiti)
          </h4>
          <ul className="space-y-2 text-xs" style={{ color: "rgba(244, 230, 210, 0.78)" }}>
            <li className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Federal Medical Centre (FMC)</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Hospital Road & Doctors' Quarters</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Fajuyi Street & Post Office Area</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Central Market & High School Axis</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Federal Poly / Ado-Ekiti Junction</span>
            </li>
            <li className="pt-2">
              <span
                className="text-[11px] font-bold px-2 py-0.5 rounded-md inline-block"
                style={{ background: "rgba(217, 138, 61, 0.2)", color: "var(--gold)" }}
              >
                Standard Delivery: ₦{settings.business.deliveryFee.toLocaleString()}
              </span>
            </li>
          </ul>
        </div>

        {/* Location & Contact Info */}
        <div>
          <h4 className="font-serif text-base font-bold mb-4" style={{ color: "var(--gold)" }}>
            Operating Hours
          </h4>
          <ul className="space-y-3 text-xs" style={{ color: "rgba(244, 230, 210, 0.82)" }}>
            <li className="flex items-start gap-2">
              <span className="mt-0.5"><Icon name="location" size={14} /></span>
              <span>{settings.business.location}</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="calendar" size={14} />
              <span>{settings.business.openingDays}</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="clock" size={14} />
              <span>{settings.business.openingHours}</span>
            </li>
            <li className="pt-2 border-t border-white/10">
              <button
                onClick={() => go("admin")}
                className="text-[11px] font-bold hover:underline flex items-center gap-1.5 transition-colors hover:text-white"
                style={{ color: "var(--gold)" }}
              >
                <Icon name="shield" size={13} />
                <span>Owner & Management Portal</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar with payment options & copyright */}
      <div
        className="border-t px-6 py-6 text-xs max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ borderColor: "rgba(244, 230, 210, 0.15)", color: "rgba(244, 230, 210, 0.65)" }}
      >
        <div className="flex items-center gap-2">
          <span>© 2026 {settings.business.name}. All rights reserved.</span>
          <span>•</span>
          <span>Ido-Ekiti, Ekiti State, Nigeria</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[11px]">Accepted:</span>
          <span className="px-2 py-0.5 rounded-sm bg-white/10 text-[10px] font-bold">Bank Transfer</span>
          <span className="px-2 py-0.5 rounded-sm bg-white/10 text-[10px] font-bold">Pay on Delivery</span>
          <span className="px-2 py-0.5 rounded-sm bg-white/10 text-[10px] font-bold">Cash / POS</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
