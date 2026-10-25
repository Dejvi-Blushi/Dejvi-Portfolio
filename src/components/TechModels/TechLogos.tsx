import {SkillsLogos} from "@/src/constants/constants";
import {Environment, Float, OrbitControls, useGLTF} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

export default function TechLogos({model}: ModelIconProps) {
  const scene = useGLTF(model.modelPath);

  return (
    <Canvas>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />

      <OrbitControls enableZoom={false} />

      <Float speed={4} rotationIntensity={1.4} floatIntensity={3}>
        <group
          scale={model.scale}
          rotation={model.rotation as [number, number, number]}
        >
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
}

SkillsLogos.forEach((item) => useGLTF.preload(item.modelPath));
