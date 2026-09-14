import React, { useState } from "react";
import { AppContextProvider, useApp } from "./context/AppContext";
import { AdminAuthProvider, useAdminAuth } from "./context/AdminAuthContext";
import type { Order } from "./types";

// Common components
import Toast from "./components/common/Toast";
import Icon from "./components/common/Icon";

// Customer components
import Header from "./components/customer/Header";
import Footer from "./components/customer/Footer";
import HomeView from "./components/customer/HomeView";
import MenuView from "./components/customer/MenuView";
import CartView from "./components/customer/CartView";
import CartDrawer from "./components/customer/CartDrawer";
import CheckoutView from "./components/customer/CheckoutView";
import ConfirmView from "./components/customer/ConfirmView";
import CookingView from "./components/customer/CookingView";
import AboutView from "./components/customer/AboutView";
import TrackOrderView from "./components/customer/TrackOrderView";
import ContactView from "./components/customer/ContactView";
import DetailModal from "./components/customer/DetailModal";

// Admin components
import AdminLayout from "./components/admin/AdminLayout";
import AdminLogin from "./components/admin/AdminLogin";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught application error in render:", error, errorInfo);
  }

  handleReset = () => {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.clear();
      }
    } catch (_) {}
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#fbf6ee] p-6 text-[#2b1c14] font-sans">
          <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-[#ead9c4] shadow-xl text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#f4e6d2] text-[#b5471f] flex items-center justify-center font-serif text-2xl font-bold mb-4">
              PB
            </div>
            <h1 className="font-serif text-2xl font-bold text-[#4a2c19]">
              PB DELICACIES
            </h1>
            <p className="mt-2 text-sm text-[#8a6f5c] leading-relaxed">
              We encountered an issue loading the application state. Click below to reload fresh menu data.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full py-3.5 px-6 rounded-full font-bold text-sm bg-[#b5471f] text-white shadow-md hover:opacity-95 active:scale-95 transition-all"
              >
                Reload Application
              </button>
              <button
                onClick={this.handleReset}
                className="w-full py-3 px-6 rounded-full font-bold text-xs border border-[#ead9c4] text-[#4a2c19] hover:bg-[#f4e6d2] transition-colors"
              >
                Reset Stored Cache & Reload
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function AppContent() {
  const { page, go, detailItem, setDetailItem, addLine, toast, settings } = useApp();
  const { isAuthenticated, loading: authLoading } = useAdminAuth();

  const [confirmedOrder, setConfirmedOrder] = useState<Order | null>(null);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  const handleOrderPlaced = (order: Order) => {
    setConfirmedOrder(order);
    go("confirm");
  };

  const whatsappPhone = settings?.business?.whatsapp || "2348150781154";
  const waFloatingLink = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    "Hello PB DELICACIES, I would like to place an order or make an enquiry."
  )}`;

  // If in Admin Section
  if (page === "admin") {
    if (authLoading) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin" />
            <span className="text-sm font-semibold text-brown">Loading Management Portal...</span>
          </div>
        </div>
      );
    }

    if (!isAuthenticated) {
      return (
        <div className="min-h-screen bg-background flex flex-col justify-between">
          <AdminLogin />
          <Toast message={toast} />
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-background">
        <AdminLayout />
        <Toast message={toast} />
      </div>
    );
  }

  // Customer Section
  return (
    <div className="min-h-full flex flex-col bg-background text-foreground selection:bg-secondary selection:text-primary">
      <Header onOpenCart={() => setCartDrawerOpen(true)} />

      <main className="flex-1 pb-16">
        {page === "home" && <HomeView />}
        {page === "menu" && <MenuView />}
        {page === "cooking" && <CookingView />}
        {page === "about" && <AboutView />}
        {page === "track" && <TrackOrderView />}
        {page === "contact" && <ContactView />}
        {page === "cart" && <CartView />}
        {page === "checkout" && <CheckoutView onOrderPlaced={handleOrderPlaced} />}
        {page === "confirm" && confirmedOrder && <ConfirmView order={confirmedOrder} />}
      </main>

      <Footer />

      {/* Slide-over Cart Drawer */}
      <CartDrawer isOpen={cartDrawerOpen} onClose={() => setCartDrawerOpen(false)} />

      {/* Floating WhatsApp Action Button */}
      <a
        href={waFloatingLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 group focus:outline-none"
        style={{ background: "var(--green)", color: "#fff" }}
        aria-label="Chat on WhatsApp"
      >
        <Icon name="whatsapp" size={28} />
        <span className="absolute right-16 bg-card border border-border text-brown px-3 py-1.5 rounded-xl text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Order on WhatsApp
        </span>
      </a>

      {/* Food Detail & Customization Modal */}
      {detailItem && (
        <DetailModal
          item={detailItem}
          onClose={() => setDetailItem(null)}
          onAdd={(qty, extras, instructions) => {
            addLine(detailItem, qty, extras, instructions);
            setDetailItem(null);
          }}
        />
      )}

      {/* Global Toast Alerts */}
      <Toast message={toast} />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AppContextProvider>
        <AdminAuthProvider>
          <AppContent />
        </AdminAuthProvider>
      </AppContextProvider>
    </ErrorBoundary>
  );
}
