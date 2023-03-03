import { Float, Text, Html, Text3D, useMatcapTexture, useGLTF, MeshReflectorMaterial, TransformControls, PresentationControls, Environment } from "@react-three/drei";
import * as THREE from 'three'
import { useEffect } from "react";
import './style.css'

const aboutMaterial = new THREE.MeshMatcapMaterial()

export default function About()
{
        const portrait = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
        const ruby = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/ruby/model.gltf')
        const reactLogo = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/react-logo/model.gltf')

        const [matcapTexture] = useMatcapTexture('3E2335_D36A1B_8E4A2E_2842A5', 256)

        useEffect(() =>
        {
            matcapTexture.encoding = THREE.sRGBEncoding
            matcapTexture.needsUpdate = THREE.sRGBEncoding
            aboutMaterial.matcap = matcapTexture
            aboutMaterial.needsUpdate = true
        }, [])
        

    return <>
            <Float floatIntensity={0.5} rotationIntensity={0.5}>
                <primitive
                    object={ portrait.scene }
                    position={[-3,-2,0]}
                    rotation-x={0.15}
                    rotation-y={0.25}
                >
                    <Html
                        transform
                        wrapperClass='laptop'
                        distanceFactor={1.15}
                        position={[0, 1.55, -1.39]}
                        rotation-x={-0.26}
                    >
                        <a href="https://github.com/fibini"><img  src="./github-pic.png" /></a>
                    </Html>
                </primitive>
                <primitive
                    object={ruby.scene}
                    scale={.1}
                    position={[-4, -1.50, 1]} 
                />
                <primitive
                    object={reactLogo.scene}
                    scale={.1}
                    position={[-1.8, -1.55, 0.4]} 
                />
                <Text3D
                    position={[-3, 1.5, -2]}
                    material={aboutMaterial}
                    font="./fonts/helvetiker_regular.typeface.json"
                    size={1}
                    height={ 0.2}
                    curveSegments={ 12 }
                    bevelEnabled
                    bevelThickness={ 0.1 }
                    bevelSize={ 0.02 }
                    bevelOffset={ 0 }
                    bevelSegments={ 5 }
                >
                    ABOUT
                </Text3D>
                <Text
                position={[-3.9, -1.63, 1.2]}
                fontSize={0.2}
                rotation-x={-1.4}
                rotation-z={0.25}
                color="red"
                >
                    RUBY
                </Text>
                <Text
                position={[-1.7, -1.56, 0.65]}
                fontSize={0.2}
                rotation-x={-1.4}
                rotation-z={0.25}
                color="purple"
                >
                    REACT
                </Text>
                <Text 
                    fontSize={0.35}
                    maxWidth={8}
                    position={[3, -0.5, 0]}
                    rotation-y={-0.25}
                    color="red"
                >
                    Hi my name is Fabien, I am a FrontEnd and FullStack developer. I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.
                </Text>
                
            </Float>
    </>
}