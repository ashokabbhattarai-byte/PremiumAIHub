"use client";
import dynamic from "next/dynamic";
import { useRef } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  Check,
  ChevronRight,
  Cloud,
  Headphones,
  MessageCircle,
  Mountain,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { useLandingAnimations } from "@/hooks/useLandingAnimations";
import { store } from "@/lib/store";
import { Brand } from "@/components/Brand";
const HeroPlayer = dynamic(() => import("@/components/HeroPlayer"), {
  ssr: false,
});
const products = [
  {
    name: "NordVPN",
    tag: "Stay private. Go anywhere.",
    term: "1 Year Premium",
    icon: "nord",
    category: "Privacy & security",
  },
  {
    name: "Muse AI",
    tag: "Less searching. More creating.",
    term: "1 Month Bonus",
    icon: "muse",
    category: "Creative intelligence",
  },
  {
    name: "Canva Pro",
    tag: "Make your next big impression.",
    term: "Business / Lifetime access",
    icon: "canva",
    category: "Design without limits",
  },
  {
    name: "Microsoft Copilot",
    tag: "Your everyday work, upgraded.",
    term: "Microsoft 365",
    icon: "copilot",
    category: "Smarter productivity",
  },
];
function ProductIcon({ kind }: { kind: string }) {
  return (
    <div className={`product-icon ${kind}`}>
      {kind === "nord" ? (
        <Mountain size={35} fill="currentColor" />
      ) : kind === "muse" ? (
        <span>
          m<span className="muse-dot">.</span>
        </span>
      ) : kind === "canva" ? (
        <span>Canva</span>
      ) : (
        <span className="copilot-mark" />
      )}
    </div>
  );
}
export default function Home() {
  const root = useRef<HTMLDivElement>(null);
  useLandingAnimations(root);
  return (
    <div ref={root}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <Brand />
        <nav aria-label="Main navigation">
          <a href="#gemini">
            The Gemini offer <span className="nav-dot" />
          </a>
          <a href="#vault">Digital vault</a>
          <a href="#support">Why us</a>
        </nav>
        <a
          className="nav-contact"
          href={store.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          Let’s talk <ArrowUpRight size={16} />
        </a>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-visual">
            <HeroPlayer />
          </div>
          <div className="hero-grid" />
          <div className="hero-inner container">
            <div className="hero-copy">
              <div className="offer-pill hero-reveal">
                <span /> The Dashain upgrade is here <Sparkles size={13} />
              </div>
              <h1 id="hero-heading" className="hero-reveal">
                UNLOCK THE
                <br />
                ULTIMATE AI
                <br />
                <span className="outline-text">WORKSPACE.</span>
              </h1>
              <p className="hero-description hero-reveal">
                18 Months of Gemini Advanced. 5TB Storage.
                <br />
                <strong>Unbeatable local price.</strong> Unlimited
                possibilities.
              </p>
              <div className="hero-actions hero-reveal">
                <a href="#gemini" data-magnetic className="button button-cyan">
                  Claim Rs. 699 Offer <ArrowUpRight size={19} />
                </a>
                <span className="hero-price-note">
                  <s>Rs. 48,000</s>
                  <span>One payment. 18 months.</span>
                </span>
              </div>
              <div className="hero-assurance hero-reveal">
                <span>
                  <ShieldCheck size={15} /> Replacement warranty
                </span>
                <span>
                  <Zap size={15} /> Instant delivery
                </span>
              </div>
            </div>
            <div className="orb-caption" aria-hidden="true">
              <span className="status-dot" /> INTELLIGENCE, UNLOCKED{" "}
              <span className="orb-line" />
              <small>GEMINI ADVANCED / PRO</small>
            </div>
            <div className="floating-label label-storage" aria-hidden="true">
              <Cloud size={17} />
              <span>
                <strong>5 TB</strong> Cloud storage
              </span>
            </div>
            <div className="floating-label label-model" aria-hidden="true">
              <Sparkles size={17} />
              <span>Next-level intelligence</span>
            </div>
            <div className="hero-bottom">
              <a href="#gemini">
                <span className="scroll-icon">
                  <ArrowDown size={15} />
                </span>{" "}
                Scroll to unlock more
              </a>
              <span>
                GLOBAL TOOLS. <strong>LOCAL ACCESS.</strong>
                <span className="nepal-flag">🇳🇵</span>
              </span>
            </div>
          </div>
        </section>
        <div className="benefit-strip">
          <div className="container">
            <span>
              <Sparkles /> Premium tools, everyday prices
            </span>
            <span>
              <ShieldCheck /> Upgrade with confidence
            </span>
            <span>
              <MessageCircle /> Made for Nepal
            </span>
          </div>
        </div>
        <section id="gemini" className="deal-section container">
          <div className="section-top">
            <span className="section-kicker">
              <span /> The headline deal
            </span>
            <span className="tiny-label">BIG AMBITIONS. SMALL PRICE TAG.</span>
          </div>
          <div className="deal-layout">
            <div className="voucher-stage deal-reveal">
              <div className="voucher-orbit" />
              <div className="voucher">
                <div className="voucher-top">
                  <span className="gemini-symbol">✦</span>
                  <span>
                    Google Gemini<small>ADVANCED / PRO</small>
                  </span>
                  <span className="voucher-chip">PREMIUM</span>
                </div>
                <div className="voucher-center">
                  <span>Your unfair advantage.</span>
                  <strong>
                    18 <span>months.</span>
                  </strong>
                  <p>A whole new level of possible.</p>
                </div>
                <div className="voucher-bottom">
                  <span>
                    <Cloud size={18} /> 5 TB STORAGE
                  </span>
                  <span className="voucher-stars">✦ ✦ ✦ ✦</span>
                </div>
                <div className="voucher-shine" />
              </div>
              <div className="voucher-seal">
                <Zap size={16} fill="currentColor" />
                <strong>98% OFF</strong>
                <span>THE UPGRADE</span>
              </div>
              <div className="voucher-caption">
                <span /> One account. A world of possibilities.
              </div>
            </div>
            <div className="deal-content">
              <div className="small-pill deal-reveal">
                DASHAIN SPECIAL <span>Limited slots</span>
              </div>
              <h2 className="deal-reveal">
                Big intelligence.
                <br />
                Little investment.
              </h2>
              <p className="deal-product deal-reveal">
                Gemini Advanced / Pro — 18 Months
              </p>
              <div className="pricing deal-reveal">
                <div>
                  <s>Rs. 48,000</s>
                  <span>Regular value</span>
                </div>
                <div className="price">
                  <small>ONLY</small>
                  <strong>Rs. 699</strong>
                </div>
                <span className="one-time">
                  One-time
                  <br />
                  payment
                </span>
              </div>
              <ul className="feature-list">
                <li>
                  <Check /> Advanced Pro AI Models
                </li>
                <li>
                  <Check /> 5TB Cloud Storage
                </li>
                <li>
                  <Check /> 1000 Monthly Flow Credits
                </li>
                <li>
                  <Check /> Integrated with Gmail / Docs
                </li>
              </ul>
              <a
                data-magnetic
                className="button button-gold deal-reveal"
                href={store.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={19} /> Buy via Facebook{" "}
                <ArrowUpRight size={19} />
              </a>
              <p className="deal-footnote">
                Pay locally. Get set up. Start creating.
              </p>
            </div>
          </div>
        </section>
        <section id="vault" className="vault-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-kicker">
                  <span /> More ways to level up
                </span>
                <h2>
                  The digital vault<span className="cyan-period">.</span>
                </h2>
              </div>
              <p>
                Your favorite tools. A smarter price.
                <br />
                Find your next everyday essential.
              </p>
            </div>
            <div className="vault-grid">
              {products.map((p) => (
                <article className="vault-card" key={p.name}>
                  <div className="card-top">
                    <ProductIcon kind={p.icon} />
                    <ArrowUpRight size={18} />
                  </div>
                  <span className="product-category">{p.category}</span>
                  <h3>{p.name}</h3>
                  <p>{p.tag}</p>
                  <div className="product-term">
                    <span />
                    {p.term}
                  </div>
                  <a
                    href={store.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Deal on Facebook <ArrowUpRight size={16} />
                  </a>
                </article>
              ))}
            </div>
            <p className="vault-note">
              Can’t find your tool?{" "}
              <a
                href={store.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ask us on Facebook <ChevronRight size={13} />
              </a>
            </p>
          </div>
        </section>
        <section id="support" className="support-section container">
          <div className="support-title">
            <span className="section-kicker">
              <span /> Global access. Local peace of mind.
            </span>
            <h2>Premium shouldn’t be complicated.</h2>
          </div>
          <div className="trust-grid">
            <div className="trust-item">
              <span className="trust-icon">
                <Zap />
              </span>
              <div>
                <h3>Instant Delivery</h3>
                <p>
                  Less waiting. More doing.
                  <br />
                  Get access after payment confirmation.
                </p>
              </div>
            </div>
            <div className="trust-item">
              <span className="trust-icon">
                <ShieldCheck />
              </span>
              <div>
                <h3>100% Replacement Warranty</h3>
                <p>
                  Something not working?
                  <br />
                  We’ll help get you back on track.
                </p>
              </div>
            </div>
            <div className="trust-item">
              <span className="trust-icon">
                <Headphones />
              </span>
              <div>
                <h3>Dedicated Local Support</h3>
                <p>
                  Real people, right here in Nepal.
                  <br />
                  Just a message away.
                </p>
              </div>
            </div>
          </div>
          <div className="payment-row">
            <span>
              Pay your way.<small>Simple, secure local payments.</small>
            </span>
            <div
              className="payment-marquee"
              aria-label="Accepted payments: eSewa, Khalti, Mobile Banking"
            >
              <div className="marquee-track">
                {[0, 1].map((i) => (
                  <div className="marquee-group" aria-hidden="true" key={i}>
                    <span className="esewa">
                      e<span>Sewa</span>
                    </span>
                    <i>✦</i>
                    <span className="khalti">▣ khalti</span>
                    <i>✦</i>
                    <span className="banking">▤ Mobile Banking</span>
                    <i>✦</i>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="final-section container">
          <div>
            <span className="section-kicker">
              <span /> Your next chapter starts here
            </span>
            <h2>
              Do more. Create more.
              <br />
              Spend a whole lot less.
            </h2>
          </div>
          <a
            href={store.facebook}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic
            className="button button-cyan"
          >
            Let’s find your upgrade <ArrowUpRight size={19} />
          </a>
        </section>
      </main>
      <footer className="site-footer container">
        <Brand footer />
        <p>Premium tools. Proudly for Nepal.</p>
        <span>© {new Date().getFullYear()} Premium AI Hub</span>
        <p className="disclosure">
          Independent digital subscription storefront. Product names and
          trademarks belong to their respective owners. Confirm account terms,
          availability, and warranty details with our team before purchasing.
        </p>
      </footer>
      <aside className="sticky-offer" inert aria-label="Dashain offer">
        <div>
          <span className="status-dot" />
          <span>
            Limited Slots Available for Dashain!{" "}
            <strong>18 months. Rs. 699.</strong>
          </span>
        </div>
        <a
          className="button button-cyan"
          href={store.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          Message us on Facebook <ArrowUpRight size={17} />
        </a>
      </aside>
    </div>
  );
}
