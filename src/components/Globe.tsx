import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

interface GlobeProps {
  className?: string;
  size?: number;
  rotationSpeed?: number;
}

export default function Globe({ 
  className = '', 
  size = 600, 
  rotationSpeed = 0.001 
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<any>(null);
  const isDragging = useRef(false);
  const lastX = useRef(0);
  const velocityPhi = useRef(0);

  useEffect(() => {
    let phi = 0;
    let theta = 0.3; // légère inclinaison pour un rendu plus réaliste
    let width = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let lastTime = performance.now();
    const friction = 0.94; // friction pour une inertie douce

    const computeSensitivity = () => {
      // sensibilité adaptative en fonction de la taille et du type d'appareil
      const base = 0.0015 * (600 / Math.max(width, 1));
      return base;
    };

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
        dpr = Math.min(window.devicePixelRatio || 1, 2);
      }
    };
    window.addEventListener('resize', onResize);
    onResize();

    if (canvasRef.current) {
      globeRef.current = createGlobe(canvasRef.current, {
        devicePixelRatio: dpr,
        width: width * dpr,
        height: width * dpr,
        phi,
        theta,
        dark: 1,
        diffuse: 1.35,
        mapSamples: 16000,
        mapBrightness: 5,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.1, 0.8, 1],
        glowColor: [1, 1, 1],
        opacity: 1,
        offset: [0, 0],
        markers: [
          { location: [37.7595, -122.4367], size: 0.03 }, // San Francisco
          { location: [40.7128, -74.006], size: 0.08 }, // New York
          { location: [48.8566, 2.3522], size: 0.05 }, // Paris
          { location: [51.5074, -0.1278], size: 0.05 }, // London
          { location: [35.6762, 139.6503], size: 0.05 }, // Tokyo
          { location: [-33.8688, 151.2093], size: 0.05 }, // Sydney
          { location: [55.7558, 37.6176], size: 0.05 }, // Moscow
          { location: [28.6139, 77.209], size: 0.05 }, // New Delhi
          { location: [-23.5505, -46.6333], size: 0.05 }, // São Paulo
          { location: [1.3521, 103.8198], size: 0.05 }, // Singapore
        ],
        onRender: (state) => {
          // lissage temporel pour des animations stables
          const now = performance.now();
          const dt = Math.min(2, (now - lastTime) / 16.6667); // ~60fps => dt ≈ 1
          lastTime = now;

          // rotation automatique légère (désactivée pendant le drag)
          if (!isDragging.current) {
            phi += rotationSpeed * dt;
          }

          // inertie réaliste (uniquement horizontale)
          phi += velocityPhi.current * dt;
          velocityPhi.current *= friction;

          state.phi = phi;
          state.theta = theta;
          state.width = width * dpr;
          state.height = width * dpr;
        }
      });

      // Gestion des interactions pointeur
      const onPointerDown = (e: PointerEvent) => {
        isDragging.current = true;
        lastX.current = e.clientX;
        canvasRef.current?.setPointerCapture?.(e.pointerId);
        if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing';
      };

      const onPointerMove = (e: PointerEvent) => {
        if (!isDragging.current) return;
        const dx = e.clientX - lastX.current;
        lastX.current = e.clientX;

        const s = computeSensitivity() * (e.pointerType === 'touch' ? 1.2 : 1);
        velocityPhi.current += dx * s;
      };

      const onPointerUp = (e: PointerEvent) => {
        isDragging.current = false;
        canvasRef.current?.releasePointerCapture?.(e.pointerId);
        if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
      };

      canvasRef.current.addEventListener('pointerdown', onPointerDown);
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);

      return () => {
        canvasRef.current?.removeEventListener('pointerdown', onPointerDown);
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
        window.removeEventListener('resize', onResize);
        if (globeRef.current) {
          globeRef.current.destroy();
        }
      };
    }
  }, [size, rotationSpeed]);

  return (
    <div className={`globe-container ${className}`}>
      <canvas
        ref={canvasRef}
        style={{
          width: size,
          height: size,
          maxWidth: '100%',
          aspectRatio: 1,
          cursor: 'grab',
          userSelect: 'none',
          touchAction: 'none',
        }}
      />
    </div>
  );
}