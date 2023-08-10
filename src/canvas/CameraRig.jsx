import { useRef } from 'react'
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';

import { useSnapshot } from "valtio"
import state from "../store"





const CameraRig = ({ children }) => {

    const group = useRef();

    const snap = useSnapshot(state);


    useFrame((state, delta) => {

        const isBreakpoint = window.innerWidth <= 1260;
        const isMobile = window.innerWidth <= 600;

        // Establecer la posición inicila del modelo
        let targetPosition = [-0.4, 0, 2];

        if (snap.intro) {
            if (isBreakpoint) targetPosition = [0, 0, 2];
            if (isMobile) targetPosition = [0, 0.2, 2.5];
        } else {
            if (isMobile) targetPosition = [0, 0, 2.5];
            else targetPosition = [0, 0, 2];
        };


        // Establecer las posición de la camara del modelo
        easing.damp3(state.camera.position, targetPosition, 0.25, delta)


        // Establecer la rotacion del modelo de camisa
        easing.dampE(
            group.current.rotation,
            [state.pointer.y / 10, -state.pointer.x / 5, 0],
            0.25,
            delta
        )
    })


    return (
        <group ref={group} >
            {children}
        </group>
    )
}

export default CameraRig