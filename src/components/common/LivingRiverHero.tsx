import React, { useEffect, useRef, useState } from 'react';

interface LivingRiverHeroProps {
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  speedX: number;
  opacity: number;
  hue: string;
}

interface Diya {
  baseXPercent: number;
  baseYPercent: number;
  radius: number;
  swaySpeed: number;
  swayAmplitude: number;
  flickerSpeed: number;
  color: string;
  glowColor: string;
}

export const LivingRiverHero: React.FC<LivingRiverHeroProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameId = useRef<number | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });

  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio || window.innerWidth);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio || 800);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = (canvas.offsetWidth || window.innerWidth) * window.devicePixelRatio;
      height = canvas.height = (canvas.offsetHeight || 800) * window.devicePixelRatio;
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = (e.clientX - rect.left) / rect.width;
      mouseRef.current.targetY = (e.clientY - rect.top) / rect.height;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Floating Diyas placed across the lower and middle river horizon
    const diyas: Diya[] = [
      { baseXPercent: 0.22, baseYPercent: 0.68, radius: 14, swaySpeed: 0.8, swayAmplitude: 12, flickerSpeed: 2.4, color: '#FFD175', glowColor: 'rgba(246, 198, 103, 0.45)' },
      { baseXPercent: 0.48, baseYPercent: 0.74, radius: 18, swaySpeed: 0.6, swayAmplitude: 16, flickerSpeed: 3.1, color: '#F6C667', glowColor: 'rgba(226, 148, 51, 0.55)' },
      { baseXPercent: 0.78, baseYPercent: 0.65, radius: 13, swaySpeed: 0.9, swayAmplitude: 10, flickerSpeed: 2.8, color: '#FFA940', glowColor: 'rgba(255, 169, 64, 0.4)' },
      { baseXPercent: 0.35, baseYPercent: 0.84, radius: 16, swaySpeed: 0.7, swayAmplitude: 14, flickerSpeed: 2.1, color: '#F6C667', glowColor: 'rgba(246, 198, 103, 0.5)' },
      { baseXPercent: 0.65, baseYPercent: 0.82, radius: 15, swaySpeed: 0.75, swayAmplitude: 15, flickerSpeed: 2.7, color: '#FFB84D', glowColor: 'rgba(255, 184, 77, 0.45)' },
    ];

    // Luminous mist and river embers
    const particleCount = 28;
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: (Math.random() * 2 + 1) * window.devicePixelRatio,
        speedY: (Math.random() * 0.35 + 0.15) * window.devicePixelRatio,
        speedX: (Math.random() - 0.5) * 0.2 * window.devicePixelRatio,
        opacity: Math.random() * 0.5 + 0.2,
        hue: Math.random() > 0.4 ? '#F6C667' : '#1D7A84',
      });
    }

    let time = 0;

    const render = () => {
      // Smooth mouse lerping
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.04;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.04;

      time += 0.012; // Calm, meditative bonsai pace

      ctx.clearRect(0, 0, width, height);

      // 1. Deep Atmospheric Gradient Base
      const bgGrad = ctx.createRadialGradient(
        width * 0.5 + (mouseRef.current.x - 0.5) * 80,
        height * 0.55 + (mouseRef.current.y - 0.5) * 60,
        width * 0.1,
        width * 0.5,
        height * 0.5,
        width * 0.85
      );
      bgGrad.addColorStop(0, '#0E2E3E');
      bgGrad.addColorStop(0.4, '#0A1E2C');
      bgGrad.addColorStop(0.85, '#06131D');
      bgGrad.addColorStop(1, '#040C12');

      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Soft Ambient Luminous River Haze (River Teal & Diya glow)
      const hazeGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.72,
        20,
        width * 0.5,
        height * 0.72,
        width * 0.55
      );
      hazeGrad.addColorStop(0, 'rgba(29, 122, 132, 0.22)');
      hazeGrad.addColorStop(0.5, 'rgba(19, 92, 99, 0.12)');
      hazeGrad.addColorStop(1, 'rgba(10, 30, 44, 0)');
      ctx.fillStyle = hazeGrad;
      ctx.fillRect(0, 0, width, height);

      // 3. Multi-Layer Harmonic Water Wave Ribbons
      const waveLayers = [
        { yBase: 0.56, amplitude: 22, frequency: 0.002, speed: 0.7, color: 'rgba(14, 46, 62, 0.75)' },
        { yBase: 0.64, amplitude: 30, frequency: 0.0025, speed: 0.85, color: 'rgba(19, 92, 99, 0.45)' },
        { yBase: 0.72, amplitude: 38, frequency: 0.003, speed: 1.0, color: 'rgba(29, 122, 132, 0.35)' },
        { yBase: 0.80, amplitude: 44, frequency: 0.0022, speed: 1.15, color: 'rgba(15, 66, 75, 0.65)' },
        { yBase: 0.88, amplitude: 50, frequency: 0.0018, speed: 0.9, color: 'rgba(10, 30, 44, 0.9)' },
      ];

      waveLayers.forEach((layer, layerIdx) => {
        ctx.beginPath();
        ctx.moveTo(0, height);

        const yAnchor = height * layer.yBase;
        const phase = time * layer.speed + layerIdx * 1.4;

        for (let x = 0; x <= width; x += 15) {
          const mouseDeflect =
            Math.sin((x / width) * Math.PI) * (mouseRef.current.y - 0.5) * 35;
          const y =
            yAnchor +
            Math.sin(x * layer.frequency + phase) * layer.amplitude +
            Math.cos(x * layer.frequency * 1.5 + phase * 0.8) * (layer.amplitude * 0.45) +
            mouseDeflect;

          if (x === 0) {
            ctx.lineTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fillStyle = layer.color;
        ctx.fill();

        // Subtle specular shimmer line on top crest
        ctx.lineWidth = 1.2 * window.devicePixelRatio;
        ctx.strokeStyle =
          layerIdx % 2 === 0
            ? 'rgba(246, 198, 103, 0.15)'
            : 'rgba(29, 122, 132, 0.3)';
        ctx.stroke();
      });

      // 4. Stepped Ghat Architectural Contours (Left & Right Flanks)
      // Left Ghat Steps
      ctx.fillStyle = 'rgba(14, 41, 59, 0.85)';
      for (let s = 0; s < 5; s++) {
        const stepW = (width * 0.28) - s * (width * 0.045);
        const stepY = height * 0.7 + s * (height * 0.055);
        ctx.fillRect(0, stepY, stepW, height * 0.06);

        // Warm Marigold edge on tier 2
        if (s === 2) {
          ctx.fillStyle = 'rgba(226, 148, 51, 0.4)';
          ctx.fillRect(0, stepY, stepW, 2 * window.devicePixelRatio);
          ctx.fillStyle = 'rgba(14, 41, 59, 0.85)';
        }
      }

      // Right Ghat Steps
      ctx.fillStyle = 'rgba(10, 32, 48, 0.8)';
      for (let s = 0; s < 4; s++) {
        const stepW = (width * 0.24) - s * (width * 0.04);
        const stepX = width - stepW;
        const stepY = height * 0.72 + s * (height * 0.058);
        ctx.fillRect(stepX, stepY, stepW, height * 0.06);

        if (s === 1) {
          ctx.fillStyle = 'rgba(246, 198, 103, 0.35)';
          ctx.fillRect(stepX, stepY, stepW, 2 * window.devicePixelRatio);
          ctx.fillStyle = 'rgba(10, 32, 48, 0.8)';
        }
      }

      // 5. Floating Diyas with Living Organic Reflections
      diyas.forEach((diya) => {
        const sway = Math.sin(time * diya.swaySpeed) * diya.swayAmplitude * window.devicePixelRatio;
        const bob = Math.cos(time * diya.swaySpeed * 1.3) * 6 * window.devicePixelRatio;
        const flicker = 1 + Math.sin(time * diya.flickerSpeed * 2) * 0.12;

        const x = width * diya.baseXPercent + sway;
        const y = height * diya.baseYPercent + bob;
        const r = diya.radius * window.devicePixelRatio;

        // Expanded Golden Water Reflection
        const refGrad = ctx.createRadialGradient(x, y + r * 0.4, 2, x, y + r * 0.4, r * 4.5 * flicker);
        refGrad.addColorStop(0, diya.glowColor);
        refGrad.addColorStop(0.4, 'rgba(226, 148, 51, 0.18)');
        refGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = refGrad;
        ctx.beginPath();
        ctx.ellipse(x, y + r * 0.6, r * 4 * flicker, r * 1.8 * flicker, 0, 0, Math.PI * 2);
        ctx.fill();

        // Diya Terracotta Dish
        ctx.fillStyle = '#683410';
        ctx.beginPath();
        ctx.ellipse(x, y + r * 0.3, r * 0.9, r * 0.38, 0, 0, Math.PI * 2);
        ctx.fill();

        // Inner oil glow
        ctx.fillStyle = '#C8681A';
        ctx.beginPath();
        ctx.ellipse(x, y + r * 0.25, r * 0.65, r * 0.22, 0, 0, Math.PI * 2);
        ctx.fill();

        // Living Flame
        const flameH = r * 1.1 * flicker;
        const flameGrad = ctx.createRadialGradient(x, y - flameH * 0.3, 1, x, y - flameH * 0.2, flameH);
        flameGrad.addColorStop(0, '#FFFFFF');
        flameGrad.addColorStop(0.3, diya.color);
        flameGrad.addColorStop(0.8, '#E29433');
        flameGrad.addColorStop(1, 'rgba(226, 148, 51, 0)');

        ctx.fillStyle = flameGrad;
        ctx.beginPath();
        ctx.moveTo(x - r * 0.35, y);
        ctx.quadraticCurveTo(x, y - flameH, x + r * 0.35, y);
        ctx.closePath();
        ctx.fill();
      });

      // 6. Calm Floating Mist & Embers
      particles.forEach((p) => {
        if (!reducedMotion) {
          p.y -= p.speedY;
          p.x += p.speedX;

          if (p.y < height * 0.25) {
            p.y = height * 0.95;
            p.x = Math.random() * width;
          }
        }

        ctx.fillStyle = p.hue;
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1.0;

      if (!reducedMotion) {
        animationFrameId.current = requestAnimationFrame(render);
      }
    };

    // Kick off animation
    render();

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [reducedMotion]);

  return (
    <div className={`w-full h-full overflow-hidden select-none ${className}`} aria-hidden="true">
      {/* HTML5 Living Canvas Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* CSS Ambient Radial Vignette ensuring 100% crisp centered heading contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E2C]/75 via-transparent to-[#0A1E2C] pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-[#0A1E2C]/25 to-[#0A1E2C]/80 pointer-events-none" />
    </div>
  );
};
