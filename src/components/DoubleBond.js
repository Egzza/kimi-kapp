import React, {useState, useRef, useEffect} from 'react'
import {useFrame, useThree} from 'react-three-fiber'
import {useDrag} from '@use-gesture/react'
import { Html } from '@react-three/drei';
import { Text } from '@chakra-ui/layout';

export default function DoubleBond(props) {

    const ref = useRef()    

    const [position, setPosition] = useState([0,0,0]);

    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;

    
    const bind = useDrag(({ offset: [x, y] }) => {
        const [,, z] = position;
        
        setPosition([x / aspect, (-y-100) / aspect, z]);
    });
    
    

    return (
        <group
        ref = {ref}
        {...bind()}
        position={position}
        >
            <mesh
            position = {[0,.15,0]}
            scale = '1' 
            rotation={[0,0,(90*Math.PI/180)]}
            >

                <cylinderGeometry attach='geometry' args={props.init} />
                <meshStandardMaterial attach='material' color={props.color} />
                
            </mesh>
            <mesh
                position = {[0,-.15,0]}
                scale = '1' 
                rotation={[0,0,(90*Math.PI/180)]}
            >

                <cylinderGeometry attach='geometry' args={props.init} />
                <meshStandardMaterial attach='material' color={props.color} />
                
            </mesh>
        </group>
    )
}
