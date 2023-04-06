import { Float, useGLTF } from "@react-three/drei";

export default function Astro()
{
    const astronaut = useGLTF('./astronaut/scene.gltf')

    return <>
        <primitive object={astronaut} scale={5} position={[0, 0, 5]} />
    </>
}