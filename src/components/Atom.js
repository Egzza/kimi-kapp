import React, {useState, useRef} from 'react'
import {useFrame, useThree} from 'react-three-fiber'
import {useDrag} from '@use-gesture/react'
import { Html } from '@react-three/drei';
import { Text } from '@chakra-ui/layout';

export default function Atom(props) {

    const ref = useRef()

    const [position, setPosition] = useState(props.position);
    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;

    const bind = useDrag(({ offset: [x, y] }) => {
        const [,, z] = position;
        setPosition([x / aspect, -y / aspect, z]);
    });
  

    return (
        <mesh
            position = {position}
            {...bind()}
            ref = {ref} 
        >

            <sphereGeometry attach='geometry' args={[1,32,32]} />
            <meshPhongMaterial attach='material' color={props.color} />
            <ambientLight intensity={0.5} />
            <pointLight color="white" intensity={0.5} position={[0,0, 0]} />
            
            <Html>
                <Text fontSize='3em' fontWeight='600' userSelect={'none'}>{props.element}</Text>
            </Html>
            
        </mesh>
    )
}
