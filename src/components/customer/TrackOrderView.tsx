import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import type { Order, OrderStatus } from "../../types";
import Icon from "../common/Icon";

function naira(n: number) {
  return "₦" + n.toLocaleString("en-NG");
}

const ORDER_STEPS: { status: OrderStatus; label: string; desc: string }[] = [
  { status: "New Order", label: "Order Received", desc: "Your order details have reached our kitchen." },
  { status: "Confirmed", label: "Order Confirmed", desc: "Payment/Details verified by PB DELICACIES." },
  { status: "Preparing", label: "Chef Preparing", desc: "Freshly cooking your delicacies in the kitchen." },
  { status: "Out for Delivery", label: "Out for Delivery", desc: "Dispatched with our local Ido-Ekiti rider." },
  { status: "Delivered", label: "Delivered", desc: "Arrived at your doorstep. Enjoy your meal!" },
];

function getStepIndex(status: OrderStatus) {
  switch (status) {
    case "New Order":
      return 0;
    case "Confirmed":
      return 1;
    case "Preparing":
    case "Ready":
      return 2;
    case "Out for Delivery":
      return 3;
    case "Delivered":
      return 4;
    case "Cancelled":
      return -1;
    default:
      return 0;
  }
}

export function TrackOrderView() {
  const { orders, settings } = useApp();
  const [searchQuery, setSearchQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const [foundOrder, setFoundOrder] = useState<Order | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setSearched(true);
    const cleanQuery = searchQuery.trim().toLowerCase().replace("#", "");

    const match = orders.find(
      o =>
        o.id.toLowerCase().replace("#", "").includes(cleanQuery) ||
        o.customerPhone.replace(/\s+/g, "").includes(cleanQuery) ||
        (o.customerEmail && o.customerEmail.toLowerCase().includes(cleanQuery))
    );

    setFoundOrder(match || null);
  };

  const handleQuickLookup = (order: Order) => {
    setSearchQuery(order.id);
    setSearched(true);
    setFoundOrder(order);
  };

  const currentStep = foundOrder ? getStepIndex(foundOrder.status) : 0;

  const waInquiryLink = foundOrder
    ? `https://wa.me/${settings.business.whatsapp}?text=${encodeURIComponent(
        `Hello PB DELICACIES, I am inquiring about the status of my order #${foundOrder.id}.`
      )}`
    : `https://wa.me/${settings.business.whatsapp}?text=${encodeURIComponent(
        "Hello PB DELICACIES, I need assistance with an order."
      )}`;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-20 animate-fade-in">
      {/* Title */}
      <div className="text-center max-w-xl mx-auto">
        <span
          className="text-xs font-bold tracking-[0.2em] uppercase"
          style={{ color: "var(--gold)" }}
        >
          Live Status Tracker
        </span>
        <h1
          className="font-serif text-3xl sm:text-5xl font-bold mt-1"
          style={{ color: "var(--brown)" }}
        >
          Track Your Order
        </h1>
        <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--muted-foreground)" }}>
          Enter your Order Number (e.g. <span className="font-mono font-bold text-foreground">PB-1042</span>) or phone number to check your delivery progress in real time.
        </p>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mt-8 max-w-xl mx-auto">
        <div className="relative flex items-center">
          <div className="absolute left-4 pointer-events-none text-muted-foreground">
            <Icon name="search" size={18} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Enter Order # or Phone Number..."
            className="w-full pl-12 pr-32 py-4 rounded-full border border-border bg-card text-sm focus:outline-none focus:ring-2 shadow-sm font-medium"
            style={{ ["--tw-ring-color" as string]: "var(--ring)" }}
          />
          <button
            type="submit"
            className="absolute right-2 px-6 py-2.5 rounded-full font-bold text-xs shadow-md transition-transform hover:scale-105 active:scale-95"
            style={{ background: "var(--primary)", color: "#fff" }}
          >
            Track Order
          </button>
        </div>

        {/* Quick sample chips */}
        {orders.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span style={{ color: "var(--muted-foreground)" }}>Recent Orders:</span>
            {orders.slice(0, 3).map(o => (
              <button
                key={o.id}
                type="button"
                onClick={() => handleQuickLookup(o)}
                className="px-3 py-1 rounded-full border border-border bg-card hover:bg-secondary font-mono font-bold text-xs transition-colors"
                style={{ color: "var(--brown)" }}
              >
                #{o.id} ({o.customerName.split(" ")[0]})
              </button>
            ))}
          </div>
        )}
      </form>

      {/* Result Card */}
      {searched && foundOrder ? (
        <div className="mt-12 bg-card rounded-3xl border border-border p-6 sm:p-10 shadow-lg animate-float-up">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Order Reference
              </span>
              <h2 className="font-serif text-3xl font-bold mt-0.5" style={{ color: "var(--primary)" }}>
                #{foundOrder.id}
              </h2>
              <div className="text-xs text-muted-foreground mt-1">
                Placed on {new Date(foundOrder.createdAt).toLocaleDateString("en-NG", { dateStyle: "medium" })} at{" "}
                {new Date(foundOrder.createdAt).toLocaleTimeString("en-NG", { hour: "2-digit", minute: "2-digit" })}
              </div>
            </div>

            <div className="flex flex-col sm:items-end gap-1">
              <span
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-xs"
                style={{
                  background:
                    foundOrder.status === "Delivered"
                      ? "rgba(74, 107, 61, 0.15)"
                      : foundOrder.status === "Cancelled"
                      ? "rgba(220, 38, 38, 0.15)"
                      : "rgba(217, 138, 61, 0.2)",
                  color:
                    foundOrder.status === "Delivered"
                      ? "var(--green)"
                      : foundOrder.status === "Cancelled"
                      ? "#dc2626"
                      : "var(--gold)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-current" />
                <span>{foundOrder.status}</span>
              </span>
              <span className="text-xs text-muted-foreground">
                Payment: <strong className="text-foreground">{foundOrder.paymentMethod}</strong> ({foundOrder.paymentStatus})
              </span>
            </div>
          </div>

          {/* Timeline Step Progression */}
          {foundOrder.status !== "Cancelled" ? (
            <div className="py-8 border-b border-border">
              <h3 className="font-serif text-lg font-bold mb-6" style={{ color: "var(--brown)" }}>
                Delivery Progress
              </h3>

              <div className="relative">
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 sm:gap-2">
                  {ORDER_STEPS.map((step, idx) => {
                    const isDone = idx <= currentStep;
                    const isCurrent = idx === currentStep;
                    return (
                      <div key={step.status} className="flex sm:flex-col items-center sm:text-center gap-4 sm:gap-2 relative">
                        {/* Step Circle */}
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all shadow-xs z-10"
                          style={{
                            background: isDone ? "var(--primary)" : "var(--muted)",
                            color: isDone ? "#fff" : "var(--muted-foreground)",
                            transform: isCurrent ? "scale(1.15)" : "scale(1)",
                            boxShadow: isCurrent ? "0 0 0 4px rgba(181, 71, 31, 0.2)" : "none",
                          }}
                        >
                          {isDone && !isCurrent ? (
                            <Icon name="check" size={16} />
                          ) : (
                            idx + 1
                          )}
                        </div>

                        {/* Label */}
                        <div>
                          <div
                            className="font-bold text-xs"
                            style={{
                              color: isDone ? "var(--brown)" : "var(--muted-foreground)",
                            }}
                          >
                            {step.label}
                          </div>
                          <div className="text-[11px] mt-0.5 max-w-[140px] leading-tight" style={{ color: "var(--muted-foreground)" }}>
                            {step.desc}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="py-6 border-b border-border text-center text-sm text-red-600 font-semibold">
              This order was cancelled. Please contact us on WhatsApp for clarification.
            </div>
          )}

          {/* Order Details & Items Summary */}
          <div className="pt-6 grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-serif text-base font-bold mb-3" style={{ color: "var(--brown)" }}>
                Items in This Order
              </h4>
              <div className="space-y-3">
                {foundOrder.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start text-xs sm:text-sm gap-2">
                    <div>
                      <span className="font-bold text-primary">{item.quantity}×</span>{" "}
                      <span className="font-medium text-foreground">{item.name}</span>
                      {item.extras && item.extras.length > 0 && (
                        <div className="text-[11px] text-muted-foreground">
                          + {item.extras.join(", ")}
                        </div>
                      )}
                    </div>
                    <span className="font-bold tabular-nums text-foreground">
                      {naira(item.total)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-3 border-t border-border space-y-1.5 text-xs">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span className="font-semibold text-foreground">{naira(foundOrder.subtotal)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Delivery ({foundOrder.deliveryArea})</span>
                  <span className="font-semibold text-foreground">{naira(foundOrder.deliveryFee)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold pt-1.5 border-t border-border">
                  <span style={{ color: "var(--brown)" }}>Total</span>
                  <span style={{ color: "var(--primary)" }}>{naira(foundOrder.total)}</span>
                </div>
              </div>
            </div>

            {/* Delivery Destination & Support */}
            <div className="bg-background rounded-2xl p-5 border border-border flex flex-col justify-between">
              <div>
                <h4 className="font-serif text-base font-bold mb-3" style={{ color: "var(--brown)" }}>
                  Delivery Destination
                </h4>
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-muted-foreground">Recipient:</span>{" "}
                    <strong className="text-foreground">{foundOrder.customerName}</strong>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Phone:</span>{" "}
                    <strong className="text-foreground">{foundOrder.customerPhone}</strong>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Address:</span>{" "}
                    <span className="text-foreground font-medium">{foundOrder.deliveryAddress}</span> ({foundOrder.deliveryArea})
                  </div>
                  {foundOrder.orderNotes && (
                    <div className="pt-2 italic text-muted-foreground">
                      "{foundOrder.orderNotes}"
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60">
                <a
                  href={waInquiryLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-full font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-transform hover:scale-105"
                  style={{ background: "var(--green)", color: "#fff" }}
                >
                  <Icon name="whatsapp" size={16} />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : searched && !foundOrder ? (
        <div className="mt-12 bg-card rounded-3xl border border-border p-10 text-center shadow-sm">
          <div
            className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
            style={{ background: "var(--secondary)", color: "var(--primary)" }}
          >
            <Icon name="alert" size={28} />
          </div>
          <h3 className="font-serif text-2xl font-bold" style={{ color: "var(--brown)" }}>
            No Order Found
          </h3>
          <p className="text-sm mt-2 max-w-md mx-auto" style={{ color: "var(--muted-foreground)" }}>
            We couldn't locate an order matching "<span className="font-bold text-foreground">{searchQuery}</span>". Please check the order reference number or reach out to us directly on WhatsApp.
          </p>

          <a
            href={waInquiryLink}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold shadow-sm"
            style={{ background: "var(--green)", color: "#fff" }}
          >
            <Icon name="whatsapp" size={16} />
            <span>Chat with Customer Care</span>
          </a>
        </div>
      ) : null}
    </div>
  );
}

export default TrackOrderView;
