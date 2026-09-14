import React from "react";
import { useApp } from "../../context/AppContext";
import Icon from "../common/Icon";
import type { CartLine } from "../../types";

const DEFAULT_EXTRAS = [
  { name: "Extra Fried Chicken", price: 1500 },
  { name: "Extra Fried Plantain (Dodo)", price: 800 },
  { name: "Crisp Creamy Coleslaw", price: 700 },
  { name: "Extra Pepper Sauce (Ata)", price: 500 },
];

function naira(n: number) {
  return "₦" + n.toLocaleString("en-NG");
}

function lineTotal(l: CartLine) {
  const effectivePrice = l.item.discountPrice || l.item.price;
  const extrasTotal = l.extras.reduce((s, e) => {
    const found = DEFAULT_EXTRAS.find(x => x.name === e);
    return s + (found ? found.price : 0);
  }, 0);
  return (effectivePrice + extrasTotal) * l.qty;
}

export function CartDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { cart, cartCount, setQty, removeLine, go, settings } = useApp();

  if (!isOpen) return null;

  const subtotal = cart.reduce((s, l) => s + lineTotal(l), 0);
  const deliveryFee = cart.length > 0 ? settings.business.deliveryFee : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div
          className="w-screen max-w-md bg-card border-l border-border shadow-2xl flex flex-col justify-between animate-float-up"
          style={{ background: "var(--card)" }}
        >
          {/* Header */}
          <div className="px-6 py-5 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "var(--secondary)", color: "var(--primary)" }}
              >
                <Icon name="cart" size={18} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold" style={{ color: "var(--brown)" }}>
                  Your Cart
                </h3>
                <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                  {cartCount} item{cartCount !== 1 ? "s" : ""} selected
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
              style={{ color: "var(--brown)" }}
              aria-label="Close cart"
            >
              <Icon name="close" size={18} />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="py-16 text-center">
                <div
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                  style={{ background: "var(--secondary)", color: "var(--primary)" }}
                >
                  <Icon name="food" size={28} />
                </div>
                <h4 className="font-serif text-lg font-bold" style={{ color: "var(--brown)" }}>
                  Your cart is empty
                </h4>
                <p className="text-xs mt-1 max-w-xs mx-auto" style={{ color: "var(--muted-foreground)" }}>
                  Explore this weekend's fresh Nigerian menu and add delicious delicacies.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    go("menu");
                  }}
                  className="mt-6 px-6 py-2.5 rounded-full text-xs font-bold transition-transform hover:scale-105"
                  style={{ background: "var(--primary)", color: "#fff" }}
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              cart.map(l => (
                <div
                  key={l.key}
                  className="bg-background rounded-2xl border border-border p-3.5 flex gap-3 shadow-2xs"
                >
                  <img
                    src={l.item.image}
                    alt={l.item.name}
                    className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-bold text-xs truncate" style={{ color: "var(--brown)" }}>
                        {l.item.name}
                      </h4>
                      <button
                        onClick={() => removeLine(l.key)}
                        className="text-muted-foreground hover:text-primary transition-colors p-0.5"
                        aria-label="Remove"
                      >
                        <Icon name="trash" size={14} />
                      </button>
                    </div>

                    {l.extras.length > 0 && (
                      <p className="text-[10px]" style={{ color: "var(--muted-foreground)" }}>
                        +{l.extras.join(", ")}
                      </p>
                    )}

                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-border/40">
                      {/* Quantity Stepper */}
                      <div className="inline-flex items-center rounded-full border border-border bg-card p-0.5">
                        <button
                          onClick={() => setQty(l.key, l.qty - 1)}
                          className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-muted"
                          style={{ color: "var(--brown)" }}
                        >
                          <Icon name="minus" size={10} />
                        </button>
                        <span className="w-5 text-center text-xs font-bold" style={{ color: "var(--brown)" }}>
                          {l.qty}
                        </span>
                        <button
                          onClick={() => setQty(l.key, l.qty + 1)}
                          className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-muted"
                          style={{ color: "var(--brown)" }}
                        >
                          <Icon name="plus" size={10} />
                        </button>
                      </div>

                      <span className="font-bold text-xs" style={{ color: "var(--primary)" }}>
                        {naira(lineTotal(l))}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Action */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-border bg-card space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between" style={{ color: "var(--muted-foreground)" }}>
                  <span>Subtotal</span>
                  <span className="font-semibold text-foreground">{naira(subtotal)}</span>
                </div>
                <div className="flex justify-between" style={{ color: "var(--muted-foreground)" }}>
                  <span>Delivery (Ido-Ekiti)</span>
                  <span className="font-semibold text-foreground">{naira(deliveryFee)}</span>
                </div>
                <div className="h-px my-1" style={{ background: "var(--border)" }} />
                <div className="flex justify-between items-baseline text-sm">
                  <span className="font-serif font-bold" style={{ color: "var(--brown)" }}>
                    Estimated Total
                  </span>
                  <span className="font-serif text-lg font-bold" style={{ color: "var(--primary)" }}>
                    {naira(total)}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  onClick={() => {
                    onClose();
                    go("cart");
                  }}
                  className="py-3 px-3 rounded-full text-xs font-bold border border-border hover:bg-secondary transition-colors text-center"
                  style={{ color: "var(--brown)" }}
                >
                  View Full Cart
                </button>
                <button
                  onClick={() => {
                    onClose();
                    go("checkout");
                  }}
                  className="py-3 px-3 rounded-full text-xs font-bold shadow-md transition-transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-1.5"
                  style={{ background: "var(--primary)", color: "#fff" }}
                >
                  <span>Checkout</span>
                  <Icon name="arrow" size={13} />
                </button>
              </div>

              <p className="text-[10px] text-center" style={{ color: "var(--muted-foreground)" }}>
                Weekend orders prepared freshly on Fridays, Saturdays & Sundays.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartDrawer;
