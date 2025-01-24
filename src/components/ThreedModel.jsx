import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber"; // Correct import for useLoader
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = ({ path }) => {
  const gltf = useLoader(GLTFLoader, path);
  return <primitive object={gltf.scene} scale={1.5} />;
};

const ThreeDModel = ({ modelPath }) => {
  return (
    <div className="w-full h-[300px]">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <Suspense fallback={<div>Loading 3D Model...</div>}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 10, 5]} intensity={1} />
          <Model path={modelPath} />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeDModel;
