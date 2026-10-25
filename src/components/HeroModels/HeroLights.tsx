import * as THREE from "three";

export default function HeroLights() {
  return (
    <>
      <spotLight
        position={[-3, 5, 5]}
        angle={0.4}
        penumbra={1}
        intensity={60}
        color="#4e85dd"
      />

      <primitive
        object={new THREE.RectAreaLight("#5993ff", 8, 3, 2)}
        position={[1, 3, 4]}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
        intensity={15}
      />

      <pointLight position={[0, 1, 0]} intensity={10} color="#513989" />
      <pointLight position={[1, 2, -2]} intensity={10} color="#225281" />
    </>
  );
}
