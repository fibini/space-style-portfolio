import {useCursor, Float, Text } from "@react-three/drei"
import { useState } from "react"

export default function Homepage()
{
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
             >
                PROJECTS
            </Text>
        </Float>

    </>
}