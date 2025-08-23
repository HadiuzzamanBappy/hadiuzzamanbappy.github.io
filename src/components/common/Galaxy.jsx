import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

/**
 * Starfield Component
 * 
 * Renders animated points in a rotating sphere to create a starfield effect.
 * Stars continuously rotate to provide a dynamic background animation.
 */
const Starfield = (props) => {
    const ref = useRef();
    // Generate random positions for 5000 stars within a sphere
    const sphere = useMemo(() => random.inSphere(new Float32Array(5000 * 3), { radius: 1.2 }), []);

    // Animate continuous rotation of the starfield
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 5]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#4e4685"
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
};

/**
 * Galaxy Component
 * 
 * Creates a full-screen animated starfield background using Three.js.
 * Positioned as an absolute background layer behind main content.
 */
const Galaxy = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full z-0">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Starfield />
            </Canvas>
        </div>
    );
};

export default Galaxy;