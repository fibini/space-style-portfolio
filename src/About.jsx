import { useMatcapTexture, Image, Html, useGLTF, Text3D, Text } from "@react-three/drei"
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
        <group wrapperClass="img" position={[0, 0, 0]}>
            <Text3D
            position={[-10, 7, 0]}
                material={aboutMaterial}
                font="./fonts/helvetiker_regular.typeface.json"
                size={3}
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
                maxWidth={15}
                position-y={1} 
                rotation-y={-0.25}
                color="red"
            >
                Hi my name is Fabien, I am a FrontEnd and FullStack developer. I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.
            </Text>

            <primitive
             object={ portrait.scene }
             scale={4}
             position={[-14,-5,4]}
             rotation-x={0.15}
             rotation-y={0.25}
            />

            <Image url="/one-piece.jpg" scale={8} position={[-15, 2, -0.5]} rotation={[-0.12, 0.24, 0.08]} />
            

        </group>
    </>
}