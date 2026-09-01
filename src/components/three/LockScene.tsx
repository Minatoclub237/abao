'use client';

import { useRef, type MutableRefObject } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Cylindre de serrure européen en vue éclatée, piloté par la progression de scroll (0→1).
 * Laiton brossé sur fond nuit — l'objet-héros ABAO.
 */

const brass = { color: '#caa63a', metalness: 0.95, roughness: 0.28 };
const steel = { color: '#aeb6c2', metalness: 0.9, roughness: 0.35 };
const dark = { color: '#2a3140', metalness: 0.7, roughness: 0.5 };

function Assembly({ progress }: { progress: MutableRefObject<number> }) {
  const group = useRef<THREE.Group>(null);
  const rotor = useRef<THREE.Group>(null);
  const pins = useRef<THREE.Group>(null);
  const springs = useRef<THREE.Group>(null);
  const key = useRef<THREE.Group>(null);

  useFrame(({ pointer }, dt) => {
    const p = progress.current; // 0 = assemblé, 1 = éclaté
    const g = group.current!;
    // orientation douce : légère oscillation + suivi souris (l'objet reste lisible de profil)
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, -0.5 + pointer.x * 0.3 + p * 0.7, 2.5, dt);
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, pointer.y * 0.2 + 0.12, 3, dt);
    // assemblé : posé à droite du titre — éclaté : centré
    g.position.x = THREE.MathUtils.damp(g.position.x, 1.45 * (1 - p), 3, dt);
    g.position.y = THREE.MathUtils.damp(g.position.y, 0.55 - p * 0.35, 4, dt);

    // éclaté
    rotor.current!.position.z = THREE.MathUtils.damp(rotor.current!.position.z, p * 1.5, 4, dt);
    pins.current!.position.y = THREE.MathUtils.damp(pins.current!.position.y, 0.32 + p * 1.15, 4, dt);
    springs.current!.position.y = THREE.MathUtils.damp(springs.current!.position.y, 0.52 + p * 1.9, 4, dt);
    key.current!.position.z = THREE.MathUtils.damp(key.current!.position.z, 1.15 + p * 1.6, 4, dt);
    key.current!.rotation.z = THREE.MathUtils.damp(key.current!.rotation.z, p * Math.PI * 0.5, 4, dt);
  });

  const pinX = [-0.78, -0.42, -0.06, 0.3, 0.66];

  return (
    <group ref={group} scale={1.15}>
      {/* corps du cylindre (profil européen) */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.6, 0.62, 0.6]} />
        <meshStandardMaterial {...brass} />
      </mesh>
      <mesh position={[0, 0.45, 0]}>
        <boxGeometry args={[2.6, 0.5, 0.44]} />
        <meshStandardMaterial {...brass} />
      </mesh>
      {/* rotor */}
      <group ref={rotor}>
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}>
          <cylinderGeometry args={[0.34, 0.34, 2.64, 40]} />
          <meshStandardMaterial color="#e0bd55" metalness={0.95} roughness={0.2} />
        </mesh>
        {/* fente de clé */}
        <mesh position={[0, -0.05, 0]}>
          <boxGeometry args={[2.66, 0.5, 0.075]} />
          <meshStandardMaterial {...dark} />
        </mesh>
        {/* panneton */}
        <mesh position={[0, -0.52, 0]} rotation={[0, 0, 0.2]}>
          <boxGeometry args={[0.34, 0.5, 0.12]} />
          <meshStandardMaterial {...steel} />
        </mesh>
      </group>
      {/* goupilles */}
      <group ref={pins} position={[0, 0.32, 0]}>
        {pinX.map((x, i) => (
          <mesh key={i} position={[x, (i % 3) * 0.045, 0]} rotation={[0, 0, 0]}>
            <cylinderGeometry args={[0.055, 0.075, 0.34, 16]} />
            <meshStandardMaterial {...steel} />
          </mesh>
        ))}
      </group>
      {/* ressorts */}
      <group ref={springs} position={[0, 0.52, 0]}>
        {pinX.map((x, i) => (
          <mesh key={i} position={[x, 0.12, 0]}>
            <torusGeometry args={[0.055, 0.018, 8, 20]} />
            <meshStandardMaterial {...steel} />
          </mesh>
        ))}
      </group>
      {/* clé */}
      <group ref={key} position={[0, -0.05, 1.15]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <boxGeometry args={[0.06, 1.15, 0.3]} />
          <meshStandardMaterial color="#e8c766" metalness={0.95} roughness={0.18} />
        </mesh>
        {/* dents */}
        {[0.12, 0.3, 0.48].map((z, i) => (
          <mesh key={i} position={[0, -0.2, z]}>
            <boxGeometry args={[0.06, 0.1 + (i % 2) * 0.05, 0.08]} />
            <meshStandardMaterial color="#e8c766" metalness={0.95} roughness={0.18} />
          </mesh>
        ))}
        {/* tête */}
        <mesh position={[0, 0, 0.82]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.28, 0.28, 0.06, 32]} />
          <meshStandardMaterial color="#c9a227" metalness={0.95} roughness={0.25} />
        </mesh>
        <mesh position={[0, 0, 0.82]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.28, 0.035, 10, 40]} />
          <meshStandardMaterial color="#e8c766" metalness={0.95} roughness={0.2} />
        </mesh>
      </group>
    </group>
  );
}

export default function LockScene({ progress }: { progress: MutableRefObject<number> }) {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0.6, 5.2], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ pointerEvents: 'none' }}
    >
      <ambientLight intensity={0.9} />
      <hemisphereLight intensity={0.7} color="#fff4d6" groundColor="#22314f" />
      <directionalLight position={[4, 6, 5]} intensity={4} color="#fff2cf" />
      <directionalLight position={[-5, 2, -3]} intensity={1.6} color="#5d86d4" />
      <pointLight position={[0, 1.5, 4]} intensity={26} color="#ffd98a" distance={12} decay={2} />
      <Float speed={1.4} rotationIntensity={0.12} floatIntensity={0.35}>
        <group scale={0.72}>
          <Assembly progress={progress} />
        </group>
      </Float>
      <ContactShadows position={[0, -1.7, 0]} opacity={0.5} scale={9} blur={2.8} far={3} color="#000000" />
    </Canvas>
  );
}
