import React, {useState, useRef} from 'react'
import { useFrame } from '@react-three/fiber'

//import { render } from 'react-dom'
//import * as THREE from 'three'
import { Canvas } from 'react-three-fiber'
import { Text } from '@react-three/drei'

const textProps = {
    fontSize: 3.9,
    font: 'http://fonts.gstatic.com/s/modak/v5/EJRYQgs1XtIEskMA-hI.woff'
  }

export default function Hydrogen(layers = undefined,props) {
    // This reference will give us direct access to the THREE.Mesh object
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <Text depthTest={false} material-toneMapped={false} {...textProps} layers={layers}>
         Hydrogen
       </Text>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color={hovered ? 'navy' : 'skyblue'} />
      </mesh>
    )
  }