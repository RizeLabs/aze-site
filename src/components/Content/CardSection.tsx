import { ContactShadows, Float, OrbitControls } from "@react-three/drei";
import { Card } from "../Card";
import { Canvas } from "@react-three/fiber";

const CardScene = () => {
  return (
    <>
      <ambientLight intensity={10} />
      <pointLight position={[-10, 40, 5]} intensity={10} />
      <pointLight position={[-3, -3, 2]} />
      <Float speed={3.9} rotationIntensity={2.5} floatIntensity={1.3}>
        <Card />
      </Float>

      <ContactShadows position={[0, -2.9, 0]} blur={2.5} scale={10} far={10} />
      <OrbitControls enableZoom={false} />
    </>
  );
};

export const CardSection = () => {
  return (
    <div className="lg:absolute top-[12.2%] lg:h-[69%] lg:w-[49%] lg:left-[17%] h-[450px] w-full">
      <Canvas>
        <CardScene />
      </Canvas>
    </div>
  );
};
