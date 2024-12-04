import React from 'react';
import { Html } from '@react-three/drei';
import { Vector3 } from 'three';

interface LocationPointProps {
  position: [number, number, number];
  isActive: boolean;
  onClick: () => void;
}

export const LocationPoint: React.FC<LocationPointProps> = ({
  position,
  isActive,
  onClick,
}) => {
  const normalizedPosition = new Vector3(...position).normalize().multiplyScalar(0.82);

  return (
    <group position={normalizedPosition}>
      <Html
        distanceFactor={4}
        occlude
        center
        style={{
          transition: 'all 0.2s',
          opacity: 1,
          pointerEvents: 'auto'
        }}
      >
        <div
          onClick={onClick}
          className={`w-3.5 h-3.5 rounded-full cursor-pointer transition-all duration-300 ${
            isActive
              ? 'bg-green-400 scale-125 shadow-lg shadow-green-400/50 ring-2 ring-green-400/30'
              : 'bg-white/90 scale-100 hover:scale-110 hover:bg-white hover:shadow-md'
          }`}
        />
        {isActive && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-green-400/30 animate-ping" />
        )}
      </Html>
      <mesh scale={0.015}>
        <sphereGeometry />
        <meshBasicMaterial 
          color={isActive ? "#4ade80" : "#ffffff"} 
          transparent
          opacity={0.9}
        />
      </mesh>
    </group>
  );
}; 