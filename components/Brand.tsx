import Image from "next/image";

/** Keep the supplied artwork intact; use live type for a legible small-size lockup. */
export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a
      href="#"
      className={`brand brand-lockup${footer ? " brand-footer" : ""}`}
      aria-label="Premium AI Hub home"
    >
      <Image
        src="/brand/premium-ai-hub.jpeg"
        alt=""
        width={footer ? 80 : 64}
        height={footer ? 80 : 64}
        sizes={footer ? "80px" : "(max-width: 767px) 48px, 64px"}
        priority={!footer}
        className="brand-artwork"
      />
      <span className="brand-wordmark" aria-hidden="true">
        <span className="brand-premium">PREMIUM</span>
        <span className="brand-hub">AI HUB</span>
      </span>
    </a>
  );
}
