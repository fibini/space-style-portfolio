import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export default function SpaceShipCursor() {
  const { gl } = useThree();

  useEffect(() => {
    gl.domElement.style.cursor = `url(./one-piece.jpg), auto`;
  }, [gl]);
    return null;
}