import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { styles } from "../../styles";
import CanvasLoader from "../Loader";
const Earth = ({ isMobile }) => {
  const computer = useGLTF("../planet/scene.gltf");
  return (
    <primitive
      object={computer.scene}
      scale={2.5}
      position-Y={0}
      rotation-Y={0}
    />
  );
};

const EarthCanvas = () => {
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");
    setMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setMobile(event.matches);
    };

    mediaQuery.addEventListener("click", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("click", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
