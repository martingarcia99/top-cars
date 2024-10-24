import './App.css';
import CarScene from './components/CarScene.tsx';
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { FaArrowDown, FaArrowUp  } from "react-icons/fa";
import { useSwipeable } from 'react-swipeable';

function App() {

    const cars = [
        { carUrl: '/mercedes_benz_c63_amg.glb', carName: 'Mercedes Benz C63', carScale: 0.5 },
        { carUrl: '/carro_kia_sportage_xnova360.glb', carName: 'Ford Mustang RTR 2019', carScale: 0.08, carPosition: [0, -0.22, 0] },
        { carUrl: '/2018_lamborghini_huracan_performante.glb', carName: 'Lamborghini Huracan Performante 2018', carScale: 25, carPosition: [0, -0.1, 0]},
        { carUrl: '/2019_ford_mustang_rtr_spec5.glb', carName: 'Ford Mustang RTR 2019', carScale: 25, carPosition: [0, -0.18, 0] },
        { carUrl: '/2022_porsche_cayenne_turbo_gt.glb', carName: 'Porsche Cayenne Turbo GT 2022', carScale: 25, carPosition: [0, -0.18, 0] },
        { carUrl: '/audi_rs5.glb', carName: 'Audi RS5 2023', carScale: 0.0012, carPosition: [0, -0, 0] },
        { carUrl: '/2020_jeep_gladiator.glb', carName: 'Jeep Gladiator 2020', carScale: 25, carPosition: [0, -0.18, 0] },
        { carUrl: '/2026_zenvo_aurora_tur.glb', carName: 'Zenvo Aurora Tur 2026', carScale: 25, carPosition: [0, -0.18, 0] },
      ];

    const [currentCarIndex, setCurrentCarIndex] = useState(0);

    const handleSwipeUp = () => {
        setCurrentCarIndex((prevIndex) => (prevIndex === 0 ? cars.length - 1 : prevIndex - 1));
    };

    const handleSwipeDown = () => {
        setCurrentCarIndex((prevIndex) => (prevIndex === cars.length - 1 ? 0 : prevIndex + 1));
    };

    const swipeHandlers = useSwipeable({
        onSwipedUp: handleSwipeUp,
        onSwipedDown: handleSwipeDown,
        preventDefaultTouchmoveEvent: true,
        trackTouch: true,
    });

    const selectedCar = cars[currentCarIndex];

    return (
        <div className="App" {...swipeHandlers}>
            <div className='absolute right-0 z-10 flex flex-col justify-between h-screen p-10'>
                <button className='text-2xl hover:scale-110' onClick={handleSwipeUp}><FaArrowUp /></button>
                <button className='text-2xl hover:scale-110' onClick={handleSwipeDown}><FaArrowDown /></button>
            </div>

            <Canvas
                style={{ height: '100vh' }}
                className='fixed inset-0 carScene'
            >
                <Environment 
                files='https://assets.oneweb.mercedes-benz.com/bbd/images/v1/4216/3/ce/f19bab99ea61f29d8282b8d9d13b82b758673.jpg' 
                background 
                />
            </Canvas>

            <CarScene 
                key={selectedCar.carName}
                carUrl={selectedCar.carUrl} 
                carName={selectedCar.carName} 
                carScale={selectedCar.carScale} 
                carPosition={selectedCar.carPosition || [0, 0, 0]}
            />
        </div>
    );
}

export default App;
