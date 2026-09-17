import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface RiverRibbonProps {
  reducedMotion?: boolean;
}

export const RiverRibbon: React.FC<RiverRibbonProps> = ({ reducedMotion }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const diyaLightRef1 = useRef<THREE.PointLight>(null);
  const diyaLightRef2 = useRef<THREE.PointLight>(null);
  const reflectionRef1 = useRef<THREE.Mesh>(null);

  // Scaled dimensions for more cinematic river presence
  const [width, depth, segmentsX, segmentsZ] = [15, 12, 40, 32];

  // Base geometry copy to calculate displacement
  const baseGeometry = useMemo(() => {
    return new THREE.PlaneGeometry(width, depth, segmentsX, segmentsZ);
  }, [width, depth, segmentsX, segmentsZ]);

  useFrame(({ clock }) => {
    if (reducedMotion) return;

    const t = clock.getElapsedTime() * 0.65; // Calm, deliberate natural rhythm

    // Animate river wave vertices
    if (meshRef.current) {
      const geo = meshRef.current.geometry;
      const pos = geo.attributes.position;
      const basePos = baseGeometry.attributes.position;

      for (let i = 0; i < pos.count; i++) {
        const u = basePos.getX(i);
        const v = basePos.getY(i);
        // Harmonic undulating wave formula with natural Varanasi river flow
        const z =
          Math.sin(u * 0.55 + t) * 0.14 +
          Math.cos(v * 0.45 + t * 0.75) * 0.09 +
          Math.sin((u + v) * 0.35 + t * 0.45) * 0.05;

        pos.setZ(i, z);
      }
      pos.needsUpdate = true;
      geo.computeVertexNormals();
    }

    // Organic diya flame flickers
    if (diyaLightRef1.current) {
      diyaLightRef1.current.intensity =
        2.2 + Math.sin(t * 2.8) * 0.35 + Math.sin(t * 5.4) * 0.15;
    }
    if (diyaLightRef2.current) {
      diyaLightRef2.current.intensity =
        1.3 + Math.sin(t * 2.1 + 1.0) * 0.2 + Math.sin(t * 4.7) * 0.1;
    }
    if (reflectionRef1.current) {
      const scale = 1 + Math.sin(t * 2.8) * 0.08;
      reflectionRef1.current.scale.set(scale, scale, 1);
    }
  });

  return (
    <group position={[-1.0, -1.6, 1.4]} rotation={[-Math.PI / 2.35, 0.06, -0.28]}>
      {/* Flowing river mesh with restrained specular highlights */}
      <mesh ref={meshRef} receiveShadow>
        <planeGeometry args={[width, depth, segmentsX, segmentsZ]} />
        <meshStandardMaterial
          color="#16646F"
          emissive="#092C32"
          roughness={0.16}
          metalness={0.55}
          transparent
          opacity={0.92}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Floating Diya 1 (Primary warm flame illuminating river & steps) */}
      <group position={[1.4, 0.5, 0.2]}>
        {/* Subtle Marigold water reflection pool directly on water surface */}
        <mesh ref={reflectionRef1} position={[0, -0.05, -0.05]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.55, 24]} />
          <meshBasicMaterial
            color="#F6C667"
            transparent
            opacity={0.32}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>

        {/* Diya terracotta bowl */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.18, 0.09, 0.07, 16]} />
          <meshStandardMaterial color="#844415" roughness={0.85} />
        </mesh>

        {/* Warm golden flame */}
        <mesh position={[0, 0.06, 0]}>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshBasicMaterial color="#FFD175" />
        </mesh>

        {/* Warm Diya illumination */}
        <pointLight
          ref={diyaLightRef1}
          color="#FFB84D"
          intensity={2.2}
          distance={7.5}
          decay={2}
          position={[0, 0.25, 0]}
        />
      </group>

      {/* Floating Diya 2 (Secondary downstream diya) */}
      <group position={[-1.0, -1.4, 0.15]}>
        {/* Soft reflection pool */}
        <mesh position={[0, -0.04, -0.04]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.38, 20]} />
          <meshBasicMaterial
            color="#E29433"
            transparent
            opacity={0.25}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>

        {/* Vessel */}
        <mesh>
          <cylinderGeometry args={[0.13, 0.07, 0.05, 14]} />
          <meshStandardMaterial color="#844415" roughness={0.85} />
        </mesh>

        {/* Flame */}
        <mesh position={[0, 0.045, 0]}>
          <sphereGeometry args={[0.04, 10, 10]} />
          <meshBasicMaterial color="#E29433" />
        </mesh>

        <pointLight
          ref={diyaLightRef2}
          color="#E29433"
          intensity={1.3}
          distance={5.0}
          decay={2}
          position={[0, 0.18, 0]}
        />
      </group>
    </group>
  );
};
