"use client";
import { Player, type PlayerRef } from "@remotion/player";
import { useEffect, useRef, useState } from "react";
import { NeuralComposition } from "@/remotion/NeuralComposition";
export default function HeroPlayer() {
  const wrapper = useRef<HTMLDivElement>(null);
  const player = useRef<PlayerRef>(null);
  const [pointer, setPointer] = useState({ pointerX: 0, pointerY: 0 });
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    let visible = true;
    const sync = () => {
      if (media.matches || !visible || document.hidden) player.current?.pause();
      else player.current?.play();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    if (wrapper.current) observer.observe(wrapper.current);
    media.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    sync();
    let raf = 0;
    const move = (e: PointerEvent) => {
      if (media.matches || !visible || e.pointerType === "touch") return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() =>
        setPointer({
          pointerX: (e.clientX / innerWidth) * 2 - 1,
          pointerY: (e.clientY / innerHeight) * 2 - 1,
        }),
      );
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      observer.disconnect();
      media.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div className="hero-player" ref={wrapper} aria-hidden="true">
      <Player
        ref={player}
        component={NeuralComposition}
        inputProps={pointer}
        durationInFrames={360}
        compositionWidth={1440}
        compositionHeight={900}
        fps={30}
        loop
        initiallyMuted
        numberOfSharedAudioTags={0}
        controls={false}
        clickToPlay={false}
        doubleClickToFullscreen={false}
        spaceKeyToPlayOrPause={false}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
