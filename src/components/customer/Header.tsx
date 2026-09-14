import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import { Logo } from "../common/Logo";
import Icon from "../common/Icon";
import type { Page } from "../../types";

const NAV_ITEMS: { label: string; page: Page; badge?: string }[] = [
  { label: "Home", page: "home" },
  { label: "This Week's Menu", page: "menu" },
  { label: "Home Cooking & Chef", page: "cooking", badge: "Popular" },
  { label: "About Us", page: "about" },
  { label: "Track Order", page: "track" },
  { label: "Contact & Location", page: "contact" },
];

export function Header({ onOpenCart }: { onOpenCart?: () => void }) {
  const { page, go, cartCount, settings } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const waLink = `https://wa.me/${settings.business.whatsapp}?text=${encodeURIComponent(
    "Hello PB DELICACIES, I would like to place an order or make an enquiry."
  )}`;

  return (
    <header
      className="sticky top-0 z-40 border-b border-border transition-all"
      style={{ background: "rgba(251, 246, 238, 0.94)", backdropFilter: "blur(16px)" }}
    >
      {/* Top Announcement Bar */}
      {settings.announcement?.enabled && (
        <div
          className="py-1.5 px-4 text-center text-xs font-semibold text-white tracking-wide flex items-center justify-center gap-2"
          style={{ background: "var(--primary)" }}
        >
          <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse" />
          <span>{settings.announcement.text}</span>
          <a
            href={`tel:${settings.business.phone}`}
            className="hidden sm:inline underline font-bold hover:text-secondary ml-2"
          >
            Call {settings.business.phone}
          </a>
        </div>
      )}

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <button
          onClick={() => go("home")}
          className="focus:outline-none focus-visible:ring-2 rounded-xl p-1 -m-1 group text-left"
        >
          <Logo />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {NAV_ITEMS.map(n => {
            const active = page === n.page;
            return (
              <button
                key={n.page}
                onClick={() => go(n.page)}
                className="relative px-3.5 py-2 rounded-full text-sm font-semibold transition-all hover:text-primary flex items-center gap-1.5"
                style={{
                  color: active ? "var(--primary)" : "var(--foreground)",
                  background: active ? "var(--secondary)" : "transparent",
                  fontWeight: active ? 700 : 500,
                }}
              >
                <span>{n.label}</span>
                {n.badge && (
                  <span
                    className="text-[9px] uppercase tracking-wider font-extrabold px-1.5 py-0.5 rounded-full"
                    style={{
                      background: active ? "var(--primary)" : "rgba(217, 138, 61, 0.18)",
                      color: active ? "#fff" : "var(--gold)",
                    }}
                  >
                    {n.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Compact Navigation for Medium Screens (Tablets / Smaller Laptops) */}
        <nav className="hidden md:flex xl:hidden items-center gap-1">
          {[
            { label: "Home", page: "home" as Page },
            { label: "Menu", page: "menu" as Page },
            { label: "Home Cooking", page: "cooking" as Page },
            { label: "Track", page: "track" as Page },
          ].map(n => {
            const active = page === n.page;
            return (
              <button
                key={n.page}
                onClick={() => go(n.page)}
                className="px-3 py-1.5 rounded-full text-xs font-bold transition-all"
                style={{
                  color: active ? "var(--primary)" : "var(--foreground)",
                  background: active ? "var(--secondary)" : "transparent",
                }}
              >
                {n.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* WhatsApp Direct Connect */}
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold transition-transform hover:scale-105 shadow-2xs"
            style={{ background: "rgba(74, 107, 61, 0.12)", color: "var(--green)" }}
          >
            <Icon name="whatsapp" size={16} />
            <span>WhatsApp Orders</span>
          </a>

          {/* Cart Icon & Slide-over Trigger */}
          <button
            onClick={() => {
              if (onOpenCart) {
                onOpenCart();
              } else {
                go("cart");
              }
            }}
            className="relative w-11 h-11 rounded-full flex items-center justify-center transition-all hover:bg-secondary border border-border/60 hover:border-border shadow-2xs"
            style={{ color: "var(--brown)" }}
            aria-label="Cart Drawer"
          >
            <Icon name="cart" size={20} />
            {cartCount > 0 && (
              <span
                className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full text-[11px] font-bold flex items-center justify-center shadow-md animate-float-up"
                style={{ background: "var(--primary)", color: "#fff" }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Order Weekend Menu CTA */}
          <button
            onClick={() => go("menu")}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold shadow-md transition-transform hover:scale-105 active:scale-95"
            style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
          >
            <span>Order Menu</span>
            <Icon name="arrow" size={14} />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(o => !o)}
            className="xl:hidden w-11 h-11 rounded-full flex items-center justify-center hover:bg-secondary border border-border/60 transition-colors"
            style={{ color: "var(--brown)" }}
            aria-label="Toggle navigation menu"
          >
            <Icon name={mobileMenuOpen ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="xl:hidden border-t border-border px-5 py-5 flex flex-col gap-2 animate-float-up shadow-xl"
          style={{ background: "var(--background)" }}
        >
          {NAV_ITEMS.map(n => {
            const active = page === n.page;
            return (
              <button
                key={n.page}
                onClick={() => {
                  go(n.page);
                  setMobileMenuOpen(false);
                }}
                className="text-left px-4 py-3 rounded-2xl text-sm font-bold flex items-center justify-between transition-colors"
                style={{
                  color: active ? "var(--primary)" : "var(--foreground)",
                  background: active ? "var(--secondary)" : "transparent",
                }}
              >
                <span>{n.label}</span>
                {n.badge && (
                  <span
                    className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full"
                    style={{ background: "var(--primary)", color: "#fff" }}
                  >
                    {n.badge}
                  </span>
                )}
              </button>
            );
          })}

          <div className="h-px my-2" style={{ background: "var(--border)" }} />

          <button
            onClick={() => {
              go("admin");
              setMobileMenuOpen(false);
            }}
            className="text-left px-4 py-3 rounded-2xl text-sm font-bold flex items-center gap-2 hover:bg-secondary transition-colors"
            style={{ color: "var(--primary)" }}
          >
            <Icon name="shield" size={16} />
            <span>Owner / Admin Portal</span>
          </button>

          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl text-sm font-bold shadow-md"
            style={{ background: "var(--green)", color: "#fff" }}
          >
            <Icon name="whatsapp" size={18} />
            <span>Chat & Order on WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
