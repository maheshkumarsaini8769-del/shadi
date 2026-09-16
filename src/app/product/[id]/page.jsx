import Link from "next/link";
import { products } from "@/data/products";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import ProductCard from "@/components/ProductCard";

export async function generateStaticParams() {
  return products.map((p) => ({
    id: p.id
  }));
}

export async function generateMetadata({ params }) {
  const product = products.find((p) => p.id === params.id) || products[0];
  return {
    title: `${product.name} | Shadi Luxury Bridal Showroom`,
    description: product.description
  };
}

export default function ProductDetailPage({ params }) {
  const product = products.find((p) => p.id === params.id) || products[0];

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div style={{ backgroundColor: "var(--cream)", minHeight: "100vh", padding: "2rem 0 6rem" }}>
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.82rem",
            color: "var(--text-secondary)",
            marginBottom: "2.5rem",
            flexWrap: "wrap"
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
          <Link href="/lehengas" prefetch={false} style={{ color: "var(--text-secondary)" }}>
            Lehengas
          </Link>
          <span>&gt;</span>
          <span style={{ color: "var(--maroon)", fontWeight: 600 }}>{product.name}</span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 1fr",
            gap: "3.5rem",
            alignItems: "start",
            marginBottom: "6rem"
          }}
          className="product-detail-layout"
        >
          <ProductGallery images={product.images} name={product.name} />
          <ProductInfo product={product} />
        </div>

        <div style={{ borderTop: "1px solid #ECE3D6", paddingTop: "4rem" }}>
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3rem" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", color: "var(--maroon)", textTransform: "uppercase" }}>
              PAIR WITH PERFECTION
            </span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "2.4rem",
                fontWeight: 600,
                color: "var(--text-main)",
                marginTop: "0.3rem"
              }}
            >
              You May Also Like
            </h2>
            <div className="ornamental-divider" style={{ margin: "0.8rem auto 0" }}>
              <span className="ornamental-motif">&#9670; &#10022; &#9670;</span>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1.5rem"
            }}
            className="related-products-grid"
          >
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
}
