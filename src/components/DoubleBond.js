import React, {useState, useRef, useEffect} from 'react'
import {useFrame, useThree} from 'react-three-fiber'
import {useDrag} from '@use-gesture/react'
import { Html, TransformControls } from '@react-three/drei';
import { Text } from '@chakra-ui/layout';

export default function DoubleBond(props) {

    const ref = useRef()    

    const [position, setPosition] = useState([0,0,0]);
    const [rotation, setRotation] = useState([0,0,(90*Math.PI/180)]);

    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;

    
    const bind = useDrag(({ offset: [x, y] }) => {
        const [,, z] = position;
        
        setPosition([x / aspect, -y / aspect, z]);
    });
    
    

    return (
        <TransformControls
            showX={true} 
            mode={'rotate'}
            enabled={props.enableMove}
            space={'local'}
        >
            <group
                ref = {ref}
                {...bind()}
                position={position}
                rotation={rotation}
                rotateOnWorldAxis
            >
                <mesh
                position = {[.15,0,0]}
                scale = '1' 
                rotation={[0,0,0]}
                >

                    <cylinderGeometry attach='geometry' args={props.init} />
                    <meshStandardMaterial attach='material' color={props.color} />
                    
                </mesh>
                <mesh
                    position = {[-.15,0,0]}
                    scale = '1' 
                    rotation={[0,0,0]}
                >

                    <cylinderGeometry attach='geometry' args={props.init} />
                    <meshStandardMaterial attach='material' color={props.color} />
                    
                </mesh>
            </group>
        </TransformControls>
    )
}
