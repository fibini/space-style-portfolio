import { Sparkles } from "@react-three/drei"

export default function Portal()
{
    return <>
    <mesh position={[0, 0, -8]}>
        <sphereGeometry />
        <meshStandardMaterial />
    </mesh>
    <Sparkles 
        size={ 8 }
        scale={[20, 10, 5]}
    />
    </>
}