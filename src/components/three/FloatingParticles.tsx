import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingParticlesProps {
  reducedMotion?: boolean;
  isMobile?: boolean;
}

export const FloatingParticles: React.FC<FloatingParticlesProps> = ({
  reducedMotion,
  isMobile = false,
}) => {
  const pointsRef = useRef<THREE.Points>(null);
  // Purposeful, sparse particles: 36 on desktop, 14 on mobile
  const count = isMobile ? 14 : 36;

  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.4) * 9;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 5.5;
      pos[i * 3 + 2] = (Math.random() - 0.45) * 7.5;

      spd[i] = 0.0025 + Math.random() * 0.005;
    }
    return [pos, spd];
  }, [count]);

  useFrame(() => {
    if (reducedMotion || !pointsRef.current) return;

    const geo = pointsRef.current.geometry;
    const pos = geo.attributes.position;

    for (let i = 0; i < count; i++) {
      let y = pos.getY(i);
      y += speeds[i];

      // Calm vertical wrapping
      if (y > 3.2) {
        y = -2.6;
      }
      pos.setY(i, y);
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        color="#F6C667"
        transparent
        opacity={0.5}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};
