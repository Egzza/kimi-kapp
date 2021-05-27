import React, {useState, useRef, useEffect} from 'react'
import {useFrame, useThree} from 'react-three-fiber'
import {useDrag} from '@use-gesture/react'
import { Html } from '@react-three/drei';
import { Text } from '@chakra-ui/layout';

export default function TripleBond(props) {

    const ref = useRef()  
    
    let enableMove = false
    
    document.addEventListener('keydown', (e)=>{enableMove = (e.keyCode === 16) ? true : false})
    document.addEventListener('keyup',()=>{enableMove=false})

    const [position, setPosition] = useState([0,0,0]);
    const [rotation, setRotation] = useState([0,0,(90*Math.PI/180)]);

    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;

    
    const bind = useDrag(({ offset: [x, y] }) => {
        const [,, z] = position;
        
        if(enableMove){
            setPosition([x / aspect, -y / aspect, z]);
        }
    });
    
    

    return (
        <group
        ref = {ref}
        {...bind()}
        position={position}
        rotation={rotation}
        >
            <mesh
            position = {[.3,0,0]}
            scale = '1' 
            rotation={[0,0,0]}
            >

                <cylinderGeometry attach='geometry' args={props.init} />
                <meshStandardMaterial attach='material' color={props.color} />
                
            </mesh>
            <mesh
                position = {[0,0,0]}
                scale = '1' 
                rotation={[0,0,0]}
            >

                <cylinderGeometry attach='geometry' args={props.init} />
                <meshStandardMaterial attach='material' color={props.color} />
                
            </mesh>
            <mesh
                position = {[-.3,0,0]}
                scale = '1' 
                rotation={[0,0,0]}
            >

                <cylinderGeometry attach='geometry' args={props.init} />
                <meshStandardMaterial attach='material' color={props.color} />
                
            </mesh>
        </group>
    )
}
