import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {useMediaQuery} from "react-responsive";
import {Room} from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import {useRef} from "react";
import gsap from "gsap";

export default function HeroScene() {
  const isSmallScreen = useMediaQuery({query: "(max-width: 640px)"});
  const isMediumScreen = useMediaQuery({query: "(max-width: 768px)"});

  const HeroSceneRef = useRef(null);

  const handleCanvasCreated = () => {
    gsap.to(HeroSceneRef.current, {
      opacity: 1,
      duration: 1.5,
      delay: 1.5,
      ease: "power2.inOut"
    });
  };

  return (
    <div
      className="hero-3d-layout md:px-20 px-5"
      ref={HeroSceneRef}
      style={{opacity: 0, willChange: "opacity"}}
    >
      <Canvas
        camera={{position: [0, 0, 15], fov: 45}}
        onCreated={handleCanvasCreated}
      >
        <HeroLights />

        <OrbitControls
          enablePan={false}
          enableZoom={!isSmallScreen}
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />

        <group
          scale={isMediumScreen ? 0.8 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />

          <Particles count={100} />
        </group>
      </Canvas>
    </div>
  );
}
