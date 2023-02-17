import { OrbitControls } from "@react-three/drei";
import Homepage from "./Homepage";

export default function Experience()
{
    return <>
        <OrbitControls />
        <Homepage />

        <mesh scale={ 1.5 }>
            <boxGeometry />
            <meshBasicMaterial color={ "blue" } />
        </mesh>
        
    </>
}