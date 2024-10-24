import React from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface CarModelProps{
    carUrl: string,
    scale: number,
    position?: [number, number, number]
}

const CarModel: React.FC<CarModelProps> = ({ carUrl, scale, position = [0, 0, 0] }) => {
    const { scene } = useGLTF(carUrl); 


    scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });

    return (
        <>
            <primitive object={scene} scale={scale} position={position} castShadow />
        </>
    );
};

export default CarModel;


  

