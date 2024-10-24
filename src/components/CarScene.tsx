import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import CarModel from './CarModel';

interface CarModelProps{
    carUrl: string
}

interface CarSceneProps extends CarModelProps {
    carName: string
    carScale: number
    carPosition: [number, number, number]
}

const CarScene: React.FC<CarSceneProps> = ({carUrl, carName, carScale, carPosition}) => {

    const isMobile = window.innerWidth <= 768;

    return (
        <>
            <h1 className="md:text-5xl absolute font-bold p-5 text-black bg-white shadow-2xl mt-5 z-10">{carName}</h1>
            <Canvas 
                style={{ height: '100vh' }}
                camera={{ position: isMobile ? [0, 0, 3] : [0, 0, 1.5], fov: 50 }}
                className='carScene fixed inset-0'
                shadows
            >   
                <ambientLight intensity={0.5} />
                <directionalLight 
                    position={[5, 40, 5]} 
                    intensity={1} 
                />
                <CarModel carUrl={carUrl} scale={carScale} position={carPosition}/>
                <OrbitControls 
                    enableZoom={false} 
                />
                <Environment preset='warehouse' />
            </Canvas>
        </>
    );
};
  
export default CarScene;