import { useCursor, Float, Text, Text3D, useMatcapTexture } from "@react-three/drei"
import { useState, useEffect } from "react"
import { useThree } from "@react-three/fiber"
import * as THREE from 'three'

const homeMaterial = new THREE.MeshMatcapMaterial()

export default function Homepage()
{
    const [matcapTexture] = useMatcapTexture('1A2461_3D70DB_2C3C8F_2C6CAC', 256)

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
        camera.position.set(0, 0, 80)
    }

    const [hovered, set] = useState()
    useCursor(hovered)

    return <>
        {/* heading */}
        <Float>
            <Text3D
                position={[-2, 1.5, -2]}
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
            <Text3D
                position={[1, 1.5, -2]}
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
                PORTFOLIO
            </Text3D>
        </Float>

        {/* navigation */}
        <Float>
        <Text3D
                position={[-3, -1, -2]}
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
                onClick={switchToAbout}
                onPointerOver={() => set(true)} 
                onPointerOut={() => set(false)}
            >
                ABOUT
            </Text3D>
            <Text3D
                position={[-3, -4, -2]}
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
                CONTACT
            </Text3D>
            <Text3D
                position={[2.5, -2.5, -2]}
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
                PROJECTS
            </Text3D>
        </Float>
    </>
}