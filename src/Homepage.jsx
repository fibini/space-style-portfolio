import { useCursor, Float, Text, Text3D, useMatcapTexture } from "@react-three/drei"
import { useState, useEffect } from "react"
import { useThree } from "@react-three/fiber"
import * as THREE from 'three'

const homeMaterial = new THREE.MeshMatcapMaterial()

export default function Homepage()
{
    const [matcapTexture] = useMatcapTexture('3E2335_D36A1B_8E4A2E_2842A5', 256)

    useEffect(() =>
    {
        matcapTexture.encoding = THREE.sRGBEncoding
        matcapTexture.needsUpdate = THREE.sRGBEncoding
        homeMaterial.matcap = matcapTexture
        homeMaterial.needsUpdate = true
    }, [])

    const { camera } = useThree()
    const switchToProjects = () =>
    {
        camera.position.set(40, 0, 40)
    }

    const switchToAbout = () =>
    {
        camera.position.set(-20, 0, 45)
    }

    const [hovered, set] = useState()
    useCursor(hovered)

    return <>
        {/* heading */}
        <Float>
            <Text3D
                position={[-3, 1.5, -2]}
                material={homeMaterial}
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
                   MY
                </Text3D>
            <Text fontSize={2} position={[5, 2, 2.5]} color="blue" rotation-y={-0.75}>
                PORTFOLIO
            </Text>
        </Float>

        {/* navigation */}
        <Float>
            <Text
                position={[-2, -1, 0]}
                color="blue"
                rotation-y={0.75}
                onPointerOver={() =>set(true)}
                onPointerOut={() => set(false)}
                onClick={() =>{switchToAbout()}}
            >
                ABOUT
            </Text>
            <Text
                position={[2, -1, 0]}
                color="blue" 
                rotation-y={-0.75}
                onPointerOver={() =>set(true)}
                onPointerOut={() => set(false)}
            >
                CONTACT
            </Text>
            <Text
                position={[0, -4, 0]} 
                color="blue" 
                onPointerOver={() =>set(true)}
                onPointerOut={() => set(false)}
                onClick ={() =>{switchToProjects()}}
             >
                PROJECTS
            </Text>
        </Float>
    </>
}