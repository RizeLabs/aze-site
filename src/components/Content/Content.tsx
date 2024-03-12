import { RightSection } from "./RightSection";
import { Canvas } from "@react-three/fiber";
import { LeftSection } from "./LeftSection";
import { CardSection } from "./CardSection";

export const Content = () => {
  return (
    <>
      <LeftSection />
      <CardSection />
      <RightSection />
    </>
  );
};
