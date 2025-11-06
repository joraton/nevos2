# React Magnetic Button
URL: /button/magnetic-button
React magnetic button with animated particles that attract to center on hover. Features Framer Motion spring physics and customizable particle effects with TypeScript and shadcn/ui.

***

title: React Magnetic Button
description: React magnetic button with animated particles that attract to center on hover. Features Framer Motion spring physics and customizable particle effects with TypeScript and shadcn/ui.
icon: Magnet
component: true
---------------

<PoweredBy
  packages={[
  { name: "React", url: "https://react.dev" },
  { name: "Framer Motion", url: "https://framer.com/motion" },
  { name: "Lucide React", url: "https://lucide.dev" },
]}
/>

<Callout title="Building interactive particle animations?">
  [Join our Discord community](https://discord.com/invite/Z9NVtNE7bj) for help
  from other developers.
</Callout>

<br />

Ever watched iron filings dance around a magnet? That mesmerizing pull where scattered particles suddenly snap into formation? Most button hover effects are predictable—color shifts, tiny bounces, maybe a shadow. This React component brings real physics to your interface with floating particles that get magnetically attracted to the center on hover, creating that satisfying "snap" moment that makes users want to interact again.

### Magnetic particle attraction on hover

Watch particles float randomly then get pulled toward the center with spring physics:

<Preview path="button/magnetic-button" />

Built for React applications with TypeScript and Next.js. Uses Framer Motion's spring physics engine for natural particle movements that feel realistic, not mechanical. The magnetic effect triggers on both mouse hover and touch interactions, with customizable particle count and attraction behavior. Perfect integration with shadcn/ui design systems and dark mode support.

## Installation

<Installer packageName="magnetic-button" />

## Why static hover effects feel lifeless

Developers add a color change or scale effect and call it interactive. But users have seen the same hover states thousands of times. They don't create delight or memorable moments anymore. The problem isn't the effect itself—it's the predictability.

Magnetic attraction is fundamentally different. It creates anticipation as particles float, then satisfaction when they snap into place. The spring physics make it feel like real matter responding to forces. Users instinctively want to trigger it again because it mimics natural phenomena they understand.

This component handles the complex physics calculations, particle management, and performance optimization automatically. Multiple particles animate simultaneously without janky performance. The attraction radius and particle count are fully customizable for different interaction intensities.

## Features

* **Realistic spring physics** using Framer Motion's animation engine with natural acceleration curves
* **Customizable particle system** with configurable count and attraction radius parameters
* **Touch and mouse support** with identical behavior across desktop and mobile devices
* **Performance optimized** with GPU-accelerated transforms and efficient particle rendering
* **TypeScript interfaces** with complete prop definitions and particle system types
* **Dark mode compatible** using CSS custom properties and theme-aware violet color scheme
* **Accessible interactions** maintaining proper button semantics and keyboard navigation
* **Spring customization** with separate attraction and release physics for different feels

## API Reference

### MagneticButton

| Prop            | Type        | Default         | Description                                         |
| --------------- | ----------- | --------------- | --------------------------------------------------- |
| `particleCount` | `number`    | `12`            | Number of floating particles around the button      |
| `attractRadius` | `number`    | `50`            | Radius in pixels for particle attraction effect     |
| `children`      | `ReactNode` | Default content | Custom button content (overrides default text/icon) |
| `className`     | `string`    | -               | Additional CSS classes for button styling           |

### Particle Physics

The component uses two different spring configurations for realistic motion:

| Phase      | Stiffness | Damping | Behavior                                      |
| ---------- | --------- | ------- | --------------------------------------------- |
| Attraction | `50`      | `10`    | Slower, dramatic pull toward center           |
| Release    | `100`     | `15`    | Faster, bouncier return to original positions |

### Customization Examples

```tsx
// More particles, tighter attraction
<MagneticButton particleCount={20} attractRadius={30} />

// Fewer particles, wider attraction field  
<MagneticButton particleCount={8} attractRadius={80} />

// Custom content
<MagneticButton>
  <span className="flex items-center gap-2">
    <Sparkles className="w-4 h-4" />
    Magic Button
  </span>
</MagneticButton>
```

## Common gotchas

**Performance on mobile**: The particle animations are GPU-accelerated, but older devices might struggle with high particle counts. Consider reducing `particleCount` to 6-8 for broader compatibility.

**Touch interaction timing**: On touch devices, the magnetic effect triggers on touch start and releases on touch end. This feels natural but differs slightly from mouse hover behavior where particles can attract/release based on cursor proximity.

**Particle positioning edge cases**: Particles are positioned randomly within a 360px radius. Very small containers might clip particles during their initial scatter phase before attraction begins.

**Spring physics interruption**: Rapidly triggering attraction/release can interrupt spring animations mid-motion. The component handles this gracefully by recalculating from current positions, but very fast interactions might feel slightly jarky.

**Z-index and stacking**: The particles render behind the button text but above the button background. Complex parent stacking contexts might affect particle visibility during animation.

## You might also like

<Cards>
  <Card href="/button/ripple-button" title="Ripple Button" description="Material Design ripple effects from click position" />

  <Card href="/button/flip-button" title="Flip Button" description="3D flip animations revealing hidden content on hover" />

  <Card href="/button/text-reveal" title="Text Reveal Button" description="Animated text reveal effects with stroke outlines and glow" />

  <Card href="/button/social-buttons" title="Social Buttons" description="Social media buttons with unique puzzle-piece styling" />
</Cards>

## Questions developers actually ask

<Accordions type="single">
  <Accordion id="particle-performance" title="How many particles can I use without performance issues?">
    For most devices, 12-15 particles work smoothly. High-end devices can handle 20+ particles, while older mobile devices perform better with 6-8 particles. The animations use transform3d for GPU acceleration, but particle count directly impacts performance.
  </Accordion>

  <Accordion id="custom-particle-appearance" title="Can I change particle colors or shapes?">
    The particles use CSS classes and can be styled with Tailwind utilities. You can modify the `bg-violet-400` and `dark:bg-violet-300` classes in the component. For custom shapes, modify the `rounded-full` class to create squares, triangles, or other shapes.
  </Accordion>

  <Accordion id="attraction-physics" title="How do I make the magnetic effect stronger or weaker?">
    Adjust the spring stiffness values in the component. Lower stiffness (30-40) creates slower, more dramatic attraction. Higher stiffness (80-100) makes particles snap quickly. The `attractRadius` prop controls the trigger distance but not the force strength.
  </Accordion>

  <Accordion id="disable-animation" title="Can I disable the particle effect based on user preferences?">
    Yes, check for `prefers-reduced-motion` and conditionally render a standard button instead. You can also add a prop like `disableParticles` to toggle the effect programmatically while maintaining the same button styling.
  </Accordion>

  <Accordion id="multiple-buttons" title="Do multiple magnetic buttons on the same page interfere with each other?">
    No, each button instance manages its own particle system independently. You can have multiple magnetic buttons without performance degradation, though having many high-particle-count buttons might impact overall page performance.
  </Accordion>

  <Accordion id="keyboard-accessibility" title="How does this work with keyboard navigation?">
    The underlying button element maintains full keyboard accessibility. The magnetic effect only triggers on mouse/touch interactions, so keyboard users get a standard button experience without the particle distraction.
  </Accordion>

  <Accordion id="custom-button-content" title="Can I use different text or icons instead of the magnet icon?">
    Absolutely! Pass any content as children to override the default magnet icon and text. The magnetic particle effect works independently of the button's visual content, so you can customize the appearance while keeping the interaction.
  </Accordion>

  <Accordion id="server-rendering" title="Does this work with server-side rendering?">
    Yes, the component renders the initial button state server-side. The particle system and animations initialize client-side after hydration. No layout shifts occur since particles are positioned absolutely outside the button's content flow.
  </Accordion>
</Accordions>
