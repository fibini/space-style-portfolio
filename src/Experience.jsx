import { OrbitControls } from "@react-three/drei";

export default function Experience()
{
    return <>
        <OrbitControls />

        <mesh scale={ 2 }>
            <boxGeometry />
            <meshBasicMaterial color={ "blue" } />
        </mesh>
    </>
}