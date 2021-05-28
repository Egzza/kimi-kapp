import React, {useState, useRef} from 'react'
import {useFrame, useThree} from 'react-three-fiber'
import {useDrag} from '@use-gesture/react'
import { Html, TransformControls } from '@react-three/drei';
import { Text } from '@chakra-ui/layout';

export default function SingleBond(props) {

    const ref = useRef()

    const [position, setPosition] = useState(props.position);
    const [rotation, setRotation] = useState([0,0,(90*Math.PI/180)]);
    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;


    const bind = useDrag(({ offset: [x, y] }) => {
        const [,, z] = position;
        
        if(props.enableMove){
            setPosition([x / aspect, -y / aspect, z]);
        }
    });

    return (
        <TransformControls 
            showX={false} 
            showY={!props.enableMove}
            showz={false}
            mode={'rotate'}
            enabled={!props.enableMove}
            position={position}
            rotation={rotation}
            {...bind()}
            ref = {ref}
        >
            <mesh
            position = {ref.position}
            rotation = {ref.rotation}
            scale = '1  ' 
            >

                <cylinderGeometry attach='geometry' args={props.init} />
                <meshStandardMaterial attach='material' color={props.color} />
            
            </mesh>
        </TransformControls>
    )
}
