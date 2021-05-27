import { Canvas, useLoader } from '@react-three/fiber'
import React from 'react'
import {useGLTF} from '@react-three/drei'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import x from './answerModels/co2.gltf'


export default function Answer(props) {

    const gltf = useLoader(GLTFLoader, x)

    return (
        <primitive object={gltf.scene} position={[0, 0, 0]} />
    )
}
