import { Scroll, ScrollControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import About from "./About";
import Homepage from "./Homepage";
import Projects from "./Projects";
import Contacts from "./Contact";

export default function Experience()
{

    return <>
    {/* <OrbitControls /> */}
    <Perf />
    <ScrollControls pages={6}>
        <Scroll>
            <About />
            <Homepage />
            <Projects />
            <Contacts />
        </Scroll>
    </ScrollControls>
    </>
}