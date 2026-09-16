"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useShop } from "@/context/ShopContext";
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { setIsSizeGuideOpen } = useShop();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer
      style={{
        backgroundColor: "#161313",
        color: "#E2DDD9",
        paddingTop: "5rem",
        paddingBottom: "2.5rem",
        borderTop: "1px solid rgba(197, 168, 105, 0.25)"
      }}
    >
      <div className="container">
        {/* Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 0.8fr 0.8fr 1.2fr",
            gap: "3.5rem",
            marginBottom: "4rem"
          }}
          className="footer-grid"
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.8rem" }}>
              {/* Floral/Sun Motif in Gold */}
              <svg width="32" height="32" viewBox="0 0 100 100" fill="none" style={{ color: "var(--gold)" }}>
                <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="50" cy="50" r="4" fill="currentColor" />
                <path d="M50 15 C55 30, 55 35, 50 38 C45 35, 45 30, 50 15 Z" fill="currentColor" />
                <path d="M50 85 C55 70, 55 65, 50 62 C45 65, 45 70, 50 85 Z" fill="currentColor" />
                <path d="M15 50 C30 55, 35 55, 38 50 C35 45, 30 45, 15 50 Z" fill="currentColor" />
                <path d="M85 50 C70 55, 65 55, 62 50 C65 45, 70 45, 85 50 Z" fill="currentColor" />
                <path d="M25 25 C40 35, 42 38, 41 41 C38 42, 35 40, 25 25 Z" fill="currentColor" />
                <path d="M75 75 C60 65, 58 62, 59 59 C62 58, 65 60, 75 75 Z" fill="currentColor" />
                <path d="M25 75 C35 60, 38 58, 41 59 C42 62, 40 65, 25 75 Z" fill="currentColor" />
                <path d="M75 25 C65 40, 62 42, 59 41 C58 38, 60 35, 75 25 Z" fill="currentColor" />
              </svg>
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    letterSpacing: "0.06em",
                    lineHeight: 1
                  }}
                >
                  Shadi
                </span>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.55rem",
                    fontWeight: 600,
                    letterSpacing: "0.26em",
                    color: "var(--gold)",
                    marginTop: "2px"
                  }}
                >
                  FOR HER BIG DAY
                </span>
              </div>
            </div>

            <p
              style={{
                fontStyle: "italic",
                fontFamily: "var(--font-serif)",
                fontSize: "1.05rem",
                color: "#C2B9B3",
                margin: "1.2rem 0 1.8rem",
                maxWidth: "320px",
                lineHeight: 1.5
              }}
            >
              Because Every Woman Deserves to Feel Extraordinary.
            </p>

            {/* Newsletter */}
            <div style={{ marginTop: "1.5rem" }}>
              <h4
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.1rem",
                  color: "#FFFFFF",
                  marginBottom: "0.4rem",
                  letterSpacing: "0.03em"
                }}
              >
                Join Our Wedding Circle
              </h4>
              <p style={{ fontSize: "0.8rem", color: "#A89F9C", marginBottom: "1rem" }}>
                Get exclusive updates, offers &amp; new collections.
              </p>

              <form onSubmit={handleSubscribe} style={{ display: "flex", maxWidth: "360px" }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    flex: 1,
                    padding: "0.75rem 1rem",
                    fontSize: "0.82rem",
                    backgroundColor: "#201B1B",
                    border: "1px solid #383030",
                    color: "#FFFFFF",
                    outline: "none",
                    borderRadius: "2px 0 0 2px"
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "0.75rem 1.4rem",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    backgroundColor: "var(--maroon)",
                    color: "#FFFFFF",
                    borderRadius: "0 2px 2px 0",
                    border: "none"
                  }}
                >
                  {subscribed ? "Subscribed!" : "Subscribe"}
                </button>
              </form>
            </div>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: "1.2rem", marginTop: "1.8rem" }}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                style={{ color: "#D4C8C2" }}
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                style={{ color: "#D4C8C2" }}
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                style={{ color: "#D4C8C2" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.373-.056.23-.186.279-.429.167-1.604-.746-2.607-3.088-2.607-4.972 0-4.048 2.942-7.767 8.487-7.767 4.457 0 7.92 3.176 7.92 7.42 0 4.428-2.791 8-6.664 8-1.301 0-2.525-.676-2.944-1.474l-.801 3.054c-.29 1.109-1.074 2.498-1.601 3.351C9.648 23.864 10.806 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                style={{ color: "#D4C8C2" }}
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.15rem",
                color: "#FFFFFF",
                marginBottom: "1.4rem",
                letterSpacing: "0.04em",
                borderBottom: "1px solid rgba(197, 168, 105, 0.2)",
                paddingBottom: "0.5rem"
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.86rem" }}>
              <li><Link href="/" prefetch={false} style={{ color: "#B8AEA8" }}>Home</Link></li>
              <li><Link href="/collections" prefetch={false} style={{ color: "#B8AEA8" }}>Collections</Link></li>
              <li><Link href="/lehengas" prefetch={false} style={{ color: "#B8AEA8" }}>Lehengas</Link></li>
              <li><Link href="/about" prefetch={false} style={{ color: "#B8AEA8" }}>About</Link></li>
              <li><Link href="/contact" prefetch={false} style={{ color: "#B8AEA8" }}>Contact</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.15rem",
                color: "#FFFFFF",
                marginBottom: "1.4rem",
                letterSpacing: "0.04em",
                borderBottom: "1px solid rgba(197, 168, 105, 0.2)",
                paddingBottom: "0.5rem"
              }}
            >
              Help
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.86rem" }}>
              <li><Link href="/contact#faq" prefetch={false} style={{ color: "#B8AEA8" }}>FAQ</Link></li>
              <li><Link href="/contact#shipping" prefetch={false} style={{ color: "#B8AEA8" }}>Shipping</Link></li>
              <li><Link href="/contact#returns" prefetch={false} style={{ color: "#B8AEA8" }}>Returns</Link></li>
              <li>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  style={{ color: "#B8AEA8", fontSize: "0.86rem", textAlign: "left" }}
                >
                  Size Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.15rem",
                color: "#FFFFFF",
                marginBottom: "1.4rem",
                letterSpacing: "0.04em",
                borderBottom: "1px solid rgba(197, 168, 105, 0.2)",
                paddingBottom: "0.5rem"
              }}
            >
              Contact
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.86rem" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#B8AEA8" }}>
                <Phone size={15} style={{ color: "var(--gold)" }} />
                <span>+91 98765 43210</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#B8AEA8" }}>
                <Mail size={15} style={{ color: "var(--gold)" }} />
                <span>support@shadi.in</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "#B8AEA8" }}>
                <MapPin size={16} style={{ color: "var(--gold)", flexShrink: 0, marginTop: "3px" }} />
                <span>Showroom: Near Heritage Clock Tower, Palace Road, Sikar, Rajasthan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid #282121",
            paddingTop: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "0.8rem",
            color: "#807572"
          }}
          className="footer-bottom"
        >
          <div>
            &copy; 2024 Shadi. All rights reserved.
          </div>
          <div>
            Made with <span style={{ color: "var(--maroon-light)" }}>&hearts;</span> for every bride
          </div>
        </div>
      </div>

      
    </footer>
  );
}
