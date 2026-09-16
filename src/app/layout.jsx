import "./globals.css";
import { ShopProvider } from "@/context/ShopContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import WishlistDrawer from "@/components/WishlistDrawer";
import AppointmentModal from "@/components/AppointmentModal";
import SizeGuideModal from "@/components/SizeGuideModal";
import SearchModal from "@/components/SearchModal";
import Toast from "@/components/Toast";

export const metadata = {
  title: "Shadi — For Her Big Day | Luxury Indian Bridal & Wedding Couture",
  description:
    "Ultra-luxury women's wedding showroom featuring handcrafted royal bridal lehengas, heirloom Banarasi sarees, contemporary indo-western drapes, and heritage polki jewelry.",
  keywords: "Indian bridal lehengas, bridal couture, wedding sarees, luxury Indian wedding showroom, Shadi Sikar Rajasthan",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ShopProvider>
          <Header />
          <main>{children}</main>
          <Footer />

          {/* Interactive Drawers & Modals */}
          <CartDrawer />
          <WishlistDrawer />
          <AppointmentModal />
          <SizeGuideModal />
          <SearchModal />
          <Toast />
        </ShopProvider>
      </body>
    </html>
  );
}
