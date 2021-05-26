import React from 'react'
import StaticAtom from './StaticAtom'
import {Box, Text} from '@chakra-ui/react'
import { Canvas } from '@react-three/fiber'

export default function AvaliableAtom(props) {
    return (
        <>
            <Box w='64px' h='64px' onClick={()=>{props.handleClick({element: props.element, color: props.color})}}>
                <Box h='64px'>
                    <Canvas>
                        <ambientLight />
                        <StaticAtom element={props.element} color={props.color} />
                    </Canvas>
                </Box>
                {/*<Text textAlign='center' >{props.element}</Text>*/}
            </Box>  
        </>
    )
}
