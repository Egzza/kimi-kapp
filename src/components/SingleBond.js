import React, {useState, useRef} from 'react'
import {useFrame, useThree} from 'react-three-fiber'
import {useDrag} from '@use-gesture/react'
import { Html, TransformControls } from '@react-three/drei';
import { Text } from '@chakra-ui/layout';

export default function SingleBond(props) {

    const ref = useRef()

    let enableMove = false
    
    document.addEventListener('keydown', (e)=>{enableMove = (e.keyCode === 16) ? true : false})
    document.addEventListener('keyup',()=>{enableMove=false})

    const [position, setPosition] = useState(props.position);
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
        
            <mesh
            position = {position}
            rotation = {rotation}
            ref = {ref}
            {...bind()}
            scale = '1  ' 
            >

                <cylinderGeometry attach='geometry' args={props.init} />
                <meshStandardMaterial attach='material' color={props.color} />
            
            </mesh>
    )
}
