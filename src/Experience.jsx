import { Perf } from "r3f-perf";
import Homepage from "./Homepage";
import Portal from "./Portal";
import { Text } from "@react-three/drei";


export default function Experience()
{

    return <>
            <ambientLight />
            <Perf />
            <Portal/>
            <Homepage />
            <Text
                fontSize={0.5}
                position={[0, -5.5, 0]}
            >
                Please rotate mobile device to enjoy full screen experience
            </Text>
    </>
}