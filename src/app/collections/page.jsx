import Link from "next/link";
import { collections } from "@/data/products";
import CategoryCard from "@/components/CategoryCard";

export const metadata = {
  title: "Our Collections | Shadi Bridal Couture",
  description: "Explore our royal wedding collections: Bridal Lehengas, Handloom Sarees, Indo-Western Drapes, Reception Gowns, and Heritage Bridal Accessories."
};

export default function CollectionsPage() {
  return (
    <div style={{ backgroundColor: "var(--cream)", minHeight: "100vh", padding: "2.5rem 0 6rem" }}>
      <div className="container">
        {/* Breadcrumb */}
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
          <span style={{ color: "var(--maroon)", fontWeight: 600 }}>Collections</span>
        </div>

        {/* Header matching reference */}
        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 3.5rem" }}>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)",
              fontWeight: 600,
              color: "var(--text-main)",
              letterSpacing: "0.02em"
            }}
          >
            Our Collections
          </h1>

          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              marginTop: "0.6rem",
              lineHeight: 1.6
            }}
          >
            From timeless traditions to modern elegance, find the perfect look for every celebration.
          </p>

          <div className="ornamental-divider">
            <span className="ornamental-motif">&#9670; &#10022; &#9670;</span>
          </div>
        </div>

        {/* 5 Category Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "1.5rem",
            marginBottom: "5rem"
          }}
          className="collections-page-grid"
        >
          {collections.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>

        {/* Category Editorial Highlights */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
          {collections.map((cat, index) => (
            <div
              key={cat.id}
              style={{
                display: "grid",
                gridTemplateColumns: index % 2 === 0 ? "1fr 1.2fr" : "1.2fr 1fr",
                gap: "3rem",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                padding: "2.5rem",
                border: "1px solid #ECE3D6",
                borderRadius: "2px"
              }}
              className="collection-detail-row"
            >
              <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    color: "var(--maroon)",
                    textTransform: "uppercase"
                  }}
                >
                  {cat.tagline}
                </span>

                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2.2rem",
                    fontWeight: 600,
                    color: "var(--text-main)",
                    margin: "0.4rem 0 1rem"
                  }}
                >
                  {cat.name}
                </h2>

                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.8rem" }}>
                  {cat.description}
                </p>

                <Link href={cat.link} prefetch={false} className="btn-primary">
                  <span>EXPLORE {cat.name.toUpperCase()}</span>
                </Link>
              </div>

              <div
                style={{
                  order: index % 2 === 0 ? 2 : 1,
                  position: "relative",
                  width: "100%",
                  paddingTop: "65%",
                  overflow: "hidden",
                  borderRadius: "2px"
                }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
}
