import React, { useRef, useState, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GlobeModel } from './GlobeModel';
import { LocationPoint } from './LocationPoint';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Mesh, Vector3, Quaternion, Matrix4 } from 'three';

const locations = [
  {
    id: 1,
    position: [1, 0.5, 0.5] as [number, number, number],
    name: "New York",
    description: "Renewable Energy Hub",
    stats: {
      solarCapacity: "2.5GW",
      windPower: "1.8GW",
      carbonReduction: "45%"
    }
  },
  {
    id: 2,
    position: [-0.5, 0.8, -0.5] as [number, number, number],
    name: "London",
    description: "Green Technology Center",
    stats: {
      solarCapacity: "1.8GW",
      windPower: "2.2GW",
      carbonReduction: "40%"
    }
  },
  {
    id: 3,
    position: [0.2, -0.5, 1] as [number, number, number],
    name: "Tokyo",
    description: "Smart City Initiative",
    stats: {
      solarCapacity: "3.0GW",
      windPower: "1.5GW",
      carbonReduction: "50%"
    }
  },
  {
    id: 4,
    position: [-0.8, -0.3, -0.8] as [number, number, number],
    name: "Sydney",
    description: "Ocean Energy Research",
    stats: {
      solarCapacity: "2.0GW",
      windPower: "1.2GW",
      carbonReduction: "35%"
    }
  }
];

export const Globe = () => {
  const [activeLocation, setActiveLocation] = useState(locations[0]);
  const globeRef = useRef<Mesh>(null);
  const controlsRef = useRef<any>(null);

  const rotateToPosition = useCallback((position: [number, number, number]) => {
    if (!controlsRef.current) return;

    const point = new Vector3(...position).normalize();
    const camera = controlsRef.current.object;
    
    // Calculate the target quaternion
    const targetQuaternion = new Quaternion();
    const up = new Vector3(0, 1, 0);
    const matrix = new Matrix4();
    matrix.lookAt(camera.position, point, up);
    targetQuaternion.setFromRotationMatrix(matrix);

    // Animate to the new position
    const duration = 1000; // 1 second
    const startQuaternion = camera.quaternion.clone();
    const startTime = Date.now();

    function animate() {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Use easing function for smooth animation
      const t = progress < .5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;

      camera.quaternion.slerpQuaternions(
        startQuaternion,
        targetQuaternion,
        t
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    animate();
  }, []);

  const handleLocationChange = useCallback((location: typeof locations[0]) => {
    setActiveLocation(location);
    rotateToPosition(location.position);
  }, [rotateToPosition]);

  const handleNext = () => {
    const currentIndex = locations.findIndex(loc => loc.id === activeLocation.id);
    const nextIndex = (currentIndex + 1) % locations.length;
    handleLocationChange(locations[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = locations.findIndex(loc => loc.id === activeLocation.id);
    const prevIndex = currentIndex === 0 ? locations.length - 1 : currentIndex - 1;
    handleLocationChange(locations[prevIndex]);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Info Panel */}
          <div className="text-white space-y-6">
            <h2 className="text-4xl font-bold">{activeLocation.name}</h2>
            <p className="text-xl text-gray-300">{activeLocation.description}</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-green-400 text-sm">Solar Capacity</p>
                <p className="text-2xl font-bold">{activeLocation.stats.solarCapacity}</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-green-400 text-sm">Wind Power</p>
                <p className="text-2xl font-bold">{activeLocation.stats.windPower}</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-green-400 text-sm">Carbon Reduction</p>
                <p className="text-2xl font-bold">{activeLocation.stats.carbonReduction}</p>
              </div>
            </div>
          </div>

          {/* Globe Container */}
          <div className="relative h-[500px]">
            <Canvas
              camera={{ position: [0, 0, 2.2], fov: 45 }}
              style={{ background: 'transparent' }}
            >
              <ambientLight intensity={0.8} />
              <pointLight position={[10, 10, 10]} intensity={1.5} />
              <directionalLight position={[-5, 5, 5]} intensity={0.5} />
              <GlobeModel ref={globeRef} scale={0.8} />
              {locations.map((location) => (
                <LocationPoint
                  key={location.id}
                  position={location.position}
                  isActive={location.id === activeLocation.id}
                  onClick={() => handleLocationChange(location)}
                />
              ))}
              <OrbitControls
                ref={controlsRef}
                enableZoom={false}
                enablePan={false}
                autoRotate={false}
                minPolarAngle={Math.PI / 2.2}
                maxPolarAngle={Math.PI / 1.8}
              />
            </Canvas>

            {/* Navigation Controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <button
                onClick={handlePrev}
                className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={handleNext}
                className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 