// RotaryWheel3D.tsx

import React, { JSX, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
// Preload the model to help avoid race conditions
useGLTF.preload("/assets/models/rotary-wheel.glb");

function Model() {
  // Load the model from the public folder
  const { scene } = useGLTF("../../assets/models/rotary-wheel.glb") as { scene: THREE.Group };
  return <primitive object={scene} dispose={null} />;
}

export function RotaryWheel3D(): JSX.Element {
  return (
    <div className="w-full h-full">
      <Canvas className="w-full h-[400px]">
        {/* Basic lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.8} position={[5, 5, 5]} />
        {/* Wrap model in Suspense */}
        <Suspense fallback={<div>Loading...</div>}>
          <Model />
        </Suspense>
        {/* Orbit controls */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
