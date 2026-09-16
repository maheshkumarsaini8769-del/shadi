import Link from "next/link";
import Image from "next/image";
import { Sparkles, Heart, Crown, Gem, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Our Heritage | Shadi Luxury Bridal Showroom",
  description: "Discover the story behind Shadi — where centuries of Rajasthani zardozi artistry meet contemporary Indian bridal couture."
};

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "var(--cream)", minHeight: "100vh", padding: "2.5rem 0 6rem" }}>
      <div className="container">
        {/* Breadcrumbs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.82rem",
            color: "var(--text-secondary)",
            marginBottom: "2.5rem"
          }}
        >
          <Link href="/" prefetch={false} style={{ color: "var(--text-secondary)" }}>
            Home
          </Link>
          <span>&gt;</span>
          <span style={{ color: "var(--maroon)", fontWeight: 600 }}>About Shadi</span>
        </div>

        {/* Hero Banner */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "450px",
            borderRadius: "2px",
            overflow: "hidden",
            marginBottom: "5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "#FFFFFF"
          }}
        >
          <Image
            src="/images/hero-bride-palace.jpg"
            alt="Shadi Bridal Couture Heritage"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(18, 14, 14, 0.65)"
            }}
          />

          <div style={{ position: "relative", zIndex: 2, maxWidth: "750px", padding: "0 1.5rem" }}>
            <span style={{ fontSize: "0.82rem", letterSpacing: "0.25em", color: "var(--gold)", textTransform: "uppercase", fontWeight: 700 }}>
              OUR SACRED CALLING
            </span>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 600,
                marginTop: "0.6rem",
                lineHeight: 1.15
              }}
            >
              More Than Outfits,
              <br />
              We Create Memories
            </h1>
            <p style={{ fontSize: "1.05rem", color: "#E8DFD9", marginTop: "1rem", lineHeight: 1.6 }}>
              Founded in the royal heartland of Rajasthan, Shadi is dedicated to celebrating every woman&apos;s most monumental life chapter.
            </p>
          </div>
        </div>

        {/* Narrative Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
            marginBottom: "6rem"
          }}
          className="about-grid"
        >
          <div>
            <span style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.18em", color: "var(--maroon)", textTransform: "uppercase" }}>
              THE SHADI PHILOSOPHY
            </span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "2.5rem",
                fontWeight: 600,
                color: "var(--text-main)",
                margin: "0.5rem 0 1.2rem"
              }}
            >
              Couture Woven with Royal Splendor &amp; Soul
            </h2>

            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "1.2rem" }}>
              At <strong>Shadi</strong>, we believe an Indian wedding outfit is never just a garment. It is an heirloom, an emotional armor, and the centerpiece of memories that echo across lifetimes.
            </p>

            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "1.8rem" }}>
              Our atelier brings together four generations of master zardozi karigars, silk weavers from Varanasi and Kanchipuram, and modern bridal couturiers. Every lehenga skirt requires between 140 to 220 hours of concentrated hand needlework, ensuring no two creations are ever entirely identical.
            </p>

            <div style={{ display: "flex", gap: "2rem", borderTop: "1px solid #ECE3D6", paddingTop: "1.5rem" }}>
              <div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 700, color: "var(--maroon)" }}>
                  10,000+
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>Brides Celebrated</div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 700, color: "var(--maroon)" }}>
                  180+
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>Hours of Handcrafting</div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 700, color: "var(--maroon)" }}>
                  100%
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>Pure Certified Silk</div>
              </div>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "120%",
              borderRadius: "2px",
              overflow: "hidden",
              border: "1px solid rgba(197, 168, 105, 0.4)",
              boxShadow: "0 14px 35px rgba(0,0,0,0.08)"
            }}
          >
            <Image
              src="/images/cat-bridal.jpg"
              alt="Artisan embroidery craftsmanship"
              fill
              sizes="(max-width: 992px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* 4 Pillars of Shadi */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            padding: "4rem 3rem",
            border: "1px solid #ECE3D6",
            borderRadius: "2px",
            marginBottom: "5rem"
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3rem" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "2.2rem", fontWeight: 600 }}>
              The Four Pillars of Shadi
            </h3>
            <div className="ornamental-divider" style={{ margin: "0.7rem auto 0" }}>
              <span className="ornamental-motif">&#9670; &#10022; &#9670;</span>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "2rem"
            }}
            className="pillars-grid"
          >
            <div>
              <Gem size={28} style={{ color: "var(--gold)", marginBottom: "0.85rem" }} />
              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.4rem" }}>
                Uncompromising Pure Fabrics
              </h4>
              <p style={{ fontSize: "0.84rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Only the finest mulberry raw silks, tissue velvets, and handspun organza receive our seal of approval.
              </p>
            </div>

            <div>
              <Sparkles size={28} style={{ color: "var(--gold)", marginBottom: "0.85rem" }} />
              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.4rem" }}>
                Authentic Heritage Karigari
              </h4>
              <p style={{ fontSize: "0.84rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Preserving authentic Mughal jaal, Rajasthani gota patti, and Varanasi gold zari techniques.
              </p>
            </div>

            <div>
              <Crown size={28} style={{ color: "var(--gold)", marginBottom: "0.85rem" }} />
              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.4rem" }}>
                Royal Bespoke Fit
              </h4>
              <p style={{ fontSize: "0.84rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Every bridal order includes complimentary bespoke tailoring and alteration trials until absolute perfection.
              </p>
            </div>

            <div>
              <Heart size={28} style={{ color: "var(--gold)", marginBottom: "0.85rem" }} />
              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.4rem" }}>
                Empowering the Bride
              </h4>
              <p style={{ fontSize: "0.84rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Engineered for featherweight ease so you dance, smile, and soak up every joyful moment of your wedding.
              </p>
            </div>
          </div>
        </div>

        {/* CTA to Book Appointment */}
        <div
          style={{
            backgroundColor: "#161313",
            color: "#FFFFFF",
            padding: "4rem 3rem",
            borderRadius: "2px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.2rem"
          }}
        >
          <span style={{ fontSize: "0.8rem", color: "var(--gold)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            BEGIN YOUR BRIDAL JOURNEY
          </span>
          <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "2.4rem", fontWeight: 600, maxWidth: "600px" }}>
            Experience the Magic of Shadi in Person
          </h3>
          <p style={{ fontSize: "0.95rem", color: "#B8AEA8", maxWidth: "540px" }}>
            Visit our flagship Rajasthan showroom or connect with our master bridal stylists via private virtual appointments.
          </p>
          <Link href="/book-appointment" prefetch={false} className="btn-gold" style={{ marginTop: "0.5rem" }}>
            <span>SCHEDULE BRIDAL CONSULTATION</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      
    </div>
  );
}
