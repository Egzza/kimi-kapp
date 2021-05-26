import React, {useState, useRef} from 'react'
import {useFrame, useThree} from 'react-three-fiber'
import {useDrag} from '@use-gesture/react'
import { Html } from '@react-three/drei';
import { Text } from '@chakra-ui/layout';

export default function Atom(props) {

    const ref = useRef()

    const [position, setPosition] = useState([0, 0, 0]);
  

    return (
        <mesh
            position = {position}
            ref = {ref}
            scale = '3'
        >

            <sphereGeometry attach='geometry' />
            <meshStandardMaterial color={props.color} />
            <Html>
                <Text fontSize='1em' fontWeight='600' >{props.element}</Text>
            </Html>
            
        </mesh>
    )
}
