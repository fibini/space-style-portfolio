import { MeshReflectorMaterial, TransformControls, OrbitControls } from "@react-three/drei";
import Homepage from "./Homepage";

export default function Experience()
{
    return <>
        <OrbitControls makeDefault />
        <directionalLight />
        <ambientLight intensity={1} />

        {/* <TransformControls>
            <mesh scale={ 1.5 }>
                <boxGeometry />
                <meshBasicMaterial color={ "green" } />
            </mesh>
        </TransformControls> */}

        <mesh position-y={ -5 } rotation-x={ - Math.PI * 0.5 } scale={ 200 }>
            <planeGeometry />
            <MeshReflectorMaterial 
                resolution={512}
                mirror={ 0.5 }
                mixBlur={1}
                color={'grey'} 
            />
        </mesh>

        <Homepage />
        
    </>
}