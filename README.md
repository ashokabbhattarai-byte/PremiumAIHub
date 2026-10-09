# Premium AI Hub

Single-page Next.js App Router storefront with Tailwind CSS, GSAP, and a frame-driven Remotion neural-network hero.

## Run

```sh
npm install
npm run dev
```

Open http://localhost:3000. Production: `npm run build` followed by `npm start`.

## Contact configuration

All purchase and contact buttons open the Premium AI Hub Facebook Page:
https://www.facebook.com/profile.php?id=61595414692414

Update `lib/store.ts` to change the destination. No contact environment variables are required. All external links open in a new tab with `noopener noreferrer`.

## Main files

- `app/page.tsx`: storefront content and sections.
- `app/globals.css`: responsive visual system and accessibility styles.
- `hooks/useLandingAnimations.ts`: scoped GSAP entrances, magnetic controls, desktop hero pinning, parallax, payment marquee, and sticky conversion bar.
- `components/HeroPlayer.tsx`: client-only Remotion Player with pointer input and offscreen/background pause.
- `remotion/NeuralComposition.tsx`: deterministic rotating 3D-projected node field and frame-synchronized GSAP orbital motion.
- `tailwind.config.ts`: color tokens and Tailwind content configuration.

## Motion and accessibility

Desktop hero pinning adds 320px of scroll progression; touch layouts use normal scrolling. Reduced motion disables pinning, entrances, magnetic movement, and the payment marquee, and pauses the Player. The sticky bar is inert while hidden. Navigation and actions are keyboard accessible. Google Fonts loads Inter and Space Grotesk with system fallbacks.

Offer details and warranty copy reproduce the supplied brief; verify fulfillment terms and availability before publishing. No checkout, payment collection, or account provisioning is implemented: purchases continue through the Facebook Page.
