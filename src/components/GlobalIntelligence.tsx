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
  p1: { x: number; y: number; z: number },
  p2: { x: number; y: number; z: number },
  segments: number
): { x: number; y: number; z: number }[] {
  const points: { x: number; y: number; z: number }[] = [];
  
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    
    // Spherical interpolation (Slerp) approximation for smooth arcing across the globe
    // Elevate the arc slightly off the surface
    const arcHeight = 0.2; // How high the arc goes off the surface
    const elevation = Math.sin(t * Math.PI) * arcHeight;
    
    // Linear interpolation of the raw coordinates
    const lerpX = p1.x + (p2.x - p1.x) * t;
    const lerpY = p1.y + (p2.y - p1.y) * t;
    const lerpZ = p1.z + (p2.z - p1.z) * t;
    
    // Normalize to get spherical shape
    const len = Math.sqrt(lerpX * lerpX + lerpY * lerpY + lerpZ * lerpZ);
    
    // Re-apply radius and add elevation
    // Assuming base radius of the globe is roughly average length of points
    const baseRadius = Math.sqrt(p1.x * p1.x + p1.y * p1.y + p1.z * p1.z);
    const elevatedRadius = baseRadius * (1 + elevation);
    
    points.push({
      x: (lerpX / len) * elevatedRadius,
      y: (lerpY / len) * elevatedRadius,
      z: (lerpZ / len) * elevatedRadius
    });
  }
  
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
        // Cyan core or electric indigo accent - softened for enterprise
        if (p.colorType === 0) {
          ctx.fillStyle = `rgba(14, 165, 233, ${alpha})`; // sky-500
          ctx.shadowColor = `rgba(14, 165, 233, ${alpha})`;
        } else {
          ctx.fillStyle = `rgba(99, 102, 241, ${alpha})`; // indigo-500
          ctx.shadowColor = `rgba(99, 102, 241, ${alpha})`;
        }
        ctx.shadowBlur = depthFactor > 0.8 ? 5 : 0; // Softer bloom
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      }

      // Spawn arcs aggressively, but 25% slower again per user request
      arcTimer++;
      if (arcTimer > 50) { // Spawn slower (was 40)
        arcTimer = 0;
        const frontDots = dots
          .map((d, i) => ({ ...d, i, ...project(d.theta, d.phi, rotation, radius, cx, cy) }))
          .filter((p) => p.z > -radius * 0.1) // Only front facing
          .sort(() => Math.random() - 0.5);

        if (frontDots.length >= 2) {
          // Get raw 3D coordinates relative to center
          const getRawComp = (theta: number, phi: number) => {
             const x = radius * Math.sin(phi) * Math.cos(theta + rotation);
             const y = radius * Math.cos(phi);
             const z = radius * Math.sin(phi) * Math.sin(theta + rotation);
             return { x, y, z };
          };

          const fromP = frontDots[0];
          const toP = frontDots[1];
          const dist = Math.sqrt((fromP.x - toP.x) ** 2 + (fromP.y - toP.y) ** 2);
          
          if (dist > 50 && dist < radius * 1.8) {
            // Generate 3D arc segments first
            const rawSegments = generateLightningPath(
              getRawComp(dots[fromP.i].theta, dots[fromP.i].phi), 
              getRawComp(dots[toP.i].theta, dots[toP.i].phi), 
              20 // smoother resolution
            );

            // Project 3D segments to 2D screen coordinates
            const screenSegments = rawSegments.map(seg => {
              // Apply the same tilt as the dots
              const tiltX = seg.x;
              const tiltY = seg.y * Math.cos(-0.3) - seg.z * Math.sin(-0.3);
              const tiltZ = seg.y * Math.sin(-0.3) + seg.z * Math.cos(-0.3);
              return { x: cx + tiltX, y: cy + tiltY };
            });

            arcs.push({
              from: fromP.i,
              to: toP.i,
              progress: 0,
              life: 0,
              maxLife: 100, // Live even longer for slower tracking
              segments: screenSegments,
              intensity: Math.random() > 0.8 ? 1.5 : 0.8 // Softer intensity
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
        arc.progress = Math.min(arc.life / 25, 1); // 25% slower travel again

        const fadeIn = Math.min(arc.life / 12, 1);
        const fadeOut = Math.max(0, 1 - (arc.life - arc.maxLife * 0.5) / (arc.maxLife * 0.5));
        const alpha = Math.min(fadeIn, fadeOut) * 1.0; 

        if (alpha <= 0) {
          arcs.splice(i, 1);
          continue;
        }

        const segCount = Math.floor(arc.segments.length * arc.progress);
        if (segCount < 2) continue;

        // Intense core bolt - softened
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.8})`; // Off-white core
        ctx.lineWidth = 1.5 * arc.intensity;
        ctx.shadowColor = `rgba(14, 165, 233, ${alpha})`; // sky-500 bloom
        ctx.shadowBlur = 10 * arc.intensity;
        ctx.moveTo(arc.segments[0].x, arc.segments[0].y);
        for (let s = 1; s < segCount; s++) {
          ctx.lineTo(arc.segments[s].x, arc.segments[s].y);
        }
        ctx.stroke();

        // Secondary cyan halo bolt - softened
        ctx.beginPath();
        ctx.strokeStyle = `rgba(14, 165, 233, ${alpha * 0.3})`;
        ctx.lineWidth = 4 * arc.intensity;
        ctx.moveTo(arc.segments[0].x, arc.segments[0].y);
        for (let s = 1; s < segCount; s++) {
          ctx.lineTo(arc.segments[s].x, arc.segments[s].y);
        }
        ctx.stroke();

        ctx.shadowBlur = 0;

        // Endpoint flash impacts - softened
        if (arc.progress >= 1) {
          for (const seg of [arc.segments[0], arc.segments[arc.segments.length - 1]]) {
            ctx.beginPath();
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
            ctx.shadowColor = `rgba(14, 165, 233, ${alpha})`;
            ctx.shadowBlur = 15;
            ctx.arc(seg.x, seg.y, 3 * arc.intensity, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      }

      rotation += 0.0015; // Even slower, calmer rotation

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
