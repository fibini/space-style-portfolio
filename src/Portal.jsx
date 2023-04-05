import { Stars } from "@react-three/drei"
import { useRef } from "react"
import { useFrame, useLoader } from "@react-three/fiber"
import { TextureLoader } from "three"
// import { Bloom, EffectComposer } from "@react-three/postprocessing"

export default function Portal()
{
    const moon = useRef()

    const moonTexture = useLoader(TextureLoader, './src/assets/moon-texture.jpg')

    useFrame(() =>
    {
        moon.current.rotation.y += 0.001
    })
    return <>
    {/* <EffectComposer multisampling={2}>
        <Bloom />
    </EffectComposer> */}
    <mesh ref={moon} position={[0, 0, -10]} scale={4}>
        <sphereGeometry/>
            <meshStandardMaterial map={ moonTexture } />
    </mesh>
    <Stars radius={100} depth={30} count={5000} factor={4} saturation={0} fade speed={0.5} />
    </>
}