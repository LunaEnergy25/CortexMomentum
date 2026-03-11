"use client";

import { useEffect, useRef } from "react";

interface Dot {
  theta: number;
  phi: number;
}

interface Arc {
  from: number;
  to: number;
  progress: number;
  life: number;
  maxLife: number;
  segments: { x: number; y: number }[];
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
  return { x: cx + x, y: cy + y, z };
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
    const jitter = (Math.random() - 0.5) * 30;
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
    let rotation = 0;

    // Generate dots on a sphere
    const dotCount = 200;
    const dots: Dot[] = [];
    for (let i = 0; i < dotCount; i++) {
      dots.push({
        theta: Math.random() * Math.PI * 2,
        phi: Math.acos(2 * Math.random() - 1),
      });
    }

    // Active arcs
    const arcs: Arc[] = [];
    let arcTimer = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const size = Math.min(parent.offsetWidth, parent.offsetHeight);
      canvas.width = size * 2; // retina
      canvas.height = size * 2;
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
    };

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.38;

      ctx.clearRect(0, 0, w, h);

      // Subtle outer glow
      const glow = ctx.createRadialGradient(cx, cy, radius * 0.5, cx, cy, radius * 1.3);
      glow.addColorStop(0, "rgba(148, 180, 220, 0.06)");
      glow.addColorStop(1, "rgba(148, 180, 220, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      // Project and draw dots
      const projected = dots.map((d) =>
        project(d.theta, d.phi, rotation, radius, cx, cy)
      );

      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const depthFactor = (p.z + radius) / (2 * radius);
        const alpha = 0.15 + depthFactor * 0.65;
        const size = 1 + depthFactor * 2.5;

        ctx.beginPath();
        ctx.fillStyle = `rgba(200, 215, 235, ${alpha})`;
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Spawn new arcs
      arcTimer++;
      if (arcTimer > 50) {
        arcTimer = 0;
        // Pick two front-facing dots
        const frontDots = projected
          .map((p, i) => ({ ...p, i }))
          .filter((p) => p.z > 0)
          .sort(() => Math.random() - 0.5);

        if (frontDots.length >= 2) {
          const from = frontDots[0];
          const to = frontDots[1];
          const dist = Math.sqrt(
            (from.x - to.x) ** 2 + (from.y - to.y) ** 2
          );
          if (dist > 40 && dist < radius * 1.5) {
            const segments = generateLightningPath(
              from.x,
              from.y,
              to.x,
              to.y,
              8
            );
            arcs.push({
              from: from.i,
              to: to.i,
              progress: 0,
              life: 0,
              maxLife: 80,
              segments,
            });
          }
        }
      }

      // Draw and update arcs
      for (let i = arcs.length - 1; i >= 0; i--) {
        const arc = arcs[i];
        arc.life++;
        arc.progress = Math.min(arc.life / 15, 1);

        const fadeIn = Math.min(arc.life / 10, 1);
        const fadeOut = Math.max(0, 1 - (arc.life - arc.maxLife * 0.6) / (arc.maxLife * 0.4));
        const alpha = Math.min(fadeIn, fadeOut) * 0.7;

        if (alpha <= 0) {
          arcs.splice(i, 1);
          continue;
        }

        const segCount = Math.floor(arc.segments.length * arc.progress);
        if (segCount < 2) continue;

        // Main bolt
        ctx.beginPath();
        ctx.strokeStyle = `rgba(180, 210, 255, ${alpha})`;
        ctx.lineWidth = 2;
        ctx.shadowColor = `rgba(180, 210, 255, ${alpha * 0.8})`;
        ctx.shadowBlur = 12;
        ctx.moveTo(arc.segments[0].x, arc.segments[0].y);
        for (let s = 1; s < segCount; s++) {
          ctx.lineTo(arc.segments[s].x, arc.segments[s].y);
        }
        ctx.stroke();

        // Glow pass
        ctx.beginPath();
        ctx.strokeStyle = `rgba(220, 235, 255, ${alpha * 0.3})`;
        ctx.lineWidth = 6;
        ctx.moveTo(arc.segments[0].x, arc.segments[0].y);
        for (let s = 1; s < segCount; s++) {
          ctx.lineTo(arc.segments[s].x, arc.segments[s].y);
        }
        ctx.stroke();

        ctx.shadowBlur = 0;

        // Bright dots at endpoints
        if (arc.progress >= 1) {
          for (const seg of [arc.segments[0], arc.segments[arc.segments.length - 1]]) {
            ctx.beginPath();
            ctx.fillStyle = `rgba(220, 235, 255, ${alpha})`;
            ctx.arc(seg.x, seg.y, 4, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      rotation += 0.004;
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
      style={{ maxWidth: "420px", maxHeight: "420px" }}
      aria-hidden="true"
    />
  );
}
