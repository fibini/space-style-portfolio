import { useGLTF, useCursor, Float, Text, Text3D, useMatcapTexture, Html, PresentationControls } from "@react-three/drei"
import { useState, useEffect } from "react"
import { useThree } from "@react-three/fiber"
import * as THREE from 'three'

const homeMaterial = new THREE.MeshMatcapMaterial()
const aboutMaterial = new THREE.MeshMatcapMaterial()
const projectsMaterial = new THREE.MeshMatcapMaterial()
const contactsMaterial = new THREE.MeshMatcapMaterial()


export default function Homepage()
{
    const phone = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf')
    const linkedIn = useGLTF('./linkedInLogo/scene.gltf')
    const portrait = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    const ruby = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/ruby/model.gltf')
    const reactLogo = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/react-logo/model.gltf')
    const threejsLogo = useGLTF('./threejsLogo/scene.gltf')
    const [matcapTexture] = useMatcapTexture('1A2461_3D70DB_2C3C8F_2C6CAC', 256)

    useEffect(() =>
    {
        matcapTexture.encoding = THREE.sRGBEncoding
        matcapTexture.needsUpdate = THREE.sRGBEncoding
        aboutMaterial.matcap = matcapTexture
        aboutMaterial.needsUpdate = true
        homeMaterial.matcap = matcapTexture
        homeMaterial.needsUpdate = true
        projectsMaterial.matcap = matcapTexture
        projectsMaterial.needsUpdate = true
        contactsMaterial.matcap = matcapTexture
        contactsMaterial.needsUpdate = true
    }, [])

    const { camera } = useThree()
    const switchToProjects = () =>
    {
        camera.position.set(40, 0, 40)
    }

    const switchToAbout = () =>
    {
        camera.position.set(0, -9, 8)
    }

    const [hovered, set] = useState()
    useCursor(hovered)

    return <>
        {/* heading */}
        <PresentationControls
            global 
            rotation={[0.13, 0.1, 0]}
            polar={[ -0.2, 0.2]}
            azimuth={[ -0.2, 0.3]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 400 }}
        >
            <group position={[-2, 1, 0]}>
                <Float floatIntensity={0.5}>
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
                        FABIEN
                        </Text3D>
                    <Text3D
                        position={[2, 1.5, -2]}
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
                        <Html
                        transform
                        wrapperClass="spotitfy"
                        distanceFactor={0.5}
                        position={[0.166, .95, 0.08]}
                        >
                            <a href='https://daf98.github.io/Spotify-API/dist/'><img src="./spotitfy.png" /></a>
                        </Html>
                        <Html
                        transform
                        wrapperClass="gamingConvention"
                        distanceFactor={0.5}
                        position={[0.166, 0.2, 0.08]}
                        >
                            <a href='https://fibini.github.io/Gaming_Convention/index.html'><img src="./gamingConvention.png" /></a>
                        </Html>
                    </primitive>
                    <Text3D
                            position={[-1.6, -3.5, 0]}
                            rotation={[-0.8, 0.25, 1.8]}
                            material={projectsMaterial}
                            font="./fonts/helvetiker_regular.typeface.json"
                            size={0.5}
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
                    <primitive
                        object={ portrait.scene }
                        position={[6,-2,0]}
                        rotation-x={0.15}
                        rotation-y={-0.55}
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
                        position={[4.6, -1.45, 0.1]} 
                    />
                    <primitive
                        object={reactLogo.scene}
                        scale={.1}
                        position={[6.7, -1.65, 1.2]} 
                    /> 
                     <primitive
                        object={threejsLogo.scene}
                        scale={.002}
                        position={[5.5, -1.45, 0.6]} 
                    /> 
                    <Text3D
                        position={[7.5, 0.5, 1]}
                        rotation ={[0.1, -0.7, -1.6]}
                        material={aboutMaterial}
                        font="./fonts/helvetiker_regular.typeface.json"
                        size={0.3}
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
                    <Text3D
                    position={[3, -2.7, 1.2]}
                    rotation-y={-0.5}
                    material={contactsMaterial}
                    font="./fonts/helvetiker_regular.typeface.json"
                    size={0.4}
                    height={ 0.1}
                    curveSegments={ 12 }
                    bevelEnabled
                    bevelThickness={ 0.1 }
                    bevelSize={ 0.02 }
                    bevelOffset={ 0 }
                    bevelSegments={ 5 }
                    >
                    CONTACTS
                    </Text3D>
                    <primitive
                        object={linkedIn.scene}
                        scale={0.5}
                        position={[4.6, -3.5, 2]}
                        rotation-y={-0.5} 
                    />
                    <Text
                    position={[4.7, -1.51, 0.3]}
                    fontSize={0.2}
                    rotation-x={-1.4}
                    rotation-z={0.25}
                    color="red"
                    >
                        RUBY
                    </Text>
                    <Text
                    position={[6.6, -1.67, 1.5]}
                    fontSize={0.2}
                    rotation-x={-1.4}
                    rotation-z={0.25}
                    color="purple"
                    >
                        REACT
                    </Text>
                    <Text
                    position={[5.6, -1.58, 0.8]}
                    fontSize={0.2}
                    rotation-x={-1.4}
                    rotation-z={0.25}
                    color="blue"
                    >
                        ThreeJS
                    </Text>
                </Float>

                {/* navigation */}
                {/* <Float>
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
                </Float> */}
            </group>
        </PresentationControls>
    </>
}