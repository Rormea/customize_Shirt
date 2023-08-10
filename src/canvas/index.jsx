import { Environment, Center } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import CameraRig from "./CameraRig"
import Backdrop from "./Backdrop"
import Shirt from "./Shirt"

const CamvasModel = () => {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <Environment preset="city" />

            <CameraRig>
                {/* <Backdrop> */}
                <Center>
                    <Shirt />
                </Center>
                {/* </Backdrop> */}
            </CameraRig>

        </Canvas>
    )
}

export default CamvasModel