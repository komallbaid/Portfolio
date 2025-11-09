// import { useEffect, useRef } from 'react';

// export function AnimatedBackground() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     // Set canvas size
//     const setCanvasSize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     setCanvasSize();
//     window.addEventListener('resize', setCanvasSize);

//     // Particle system
//     const particles: Array<{
//       x: number;
//       y: number;
//       vx: number;
//       vy: number;
//       size: number;
//     }> = [];

//     // Create particles
//     const particleCount = 80;
//     for (let i = 0; i < particleCount; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         vx: (Math.random() - 0.5) * 0.3,
//         vy: (Math.random() - 0.5) * 0.3,
//         size: Math.random() * 2 + 1,
//       });
//     }

//     // Animation
//     let animationFrameId: number;
//     const animate = () => {
//       ctx.fillStyle = 'rgba(10, 10, 11, 0.05)';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       // Update and draw particles
//       particles.forEach((particle, i) => {
//         // Update position
//         particle.x += particle.vx;
//         particle.y += particle.vy;

//         // Wrap around screen
//         if (particle.x < 0) particle.x = canvas.width;
//         if (particle.x > canvas.width) particle.x = 0;
//         if (particle.y < 0) particle.y = canvas.height;
//         if (particle.y > canvas.height) particle.y = 0;

//         // Draw particle
//         ctx.beginPath();
//         ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
//         ctx.fillStyle = 'rgba(20, 184, 166, 0.6)';
//         ctx.fill();

//         // Draw connections
//         particles.forEach((otherParticle, j) => {
//           if (i === j) return;
//           const dx = particle.x - otherParticle.x;
//           const dy = particle.y - otherParticle.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < 150) {
//             ctx.beginPath();
//             ctx.moveTo(particle.x, particle.y);
//             ctx.lineTo(otherParticle.x, otherParticle.y);
//             const opacity = (1 - distance / 150) * 0.2;
//             ctx.strokeStyle = `rgba(20, 184, 166, ${opacity})`;
//             ctx.lineWidth = 0.5;
//             ctx.stroke();
//           }
//         });
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener('resize', setCanvasSize);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <>
//       {/* Gradient overlay */}
//       <div className="fixed inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-violet-500/5 pointer-events-none" />
      
//       {/* Animated grid */}
//       <div className="fixed inset-0 pointer-events-none opacity-20">
//         <div className="absolute inset-0" 
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(20, 184, 166, 0.1) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px)
//             `,
//             backgroundSize: '50px 50px',
//             animation: 'grid-flow 20s linear infinite',
//           }}
//         />
//       </div>
      
//       {/* Canvas particles */}
//       <canvas
//         ref={canvasRef}
//         className="fixed inset-0 pointer-events-none"
//         style={{ zIndex: 0 }}
//       />
//     </>
//   );
// }


import React, { useEffect,JSX, useRef } from "react";


export function AnimatedBackground(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // ====== TWEAKABLE SETTINGS (made brighter & denser) ======
  const PARTICLE_COUNT = 140; // increased: more points -> more lines
  const MAX_DISTANCE = 180;   // increased connect radius
  const LINE_ALPHA = 0.32;    // stronger alpha for brighter lines (0.32 = noticeable)
  const LINE_WIDTH = 0.9;     // slightly thicker lines
  const SHOW_NODES = false;   // keep nodes off (set true to show small dots)
  const NODE_ALPHA = 0.35;    // only used if SHOW_NODES=true
  const GRID_ENABLED = true;
  const GRID_ALPHA = 0.03;    // subtle grid (tweak lower if still too visible)
  // =========================================================

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle device pixel ratio (retina)
    const resize = () => {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Ensure no shadows/glow
    ctx.shadowBlur = 0;
    ctx.shadowColor = "transparent";

    // Particle type in CSS pixels
    type P = { x: number; y: number; vx: number; vy: number; size: number };
    const particles: P[] = [];

    const w = () => canvas.width / (window.devicePixelRatio || 1);
    const h = () => canvas.height / (window.devicePixelRatio || 1);

    // Initialize particles
    const initParticles = () => {
      particles.length = 0;
      const width = w(), height = h();
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.6, // slightly faster for livelier motion
          vy: (Math.random() - 0.5) * 0.6,
          size: Math.random() * 1.6 + 0.6,
        });
      }
    };
    initParticles();

    // Optional subtle grid drawn under the network
    const drawGrid = () => {
      if (!GRID_ENABLED) return;
      const gw = w();
      const gh = h();
      const gridSize = 50;
      ctx.save();
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = `rgba(20,184,166,${GRID_ALPHA})`;
      for (let x = 0; x <= gw; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, gh);
      }
      for (let y = 0; y <= gh; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(gw, y);
      }
      ctx.stroke();
      ctx.restore();
    };

    // Animation loop (clears each frame => no trails)
    let raf = 0;
    const animate = () => {
      const cw = w();
      const ch = h();

      ctx.clearRect(0, 0, cw, ch);

      // draw grid first (below lines)
      drawGrid();

      // update particles and draw connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // wrap edges
        if (p.x < 0) p.x = cw;
        if (p.x > cw) p.x = 0;
        if (p.y < 0) p.y = ch;
        if (p.y > ch) p.y = 0;

        // optional nodes
        if (SHOW_NODES) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(20,184,166,${NODE_ALPHA})`;
          ctx.fill();
        }

        // draw connections to later particles (avoid double-draw)
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < MAX_DISTANCE) {
            const t = 1 - dist / MAX_DISTANCE; // 0..1
            const alpha = t * LINE_ALPHA;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.lineWidth = LINE_WIDTH;
            ctx.strokeStyle = `rgba(20,184,166,${alpha.toFixed(3)})`;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    // Re-init particles if orientation/resizing changes significantly
    const handleReinit = () => initParticles();
    window.addEventListener("orientationchange", handleReinit);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("orientationchange", handleReinit);
    };
  }, [
    // included for lint — these are stable constants but referenced to regenerate on change
    PARTICLE_COUNT,
    MAX_DISTANCE,
    LINE_ALPHA,
    LINE_WIDTH,
    SHOW_NODES,
    NODE_ALPHA,
    GRID_ENABLED,
    GRID_ALPHA,
  ]);

  // Canvas visible behind or at same level as content. Adjust zIndex if needed.
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, background: "transparent" }}
    />
  );
}
