import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface GhatStepsGeometryProps {
  reducedMotion?: boolean;
}

export const GhatStepsGeometry: React.FC<GhatStepsGeometryProps> = ({ reducedMotion }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (reducedMotion || !groupRef.current) return;
    const t = clock.getElapsedTime();
    // Deliberate, very gentle breathing drift
    groupRef.current.position.y = -0.25 + Math.sin(t * 0.35) * 0.025;
  });

  // Stacked architectural ghat steps (tiers) scaled larger and positioned closer to camera
  // With enhanced separation and stone tones
  const steps = [
    // Foundation terrace (broadest step)
    { width: 8.8, height: 0.34, depth: 3.8, x: 1.4, y: -1.5, z: 0.2, color: '#113147', opacity: 0.95 },
    // Step 2
    { width: 7.8, height: 0.34, depth: 3.4, x: 1.7, y: -1.16, z: -0.15, color: '#143B54', opacity: 0.96 },
    // Step 3
    { width: 6.8, height: 0.34, depth: 3.0, x: 2.0, y: -0.82, z: -0.5, color: '#194764', opacity: 0.97 },
    // Step 4 (subtle teal-slate reflection)
    { width: 5.8, height: 0.34, depth: 2.6, x: 2.3, y: -0.48, z: -0.85, color: '#1E5474', opacity: 0.98 },
    // Step 5
    { width: 4.8, height: 0.34, depth: 2.2, x: 2.6, y: -0.14, z: -1.2, color: '#236084', opacity: 0.98 },
    // Step 6
    { width: 3.8, height: 0.34, depth: 1.8, x: 2.9, y: 0.20, z: -1.55, color: '#286D94', opacity: 0.99 },
    // Highest crest step
    { width: 2.8, height: 0.34, depth: 1.5, x: 3.2, y: 0.54, z: -1.9, color: '#2E79A4', opacity: 1.0 },
  ];

  return (
    <group ref={groupRef} position={[0.2, -0.25, 0.4]} rotation={[0.1, -0.32, 0.02]}>
      {steps.map((step, idx) => (
        <mesh key={idx} position={[step.x, step.y, step.z]} castShadow receiveShadow>
          <boxGeometry args={[step.width, step.height, step.depth]} />
          <meshStandardMaterial
            color={step.color}
            roughness={0.7}
            metalness={0.22}
            transparent
            opacity={step.opacity}
          />
        </mesh>
      ))}

      {/* Primary architectural riser edge in warm Marigold tone catching diya glow */}
      <mesh position={[2.0, -0.65, 1.0]}>
        <boxGeometry args={[6.8, 0.025, 0.04]} />
        <meshBasicMaterial color="#E29433" opacity={0.75} transparent />
      </mesh>

      {/* Secondary subtle Diya accent edge on higher terrace */}
      <mesh position={[2.6, 0.03, -0.1]}>
        <boxGeometry args={[4.8, 0.02, 0.03]} />
        <meshBasicMaterial color="#F6C667" opacity={0.6} transparent />
      </mesh>

      {/* Architectural stone foundation edge catching river light */}
      <mesh position={[1.4, -1.33, 2.1]}>
        <boxGeometry args={[8.8, 0.02, 0.04]} />
        <meshBasicMaterial color="#1D7A84" opacity={0.5} transparent />
      </mesh>
    </group>
  );
};
