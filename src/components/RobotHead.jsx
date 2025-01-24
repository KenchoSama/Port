import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const RobotHead = () => {
  // Load the GLTF file from the public folder
  const { scene } = useGLTF("/robothead.gltf");
  return <primitive object={scene} />;
};

export default function RobotHeadCanvas() {
  return (
    <div style={{ height: "400px", width: "100%" }}>
      {/* The Canvas for the 3D model */}
      <Suspense fallback={<Fallback />}>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />
          <RobotHead />
          <OrbitControls />
        </Canvas>
      </Suspense>
    </div>
  );
}

// Fallback component shown while the model is loading
const Fallback = () => (
  <div style={{ textAlign: "center", color: "white", marginTop: "20px" }}>
    Loading Robot Head...
  </div>
);
