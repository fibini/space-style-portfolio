import { useGLTF, Text3D, useMatcapTexture, Float, Html } from "@react-three/drei"
import { useEffect } from "react"
import * as THREE from 'three'

const projectsMaterial = new THREE.MeshMatcapMaterial()

export default function Projects()
{
    const phone = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf')
    const [matcapTexture] = useMatcapTexture('1A2461_3D70DB_2C3C8F_2C6CAC', 256)

    useEffect(() =>
    {
        matcapTexture.encoding = THREE.sRGBEncoding
        matcapTexture.needsUpdate = THREE.sRGBEncoding
        projectsMaterial.matcap = matcapTexture
        projectsMaterial.needsUpdate = true
    }, [])
   
    return <>  
        <ambientLight />
        <Float>
            <Text3D
                    position={[-3, 1.5, 0]}
                    material={projectsMaterial}
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

                <primitive object={ phone.scene } scale={2} position={[0, -4, 0]} rotation={[-1, 0.25, 0.25]}>
                    <Html
                    transform
                    wrapperClass="portalImg"
                    distanceFactor={0.5}
                    position={[0.166, 2.45, 0.08]}
                    >
                        <a href='https://portal-scene-eta.vercel.app/'><img src="./portalimg.png" /></a>
                    </Html>
                    <Html
                    transform
                    wrapperClass="threeDText"
                    distanceFactor={0.5}
                    position={[0.166, 1.7, 0.08]}
                    >
                        <a href='https://3d-text-six-black.vercel.app/'><img src="./3Dname.png" /></a>
                    </Html>
                </primitive> 
            </Float>
    </>
}