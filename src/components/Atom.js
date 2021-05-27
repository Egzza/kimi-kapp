import React, {useState, useRef} from 'react'
import {useFrame, useThree} from 'react-three-fiber'
import {useDrag} from '@use-gesture/react'
import { Html } from '@react-three/drei';
import { Text } from '@chakra-ui/layout';

export default function Atom(props) {

    const ref = useRef()

    //let enableMove = false
    
    //document.addEventListener('keydown', (e)=>{enableMove = (e.keyCode === 16) ? true : false})
    //document.addEventListener('keyup',()=>{enableMove=false})

    const [position, setPosition] = useState(props.position);
    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;

    const bind = useDrag(({ offset: [x, y] }) => {
        const [,, z] = position;

        if(props.enableMove){
            setPosition([x / aspect, -y / aspect, z]);
        }
    });
    

    return (
        <mesh
            position = {position}
            {...bind()}
            ref = {ref}
        >

            <sphereGeometry attach='geometry' args={[1,32,32]} />
            <meshStandardMaterial attach='material' color={props.color} />
            <Html>
                <Text fontSize='3em' fontWeight='600' userSelect={'none'}>{props.element}</Text>
            </Html>
            
        </mesh>
    )
}
