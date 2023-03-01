import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import About from "./About";
import Homepage from "./Homepage";
import Projects from "./Projects";

export default function Experience()
{

    return <>
    <OrbitControls />
    <Perf />
    {/* <About /> */}
    {/* <Homepage /> */}
    <Projects />
    </>
}