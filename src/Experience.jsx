import { Float, Text, Html, Text3D, useMatcapTexture, useGLTF, MeshReflectorMaterial, TransformControls, PresentationControls, Environment } from "@react-three/drei";
import * as THREE from 'three'

export default function Experience()
{
       
        const portrait = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
        const ruby = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/ruby/model.gltf')

        const aboutMaterial = new THREE.MeshMatcapMaterial()
        const [matcapTexture] = useMatcapTexture('3E2335_D36A1B_8E4A2E_2842A5', 256)
        aboutMaterial.matcap = matcapTexture
        aboutMaterial.needsUpdate = true

    return <>
        <Environment preset="city" />

        <PresentationControls
            global
            polar={[ -0.4, 0.2]}
            azimuth={[ -1.2, 1.1]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 400 }}
        >
            <Float>
                {/* <rectAreaLight
                    width={2.5}
                    height={1.65}
                    intensity={80}
                    color={'#191765'}
                    rotation={[0.1, Math.PI, 0]}
                    position={[0, 0.55, -1.15]}
                /> */}
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
                <Text3D
                   position={[-4.1, -1.63, 1.2]}
                   rotation-y={0.3}
                   material={aboutMaterial}
                   font="./fonts/helvetiker_regular.typeface.json"
                   size={0.1}
                   height={ 0.01}
                   curveSegments={ 12 }
                   bevelEnabled
                   bevelThickness={ 0.01 }
                   bevelSize={ 0.002 }
                   bevelOffset={ 0 }
                   bevelSegments={ 5 } 
                >
                    RUBY
                </Text3D>
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
        </PresentationControls>
    </>
            {/* <Homepage /> */}
}