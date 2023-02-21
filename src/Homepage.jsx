import { useCursor, Float, Text } from "@react-three/drei"
import { useRef, useState } from "react"
import { useThree } from "@react-three/fiber"

export default function Homepage()
{
    const projects = useRef()
    const { camera } = useThree()
    const switchToProjects = () =>
    {
        camera.position.set(40, 0, 40)
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
                onClick={() =>{}}
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
                ref={projects}
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