import { Float, Text } from "@react-three/drei"

export default function Homepage()
{
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
            <Text position={[-2, -1, 0]} color="blue" rotation-y={0.75}>
                ABOUT
            </Text>
            <Text position={[2, -1, 0]} color="blue" rotation-y={-0.75}>
                CONTACT
            </Text>
            <Text position={[0, -4, 0]} color="blue">
                PROJECTS
            </Text>
        </Float>

    </>
}