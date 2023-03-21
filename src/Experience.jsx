import { Scroll, ScrollControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import About from "./About";
import Homepage from "./Homepage";
import Projects from "./Projects";
import Contacts from "./Contact";
import Portal from "./Portal";

export default function Experience()
{

    return <>
    {/* <OrbitControls /> */}
    <Perf />
    <Portal/>
    <ScrollControls pages={4}>
        <Scroll>
            <About />
            <Homepage />
            <Projects />
            <Contacts />
        </Scroll>
    </ScrollControls>
    </>
}