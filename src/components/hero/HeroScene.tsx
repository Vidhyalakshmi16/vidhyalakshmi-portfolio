import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function FloatingShape() {
  return (
    <mesh>
      <icosahedronGeometry args={[1.2, 0]} />
      <meshStandardMaterial
        color="#ffffff"
        roughness={0.4}
        metalness={0.8}
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Float speed={1} rotationIntensity={0.4} floatIntensity={0.6}>
        <FloatingShape />
      </Float>
    </Canvas>
  );
}
