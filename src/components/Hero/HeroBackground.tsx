import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Float } from '@react-three/drei';
import { MotionValue, useTransform } from 'framer-motion';
import * as THREE from 'three';

const WindTurbine = ({ scrollProgress }: { scrollProgress: MotionValue<number> }) => {
  const turbineRef = useRef<THREE.Group>(null);
  const bladeRef = useRef<THREE.Group>(null);
  const rotationY = useTransform(scrollProgress, [0, 1], [0, Math.PI * 2]);
  
  useFrame(({ clock }) => {
    if (bladeRef.current) {
      bladeRef.current.rotation.z = clock.getElapsedTime() * 2;
    }
    if (turbineRef.current) {
      turbineRef.current.rotation.y = rotationY.get();
    }
  });

  return (
    <group ref={turbineRef}>
      {/* Tower */}
      <mesh position={[0, -2, 0]}>
        <cylinderGeometry args={[0.1, 0.2, 4]} />
        <meshStandardMaterial color="#888888" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Nacelle */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.5, 0.3, 0.3]} />
        <meshStandardMaterial color="#666666" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Blades */}
      <group ref={bladeRef} position={[0, 0, 0.2]}>
        {[0, 120, 240].map((rotation, i) => (
          <mesh key={i} rotation={[0, 0, (rotation * Math.PI) / 180]}>
            <boxGeometry args={[0.1, 2, 0.05]} />
            <meshStandardMaterial color="#FFFFFF" metalness={0.5} roughness={0.3} />
          </mesh>
        ))}
      </group>
    </group>
  );
};

interface HeroBackgroundProps {
  scrollProgress: MotionValue<number>;
  isDarkMode: boolean;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ scrollProgress, isDarkMode }) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <color attach="background" args={[isDarkMode ? '#111827' : '#ffffff']} />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={1} />
        
        <Float
          speed={2}
          rotationIntensity={0.5}
          floatIntensity={0.5}
        >
          <WindTurbine scrollProgress={scrollProgress} />
        </Float>

        <Environment preset="sunset" />
        
        {/* Particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <mesh key={i} position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          ]}>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshStandardMaterial
              color={isDarkMode ? "#4ade80" : "#22c55e"}
              emissive={isDarkMode ? "#4ade80" : "#22c55e"}
              emissiveIntensity={isDarkMode ? 0.5 : 0.3}
              opacity={isDarkMode ? 1 : 0.5}
              transparent
            />
          </mesh>
        ))}
      </Canvas>
    </div>
  );
};

export default HeroBackground;