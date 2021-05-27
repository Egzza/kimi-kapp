import { Canvas, useLoader } from '@react-three/fiber'
import React, { useState, useEffect } from 'react'
import {useGLTF} from '@react-three/drei'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

//import h2o2 from './answerModels/h2o2.gltf'
import co2 from './answerModels/co2.gltf'
//import nh3 from './answerModels/nh3.gltf'
//import ch4 from './answerModels/ch4.gltf'



export default function Answer(props) {

    function f() {
        return co2
    }

    let a

    useEffect(() => {
        a = f()
        console.log(a)
    }, [])
    const gltf = useLoader(GLTFLoader, a)

    return (
        <primitive object={gltf.scene} position={[0, 0, 0]} />
    )
}
