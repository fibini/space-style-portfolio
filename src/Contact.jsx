import { useGLTF, Text3D, useMatcapTexture, Float, Html} from "@react-three/drei"
import { useEffect } from "react"
import * as THREE from 'three'

const contactsMaterial = new THREE.MeshMatcapMaterial()

export default function Contacts()
{
    const linkedIn = useGLTF('./scene.gltf')
    const [matcapTexture] = useMatcapTexture('1A2461_3D70DB_2C3C8F_2C6CAC', 256)

    useEffect(() =>
    {
        matcapTexture.encoding = THREE.sRGBEncoding
        matcapTexture.needsUpdate = THREE.sRGBEncoding
        contactsMaterial.matcap = matcapTexture
        contactsMaterial.needsUpdate = true
    }, [])

    return <>
        <group position={[0, -27, 0]}>
            <Text3D
                position={[-3, 1.5, 0]}
                material={contactsMaterial}
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
                CONTACTS
            </Text3D>
            <primitive object={linkedIn.scene}>
            </primitive>
        </group>
    </>
}