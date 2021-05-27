import React, {useState, useRef, useEffect} from 'react'
import {useFrame, useThree} from 'react-three-fiber'
import {useDrag} from '@use-gesture/react'
import { Html } from '@react-three/drei';
import { Text } from '@chakra-ui/layout';

export default function DoubleBond(props) {

    const ref = useRef()
    const ref2 = useRef()

    
    

    const [position, setPosition] = useState([]);
    const [position2, setPosition2] = useState([]);

    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;

    useEffect(() => {
        const p = props.position
        const p2 = [...p]
        p2[1] = p2[1] + 1
        setPosition(p)
        setPosition2(p2)
    }, [])

    useFrame(()=>{
        ref.current.rotation.z = (90*Math.PI/180)
        ref2.current.rotation.z = (90*Math.PI/180)
    })
    
    const bind = useDrag(({ offset: [x, y] }) => {
        const [,, z] = position;
        const [,, z2] = position;
        
        setPosition([x / aspect, (-y-100) / aspect, z]);
        setPosition2([x / aspect, -y / aspect, z2]);
    });
    
    

    return (
        <group>
            <mesh
            position = {position}
            ref = {ref}
            {...bind()}
            scale = '1' 
            >

                <cylinderGeometry attach='geometry' args={[.3,.3,2,64]} />
                <meshStandardMaterial attach='material' color={'yellow'} />
                
            </mesh>
            <mesh
                position = {position2}
                ref = {ref2}
                {...bind()}
                scale = '1' 
            >

                <cylinderGeometry attach='geometry' args={[.3,.3,2,64]} />
                <meshStandardMaterial attach='material' color={'red'} />
                
            </mesh>
        </group>
    )
}
