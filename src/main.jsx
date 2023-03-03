import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { StrictMode } from 'react'
import Experience from './Experience.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <StrictMode>
        <Canvas
            camera={ {
                fov: 60,
                near: 0.1,
                far: 2000,
                position: [ 0, 2, 8 ]
            } }
        >
            <ambientLight />
            <Experience />
        </Canvas>
    </StrictMode>
)
