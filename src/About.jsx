import { PresentationControls, useMatcapTexture, Html, useGLTF, Text3D, Text } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from 'three'
import './style.css'

export default function About()
{
    const portrait = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

    const aboutMaterial = new THREE.MeshMatcapMaterial()
    const [matcapTexture] = useMatcapTexture('3E2335_D36A1B_8E4A2E_2842A5', 256)
    aboutMaterial.matcap = matcapTexture
    aboutMaterial.needsUpdate = true

    return <>
        <PresentationControls
            global
            polar={[ -0.4, 0.2]}
            azimuth={[ -1, 0.75]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 400 }}
        >
                <Text3D
                position={[0, 0, 0]}
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
                    fontSize={0.35}
                    maxWidth={8}
                    position-y={-2}
                    position-x={4} 
                    rotation-y={-0.25}
                    color="red"
                >
                    Hi my name is Fabien, I am a FrontEnd and FullStack developer. I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.
                </Text>

                <primitive
                    object={ portrait.scene }
                    scale={2}
                    position={[-3,-5,4]}
                    rotation-x={0.15}
                    rotation-y={0.25}
                >
                    <Html
                        transform
                        wrapperClass="laptop"
                        distanceFactor={1.5}
                        position={[-0.12, 0.6, -5]}
                        rotation-x={-0.2}
                    >
                        <iframe src="https://fibini.github.io/Portfolio-project/" />
                    </Html>
                </primitive>
        </PresentationControls>
    </>
}