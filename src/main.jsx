import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { StrictMode } from 'react'
import Experience from './Experience.jsx'
import { Suspense } from 'react'
import { Loader } from '@react-three/drei'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <StrictMode>
        <Canvas
            camera={ {
                fov: 60,
                near: 0.1,
                far: 2000,
                position: [ 0, 2, 9 ]
            } }
        >
            <color attach="background" args={['#000000']} />
            <Suspense fallback={null}>
                <Experience />
            </Suspense>
        </Canvas>
        <Loader />
    </StrictMode>
)
