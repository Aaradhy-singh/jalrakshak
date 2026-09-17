import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { GhatStepsGeometry } from './GhatStepsGeometry';
import { RiverRibbon } from './RiverRibbon';
import { FloatingParticles } from './FloatingParticles';
import { HeroFallback } from './HeroFallback';

// Gentle Parallax & Camera Drift Rig
const CameraRig: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => {
  const { camera, mouse } = useThree();
  const initialPosition = useRef(new THREE.Vector3(0.2, 0.42, 4.1));

  useFrame(({ clock }) => {
    if (reducedMotion) {
      camera.position.set(0.2, 0.42, 4.1);
      camera.lookAt(0.6, -0.12, 0);
      return;
    }

    const t = clock.getElapsedTime();
    // Very subtle, quiet camera drift (less than 0.05 units)
    const driftX = Math.sin(t * 0.2) * 0.04;
    const driftY = Math.cos(t * 0.25) * 0.03;

    // Restrained mouse parallax
    const targetX = initialPosition.current.x + mouse.x * 0.24 + driftX;
    const targetY = initialPosition.current.y + mouse.y * 0.16 + driftY;

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.025);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.025);
    camera.lookAt(0.6, -0.12, 0);
  });

  return null;
};

// Error Boundary for WebGL failures
class WebGLErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.warn('WebGL initialization failed, falling back to static visual:', error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export const HeroScene: React.FC = () => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [supportsWebGL, setSupportsWebGL] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    try {
      const canvas = document.createElement('canvas');
      const gl =
        canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setSupportsWebGL(false);
      }
    } catch {
      setSupportsWebGL(false);
    }

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (!supportsWebGL) {
    return <HeroFallback />;
  }

  return (
    <div
      className="relative w-full h-full min-h-[460px] sm:min-h-[540px] lg:min-h-[640px] flex items-center justify-center overflow-hidden select-none pointer-events-none"
      aria-hidden="true"
    >
      {/* Soft River Teal ambient bloom/haze behind geometry */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-[#135C63]/22 rounded-full blur-3xl pointer-events-none" />

      {/* Slow horizontal river-light sweep using lightweight CSS */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1D7A84]/20 to-transparent river-light-sweep pointer-events-none rounded-full blur-2xl w-[140%] h-[120%] -left-[20%] -top-[10%]" />

      <WebGLErrorBoundary fallback={<HeroFallback />}>
        <Suspense fallback={<HeroFallback />}>
          <Canvas
            aria-hidden="true"
            camera={{ position: [0.2, 0.42, 4.1], fov: isMobile ? 46 : 40 }}
            gl={{
              antialias: !isMobile,
              alpha: true,
              powerPreference: 'high-performance',
            }}
            className="w-full h-full"
          >
            {/* Luminous Ghat Evening Fog */}
            <color attach="background" args={['#0A1E2C']} />
            <fog attach="fog" args={['#0A1E2C', 3.8, 10.5]} />

            {/* Balanced Cinematic Lighting */}
            {/* Cool teal-slate ambient */}
            <ambientLight intensity={0.7} color="#D1E4E3" />

            {/* Warm key directional light illuminating stone steps */}
            <directionalLight
              position={[4.5, 6.5, 4.0]}
              intensity={0.9}
              color="#FFF6E8"
            />

            {/* River Teal fill light from water direction */}
            <directionalLight
              position={[-4.5, -2.5, 1.2]}
              intensity={0.65}
              color="#1D7A84"
            />

            {/* Top-back rim light to cleanly separate step silhouettes */}
            <directionalLight
              position={[0, 4.0, -3.5]}
              intensity={0.45}
              color="#258E9B"
            />

            {/* Procedural Scene Objects */}
            <GhatStepsGeometry reducedMotion={reducedMotion} />
            <RiverRibbon reducedMotion={reducedMotion} />
            <FloatingParticles reducedMotion={reducedMotion} isMobile={isMobile} />

            {/* Camera Rig with gentle drift & parallax */}
            <CameraRig reducedMotion={reducedMotion} />
          </Canvas>
        </Suspense>
      </WebGLErrorBoundary>
    </div>
  );
};
