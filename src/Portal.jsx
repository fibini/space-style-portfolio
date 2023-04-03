import { Stars } from "@react-three/drei"

export default function Portal()
{
    return <>
    <mesh position={[0, 0, -8]}>
        <sphereGeometry />
        <meshStandardMaterial />
    </mesh>
    <Stars radius={100} depth={30} count={5000} factor={4} saturation={0} fade speed={0.5} />
    </>
}