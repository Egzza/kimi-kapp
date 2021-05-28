/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import model from './agno3.gltf'


export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF(model)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Sphere.geometry}
        material={materials.oxigeno}
        position={[-0.42, -1.03, -0.05]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.64, 1.1, 1.38]}
      />
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[-2.07, -2.15, 0.17]}
        rotation={[0, 0, -0.88]}
        scale={[0.6, 1.85, 0.32]}
      />
      <mesh
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[1.06, -2.36, 0.17]}
        rotation={[-0.15, -0.06, -2.48]}
        scale={[0.61, 1.86, 0.32]}
      />
      <mesh
        geometry={nodes.Sphere001.geometry}
        material={materials.hidrogeno}
        position={[-3.28, -3.07, 0.22]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.34, 0.58, 0.65]}
      />
      <mesh
        geometry={nodes.Sphere002.geometry}
        material={materials['hidrogeno.001']}
        position={[1.86, -3.07, 0.22]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.34, 0.58, 0.65]}
      />
    </group>
  )
}

useGLTF.preload(model)
