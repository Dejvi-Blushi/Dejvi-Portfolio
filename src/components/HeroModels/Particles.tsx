import {useRef, useMemo} from "react";
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";

const seededRandom = (seed: number) => {
  let value = seed;

  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
};

const Particles = ({count = 200}: {count?: number}) => {
  const mesh = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const random = seededRandom(count);
    const temp: Particle[] = [];

    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (random() - 0.5) * 10,
          random() * 10 + 5,
          (random() - 0.5) * 10
        ],
        speed: 0.005 + random() * 0.001
      });
    }

    return temp;
  }, [count]);

  const positions = useMemo(() => {
    const array = new Float32Array(count * 3);

    particles.forEach((p, i) => {
      array[i * 3] = p.position[0];
      array[i * 3 + 1] = p.position[1];
      array[i * 3 + 2] = p.position[2];
    });

    return array;
  }, [particles, count]);

  useFrame(() => {
    if (!mesh.current) return;

    const positionAttribute = mesh.current.geometry.attributes.position;
    const array = positionAttribute.array as Float32Array;

    for (let i = 0; i < count; i++) {
      let y = array[i * 3 + 1];
      y -= particles[i].speed;

      if (y < -2) {
        y = seededRandom(i + Math.floor(performance.now()))() * 10 + 5;
      }

      array[i * 3 + 1] = y;
    }

    positionAttribute.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.05}
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
