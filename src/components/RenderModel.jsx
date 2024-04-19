import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

const RenderModel = ({ children, className }) => {
    return (
        <Canvas className={clxs('w-screen h-screen relative', className)}>
            <Suspense fallback={null}>
                {children}
            </Suspense>
        </Canvas>
    )
}

export default RenderModel