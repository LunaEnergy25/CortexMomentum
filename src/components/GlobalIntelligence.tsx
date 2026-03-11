"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function GlobalIntelligence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let globe: ReturnType<typeof createGlobe> | undefined;

    if (canvasRef.current) {
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 900 * 2,
        height: 900 * 2,
        phi: 0,
        theta: 0.25,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 2.5,
        baseColor: [0.15, 0.18, 0.25],
        markerColor: [0.6, 0.7, 0.85],
        glowColor: [0.08, 0.1, 0.15],
        markers: [
          { location: [37.7749, -122.4194], size: 0.04 },
          { location: [51.5074, -0.1278], size: 0.04 },
          { location: [35.6762, 139.6503], size: 0.03 },
          { location: [1.3521, 103.8198], size: 0.03 },
          { location: [-33.8688, 151.2093], size: 0.03 },
          { location: [52.52, 13.405], size: 0.03 },
          { location: [25.2048, 55.2708], size: 0.03 },
          { location: [48.8566, 2.3522], size: 0.03 },
        ],
        onRender: (state) => {
          state.phi = phi;
          phi += 0.003;
        },
      });
    }

    return () => {
      globe?.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{
        width: "100%",
        height: "100%",
        aspectRatio: "1",
        maxWidth: "900px",
      }}
      aria-hidden="true"
    />
  );
}
