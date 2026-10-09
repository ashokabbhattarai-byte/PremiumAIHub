"use client";
import { type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, useGSAP);
export function useLandingAnimations(scope: RefObject<HTMLDivElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const sticky = scope.current?.querySelector<HTMLElement>(".sticky-offer");
      const showSticky = (show: boolean) => {
        if (sticky) {
          sticky.classList.toggle("is-visible", show);
          sticky.inert = !show;
        }
      };
      ScrollTrigger.create({
        trigger: ".hero",
        start: "bottom top",
        onEnter: () => showSticky(true),
        onLeaveBack: () => showSticky(false),
        onRefresh: (self) => showSticky(self.scroll() >= self.start),
      });
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".hero-reveal", {
          y: 34,
          opacity: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
        });
        gsap.from(".deal-reveal", {
          y: 36,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          scrollTrigger: { trigger: "#gemini", start: "top 78%" },
        });
        gsap.from(".feature-list li", {
          x: -24,
          opacity: 0,
          stagger: 0.14,
          scrollTrigger: { trigger: ".feature-list", start: "top 85%" },
        });
        gsap.from(".vault-card", {
          y: 65,
          rotationX: 14,
          opacity: 0,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: ".vault-grid", start: "top 88%" },
        });
        gsap.from(".trust-item", {
          y: 25,
          opacity: 0,
          stagger: 0.15,
          scrollTrigger: { trigger: ".trust-grid", start: "top 90%" },
        });
        const marquee = gsap.to(".marquee-track", {
          xPercent: -50,
          duration: 25,
          repeat: -1,
          ease: "none",
        });
        const pause = () => marquee.pause(),
          play = () => marquee.play();
        const el = scope.current?.querySelector(".payment-marquee");
        el?.addEventListener("mouseenter", pause);
        el?.addEventListener("mouseleave", play);
        return () => {
          el?.removeEventListener("mouseenter", pause);
          el?.removeEventListener("mouseleave", play);
        };
      });
      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.to(".hero-visual", {
            scale: 1.15,
            y: 65,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "+=320",
              pin: true,
              scrub: 1,
            },
          });
          const removers: Array<() => void> = [];
          scope.current
            ?.querySelectorAll<HTMLElement>("[data-magnetic]")
            .forEach((el) => {
              const move = (e: PointerEvent) => {
                const r = el.getBoundingClientRect();
                gsap.to(el, {
                  x: (e.clientX - r.left - r.width / 2) * 0.16,
                  y: (e.clientY - r.top - r.height / 2) * 0.22,
                  duration: 0.35,
                });
              };
              const leave = () =>
                gsap.to(el, {
                  x: 0,
                  y: 0,
                  duration: 0.65,
                  ease: "elastic.out(1,.4)",
                });
              el.addEventListener("pointermove", move);
              el.addEventListener("pointerleave", leave);
              removers.push(() => {
                el.removeEventListener("pointermove", move);
                el.removeEventListener("pointerleave", leave);
                gsap.killTweensOf(el);
                gsap.set(el, { clearProps: "transform" });
              });
            });
          return () => removers.forEach((fn) => fn());
        },
      );
      return () => mm.revert();
    },
    { scope },
  );
}
