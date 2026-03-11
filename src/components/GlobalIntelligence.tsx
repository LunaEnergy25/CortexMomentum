"use client";

import { useEffect, useRef } from "react";

interface Dot {
  theta: number;
  phi: number;
  colorType: number; // 0 for cyan, 1 for indigo
}

interface Arc {
  from: number;
  to: number;
  progress: number;
  life: number;
  maxLife: number;
  segments: { x: number; y: number }[];
  intensity: number;
}

function project(
  theta: number,
  phi: number,
  rotation: number,
  radius: number,
  cx: number,
  cy: number
): { x: number; y: number; z: number } {
  const x = radius * Math.sin(phi) * Math.cos(theta + rotation);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta + rotation);
  // Add a slight tilt to the globe for a more dynamic angle
  const tiltX = x;
  const tiltY = y * Math.cos(-0.3) - z * Math.sin(-0.3);
  const tiltZ = y * Math.sin(-0.3) + z * Math.cos(-0.3);
  return { x: cx + tiltX, y: cy + tiltY, z: tiltZ };
}

function generateLightningPath(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  segments: number
): { x: number; y: number }[] {
  const points: { x: number; y: number }[] = [{ x: x1, y: y1 }];
  const dx = (x2 - x1) / segments;
  const dy = (y2 - y1) / segments;

  for (let i = 1; i < segments; i++) {
    // Extreme jaggedness for aggressive "edgy" look
    const jitter = (Math.random() - 0.5) * 60; 
    const perpX = -(y2 - y1) / Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    const perpY = (x2 - x1) / Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    points.push({
      x: x1 + dx * i + perpX * jitter,
      y: y1 + dy * i + perpY * jitter,
    });
  }
  points.push({ x: x2, y: y2 });
  return points;
}

export default function GlobalIntelligence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    // Faster, more aggressive base rotation
    let rotation = 0; 

    // High density dots
    const dotCount = 350; 
    const dots: Dot[] = [];
    for (let i = 0; i < dotCount; i++) {
      dots.push({
        theta: Math.random() * Math.PI * 2,
        phi: Math.acos(2 * Math.random() - 1),
        colorType: Math.random() > 0.8 ? 1 : 0 // 20% accent dots
      });
    }

    const arcs: Arc[] = [];
    let arcTimer = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const size = Math.min(parent.offsetWidth, parent.offsetHeight);
      // Boost resolution for crisp extreme contrast rendering
      canvas.width = size * 2; 
      canvas.height = size * 2;
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
    };

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      // Push radius to the absolute edge of container
      const radius = Math.min(w, h) * 0.45; 

      ctx.clearRect(0, 0, w, h);

      // Deep intense electric halo
      const glow = ctx.createRadialGradient(cx, cy, radius * 0.4, cx, cy, radius * 1.4);
      glow.addColorStop(0, "rgba(0, 150, 255, 0.15)");
      glow.addColorStop(0.5, "rgba(100, 50, 255, 0.05)");
      glow.addColorStop(1, "rgba(0, 150, 255, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      const projected = dots.map((d) =>
        ({ ...project(d.theta, d.phi, rotation, radius, cx, cy), colorType: d.colorType })
      );

      // Draw dots
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const depthFactor = (p.z + radius) / (2 * radius);
        // Harsh dropoff to make the front pop aggressively
        if (depthFactor < 0.1) continue; 
        
        const alpha = 0.3 + depthFactor * 0.7;
        const size = 1.5 + depthFactor * 3.5; // Thicker dots up front

        ctx.beginPath();
        // Cyan core or electric indigo accent
        if (p.colorType === 0) {
          ctx.fillStyle = `rgba(0, 240, 255, ${alpha})`;
          ctx.shadowColor = `rgba(0, 240, 255, ${alpha})`;
        } else {
          ctx.fillStyle = `rgba(140, 80, 255, ${alpha})`;
          ctx.shadowColor = `rgba(140, 80, 255, ${alpha})`;
        }
        ctx.shadowBlur = depthFactor > 0.8 ? 10 : 0; // Only bloom front dots
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      }

      // Spawn arcs aggressively
      arcTimer++;
      if (arcTimer > 15) { // Spawn much faster (was 35)
        arcTimer = 0;
        const frontDots = projected
          .map((p, i) => ({ ...p, i }))
          .filter((p) => p.z > -radius * 0.1) // Only front facing
          .sort(() => Math.random() - 0.5);

        if (frontDots.length >= 2) {
          const from = frontDots[0];
          const to = frontDots[1];
          const dist = Math.sqrt((from.x - to.x) ** 2 + (from.y - to.y) ** 2);
          
          if (dist > 50 && dist < radius * 1.8) {
            const segments = generateLightningPath(from.x, from.y, to.x, to.y, 12);
            arcs.push({
              from: from.i,
              to: to.i,
              progress: 0,
              life: 0,
              maxLife: 40, // Die faster for strobe effect
              segments,
              intensity: Math.random() > 0.8 ? 2 : 1 // Some bolts are ultra-thick
            });
          }
        }
      }

      // Draw arcs
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      for (let i = arcs.length - 1; i >= 0; i--) {
        const arc = arcs[i];
        arc.life++;
        arc.progress = Math.min(arc.life / 8, 1); // Extremely fast travel

        const fadeIn = Math.min(arc.life / 5, 1);
        const fadeOut = Math.max(0, 1 - (arc.life - arc.maxLife * 0.5) / (arc.maxLife * 0.5));
        const alpha = Math.min(fadeIn, fadeOut) * 1.0; 

        if (alpha <= 0) {
          arcs.splice(i, 1);
          continue;
        }

        const segCount = Math.floor(arc.segments.length * arc.progress);
        if (segCount < 2) continue;

        // Intense core bolt
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`; // Pure white core
        ctx.lineWidth = 3 * arc.intensity;
        ctx.shadowColor = `rgba(0, 240, 255, ${alpha})`; // Cyan bloom
        ctx.shadowBlur = 20 * arc.intensity;
        ctx.moveTo(arc.segments[0].x, arc.segments[0].y);
        for (let s = 1; s < segCount; s++) {
          ctx.lineTo(arc.segments[s].x, arc.segments[s].y);
        }
        ctx.stroke();

        // Secondary cyan halo bolt
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0, 240, 255, ${alpha * 0.5})`;
        ctx.lineWidth = 8 * arc.intensity;
        ctx.moveTo(arc.segments[0].x, arc.segments[0].y);
        for (let s = 1; s < segCount; s++) {
          ctx.lineTo(arc.segments[s].x, arc.segments[s].y);
        }
        ctx.stroke();

        ctx.shadowBlur = 0;

        // Endpoint flash impacts
        if (arc.progress >= 1) {
          for (const seg of [arc.segments[0], arc.segments[arc.segments.length - 1]]) {
            ctx.beginPath();
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.shadowColor = `rgba(0, 240, 255, ${alpha})`;
            ctx.shadowBlur = 25;
            ctx.arc(seg.x, seg.y, 6 * arc.intensity, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      }

      rotation += 0.005; // Sped up rotation
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="mx-auto"
      style={{ width: "100%", aspectRatio: "1" }}
      aria-hidden="true"
    />
  );
}
