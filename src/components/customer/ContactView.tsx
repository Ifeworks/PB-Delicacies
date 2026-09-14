import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import Icon from "../common/Icon";

export function ContactView() {
  const { settings, flash } = useApp();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    subject: "Weekend Menu Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const waLink = `https://wa.me/${settings.business.whatsapp}?text=${encodeURIComponent(
    `Hello PB DELICACIES, my name is ${form.name || "Customer"}.\n${form.message ? `*Message:* ${form.message}` : "I would like to make an enquiry."}`
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSubmitted(true);
    flash("Thank you! Your message has been received.");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-20 animate-fade-in">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto">
        <span
          className="text-xs font-bold tracking-[0.2em] uppercase"
          style={{ color: "var(--gold)" }}
        >
          Get In Touch
        </span>
        <h1
          className="font-serif text-3xl sm:text-5xl font-bold mt-1"
          style={{ color: "var(--brown)" }}
        >
          Contact PB DELICACIES
        </h1>
        <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--muted-foreground)" }}>
          Have a question about our weekend menu, home delivery across Ido-Ekiti, or private chef booking? We are always happy to hear from you.
        </p>
      </div>

      {/* Main Direct Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={`tel:${settings.business.phone}`}
          className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base shadow-md transition-transform hover:scale-105"
          style={{ background: "var(--primary)", color: "#fff" }}
        >
          <Icon name="phone" size={20} />
          <span>Call: {settings.business.phone}</span>
        </a>

        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base shadow-md transition-transform hover:scale-105"
          style={{ background: "var(--green)", color: "#fff" }}
        >
          <Icon name="whatsapp" size={20} />
          <span>Chat on WhatsApp</span>
        </a>
      </div>

      {/* Grid: Contact Info & Enquiry Form */}
      <div className="mt-14 grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Info Cards & Location Map */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-card rounded-3xl p-6 border border-border shadow-2xs">
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--secondary)", color: "var(--primary)" }}
              >
                <Icon name="location" size={22} />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold" style={{ color: "var(--brown)" }}>
                  Kitchen & Delivery Hub
                </h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {settings.business.location}
                </p>
                <p className="text-[11px] text-muted-foreground mt-1 font-semibold">
                  Delivering across Hospital Road, FMC, Fajuyi, Poly Junction.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-3xl p-6 border border-border shadow-2xs">
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--secondary)", color: "var(--primary)" }}
              >
                <Icon name="calendar" size={22} />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold" style={{ color: "var(--brown)" }}>
                  Operating Days & Hours
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  <strong>Days:</strong> {settings.business.openingDays}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  <strong>Hours:</strong> {settings.business.openingHours}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-3xl p-6 border border-border shadow-2xs">
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--secondary)", color: "var(--primary)" }}
              >
                <Icon name="phone" size={22} />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold" style={{ color: "var(--brown)" }}>
                  Direct Lines
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  <strong>Phone / WhatsApp:</strong> {settings.business.phone}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  <strong>Email:</strong> {settings.business.email || "orders@pbdelicacies.com"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Message Form */}
        <div className="lg:col-span-7 bg-card rounded-3xl border border-border p-6 sm:p-10 shadow-sm">
          {submitted ? (
            <div className="py-12 text-center animate-float-up">
              <div
                className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 shadow-inner"
                style={{ background: "rgba(74, 107, 61, 0.15)", color: "var(--green)" }}
              >
                <Icon name="check" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold" style={{ color: "var(--brown)" }}>
                Message Sent!
              </h3>
              <p className="text-sm mt-2 max-w-sm mx-auto text-muted-foreground">
                Thank you, <strong>{form.name}</strong>. We have received your inquiry and will reach out shortly.
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-full text-xs font-bold text-white shadow-sm flex items-center gap-2"
                  style={{ background: "var(--green)" }}
                >
                  <Icon name="whatsapp" size={16} />
                  <span>Continue on WhatsApp</span>
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-3 rounded-full text-xs font-bold border border-border hover:bg-secondary"
                  style={{ color: "var(--brown)" }}
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <h3 className="font-serif text-xl sm:text-2xl font-bold" style={{ color: "var(--brown)" }}>
                  Send Us A Message
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Have special dietary requirements or catering enquiries? Drop us a note.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "var(--brown)" }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Adebola"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 font-medium"
                      style={{ ["--tw-ring-color" as string]: "var(--ring)" }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "var(--brown)" }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      placeholder="0803 000 0000"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 font-medium"
                      style={{ ["--tw-ring-color" as string]: "var(--ring)" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "var(--brown)" }}>
                    Inquiry Topic
                  </label>
                  <select
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 font-medium"
                    style={{ ["--tw-ring-color" as string]: "var(--ring)" }}
                  >
                    <option value="Weekend Menu Inquiry">Weekend Menu Inquiry</option>
                    <option value="Home Cooking Booking">Private Home Cooking Booking</option>
                    <option value="Bulk Soup Pot Order">Bulk Soup Pot Order</option>
                    <option value="Event Catering">Event & Gathering Catering</option>
                    <option value="General Question">General Feedback or Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "var(--brown)" }}>
                    Message Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us what you need..."
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 font-medium"
                    style={{ ["--tw-ring-color" as string]: "var(--ring)" }}
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 rounded-full font-bold text-sm shadow-md transition-transform hover:scale-[1.02] active:scale-95 text-white"
                    style={{ background: "var(--primary)" }}
                  >
                    Send Message
                  </button>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="py-3.5 px-6 rounded-full font-bold text-sm border hover:bg-secondary transition-colors text-center flex items-center justify-center gap-2"
                    style={{ borderColor: "var(--border)", color: "var(--brown)" }}
                  >
                    <Icon name="whatsapp" size={16} />
                    <span>Send on WhatsApp</span>
                  </a>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactView;
