import { Perf } from "r3f-perf";
import About from "./About";
import Homepage from "./Homepage";
import Projects from "./Projects";
import Contacts from "./Contact";
import Portal from "./Portal";
import Astro from "./Astro";

export default function Experience()
{

    return <>
    {/* <OrbitControls /> */}
    <ambientLight />
    <Perf />
            <Portal/>
            <Homepage />
            {/* <Projects /> */}
            {/* <Contacts /> */}
    </>
}