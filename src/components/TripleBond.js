import React, {useState, useRef} from 'react'
import {useFrame, useThree} from 'react-three-fiber'
import {useDrag} from '@use-gesture/react'
import { Html } from '@react-three/drei';
import { Text } from '@chakra-ui/layout';

export default function TripleBond(props) {

    const ref = useRef()
    const ref2 = useRef()
    const ref3 = useRef()

    const p = props.position
    const p2 = p
    p2[1] += -.66
    const p3 = p
    p3[1] += .66

    const [position, setPosition] = useState(p);
    const [position2, setPosition2] = useState(p2);
    const [position3, setPosition3] = useState(p3);

    useFrame(()=>{
        ref.current.rotation.z = (90*Math.PI/180)
        ref2.current.rotation.z = (90*Math.PI/180)
        ref3.current.rotation.z = (90*Math.PI/180)
    })
    
    
    

    return (
        <group scale= '4' >
            <mesh
            position = {position}
            ref = {ref}
           
            >

                <cylinderGeometry attach='geometry' args={[.1,.1,2,64]} />
                <meshStandardMaterial attach='material' color={'yellow'} />
                
            </mesh>
            <mesh
                position = {position2}
                ref = {ref2}
            >

                <cylinderGeometry attach='geometry' args={[.1,.1,2,64]} />
                <meshStandardMaterial attach='material' color={'yellow'} />
                
            </mesh>
            <mesh
                position = {position3}
                ref = {ref3}
            >

                <cylinderGeometry attach='geometry' args={[.1,.1,2,64]} />
                <meshStandardMaterial attach='material' color={'yellow'} />
                
            </mesh>
        </group>
    )
}
