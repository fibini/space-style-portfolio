import { TransformControls, OrbitControls } from "@react-three/drei";
import Homepage from "./Homepage";

export default function Experience()
{
    return <>
        <OrbitControls />
        <Homepage />

        {/* <TransformControls>
            <mesh scale={ 1.5 }>
                <boxGeometry />
                <meshBasicMaterial color={ "blue" } />
            </mesh>
        </TransformControls> */}

        <mesh position-y={ -5 } rotation-x={ -Math.PI * 0.5 } scale={50}>
            <planeGeometry />
            <meshStandardMaterial color="black" />
        </mesh>
        
    </>
}