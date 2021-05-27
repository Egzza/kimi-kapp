import React, {useState, useRef} from 'react'
import {useFrame, useThree} from 'react-three-fiber'
import {useDrag} from '@use-gesture/react'
import { Html } from '@react-three/drei';
import { Text } from '@chakra-ui/layout';

export default function StaticDoubleBond(props) {

    const ref = useRef()
    const ref2 = useRef()

    const [position, setPosition] = useState([0, -1, 0]);
    const [position2, setPosition2] = useState([0, 1, 0]);

    useFrame(()=>{
        ref.current.rotation.z = (90*Math.PI/180)
        ref2.current.rotation.z = (90*Math.PI/180)
    })
    
    
    

    return (
        <group>
            <mesh
            position = {position}
            ref = {ref}
            scale = '3' 
            >

                <cylinderGeometry attach='geometry' args={[.3,.3,2,64]} />
                <meshStandardMaterial attach='material' color={'yellow'} />
                
            </mesh>
            <mesh
                position = {position2}
                ref = {ref2}
                scale = '3' 
            >

                <cylinderGeometry attach='geometry' args={[.3,.3,2,64]} />
                <meshStandardMaterial attach='material' color={'yellow'} />
                
            </mesh>
        </group>
    )
}
