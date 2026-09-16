import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Bridal Accessories | Shadi Luxury Bridal Showroom",
  description: "Explore 22K gold-plated kundan and polki jewelry sets, handcrafted embroidered zardozi juttis, and royal bridal potlis."
};

export default function AccessoriesPage() {
  const list = products.filter((p) => p.section === "accessories");

  return (
    <div style={{ backgroundColor: "var(--cream)", minHeight: "100vh", padding: "2.5rem 0 6rem" }}>
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.82rem",
            color: "var(--text-secondary)",
            marginBottom: "2rem"
          }}
        >
          <Link href="/" prefetch={false} style={{ color: "var(--text-secondary)" }}>
            Home
          </Link>
          <span>&gt;</span>
          <Link href="/collections" prefetch={false} style={{ color: "var(--text-secondary)" }}>
            Collections
          </Link>
          <span>&gt;</span>
          <span style={{ color: "var(--maroon)", fontWeight: 600 }}>Accessories</span>
        </div>

        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 3.5rem" }}>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)",
              fontWeight: 600,
              color: "var(--text-main)"
            }}
          >
            Bridal Accessories
          </h1>
          <p style={{ fontSize: "1rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
            Complete Your Look &mdash; Handcrafted Kundan &amp; Polki jewelry, zardozi juttis &amp; potlis
          </p>
          <div className="ornamental-divider">
            <span className="ornamental-motif">&#9670; &#10022; &#9670;</span>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem"
          }}
          className="accessories-grid"
        >
          {list.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      
    </div>
  );
}
