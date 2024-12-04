import React, { forwardRef } from 'react';
import { Mesh } from 'three';

interface GlobeModelProps {
  scale?: number;
  [key: string]: any;
}

export const GlobeModel = forwardRef<Mesh, GlobeModelProps>((props, ref) => {
  return (
    <mesh ref={ref} {...props}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial
        color="#4287f5"
        clearcoat={0.4}
        clearcoatRoughness={0.4}
        metalness={0.1}
        roughness={0.2}
        opacity={0.9}
        transparent
      />
    </mesh>
  );
});

GlobeModel.displayName = 'GlobeModel';