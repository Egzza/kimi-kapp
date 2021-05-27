import React, {useState, useRef} from 'react'
import {useFrame, useThree} from 'react-three-fiber'
import {useDrag} from '@use-gesture/react'
import { Html } from '@react-three/drei';
import { Text } from '@chakra-ui/layout';

export default function StaticSingleBond(props) {

    const ref = useRef()

    const [position, setPosition] = useState([0, 0, 0]);

    useFrame(()=>{
        ref.current.rotation.z = (90*Math.PI/180)
    })
    
    

    return (
        <mesh
            position = {position}
            ref = {ref}
            scale = '3' 
        >

            <cylinderGeometry attach='geometry' args={[.5,.5,2,64]} />
            <meshStandardMaterial attach='material' color={'yellow'} />
            
        </mesh>
    )
}
