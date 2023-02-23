import { useCursor, Float, Text } from "@react-three/drei"
import { useRef, useState } from "react"
import { useThree } from "@react-three/fiber"
import About from "./About"


export default function Homepage()
{
    const mesh = useRef()
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
            <Text fontSize={2} position={[-4, 2, 0]} color="blue" rotation-y={0.75}>
                MY
            </Text>
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

        <mesh ref={mesh} position={[-20, 0, 45]}>
            <boxGeometry />
            <meshStandardMaterial />
        </mesh>

    </>
}