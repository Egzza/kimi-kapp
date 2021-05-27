/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import model from './superf.gltf'


export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF(model)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Sphere.geometry}
        material={nodes.Sphere.material}
        position={[-6.51, -2.93, 1.45]}
        scale={[-2.12, 4.66, 4.74]}
      />
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[-9.82, -0.6, 1.89]}
        rotation={[2.36, -0.52, 2.01]}
        scale={[0.37, 2.01, 0.27]}
      />
      <mesh
        geometry={nodes.Sphere002.geometry}
        material={nodes.Sphere002.material}
        position={[-14.6, -5.74, 1.66]}
        scale={[-1.18, 2.74, 2.7]}
      />
      <mesh
        geometry={nodes.Sphere004.geometry}
        material={nodes.Sphere004.material}
        position={[-12.35, 1.34, 1.49]}
        scale={[-1.18, 2.74, 2.7]}
      />
      <mesh
        geometry={nodes.Cylinder004.geometry}
        material={nodes.Cylinder004.material}
        position={[-10.55, -4.52, 1.63]}
        rotation={[-1.58, -0.31, 1.55]}
        scale={[0.38, 2.44, 0.28]}
      />
      <mesh
        geometry={nodes.Sphere001.geometry}
        material={materials.calcio}
        position={[5.41, 4.8, 1.45]}
        scale={[-3.15, 7.2, 7.08]}
      />
      <mesh
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[-2.5, -4.52, 1.63]}
        rotation={[-1.58, 0.31, -1.51]}
        scale={[0.38, 2.44, 0.28]}
      />
      <mesh
        geometry={nodes.Cylinder002.geometry}
        material={nodes.Cylinder002.material}
        position={[-2.5, -3.57, 1.63]}
        rotation={[-1.58, 0.31, -1.51]}
        scale={[0.38, 2.44, 0.28]}
      />
      <mesh
        geometry={nodes.Cylinder008.geometry}
        material={nodes.Cylinder008.material}
        position={[-2.96, -0.02, 1.89]}
        rotation={[0.8, 0.54, -1.15]}
        scale={[0.38, 2.12, 0.28]}
      />
      <mesh
        geometry={nodes.Sphere003.geometry}
        material={nodes.Sphere003.material}
        position={[1.22, -5.08, 1.49]}
        scale={[-1.18, 2.74, 2.7]}
      />
      <mesh
        geometry={nodes.Sphere009.geometry}
        material={nodes.Sphere009.material}
        position={[-0.54, 2.09, 1.49]}
        scale={[-1.18, 2.74, 2.7]}
      />
      <mesh
        geometry={nodes.Cylinder009.geometry}
        material={nodes.Cylinder009.material}
        position={[-15.98, -4.7, 1.89]}
        rotation={[2.36, -0.52, 2.01]}
        scale={[0.35, 1.42, 0.25]}
      />
      <mesh
        geometry={nodes.Sphere010.geometry}
        material={nodes.Sphere010.material}
        position={[-17.84, -3.05, 2.02]}
        scale={[-0.75, 2, 2.05]}
      />
      <mesh
        geometry={nodes.Cylinder010.geometry}
        material={nodes.Cylinder010.material}
        position={[-11.21, 2.78, 1.89]}
        rotation={[0.83, 0.59, -1.21]}
        scale={[0.35, 1.42, 0.25]}
      />
      <mesh
        geometry={nodes.Sphere011.geometry}
        material={nodes.Sphere011.material}
        position={[-9.79, 3.96, 2.02]}
        scale={[-0.75, 1.81, 2.05]}
      />
      <mesh
        geometry={nodes.Sphere005.geometry}
        material={nodes.Sphere005.material}
        position={[18.12, -2.93, 2.3]}
        rotation={[Math.PI, -0.18, Math.PI]}
        scale={[-2.12, 4.66, 4.74]}
      />
      <mesh
        geometry={nodes.Cylinder003.geometry}
        material={nodes.Cylinder003.material}
        position={[21.31, -0.6, 1.28]}
        rotation={[0.87, 0.64, -1.29]}
        scale={[0.37, 2.01, 0.27]}
      />
      <mesh
        geometry={nodes.Sphere006.geometry}
        material={nodes.Sphere006.material}
        position={[26.05, -5.74, 0.67]}
        rotation={[Math.PI, -0.18, Math.PI]}
        scale={[-1.18, 2.74, 2.7]}
      />
      <mesh
        geometry={nodes.Sphere007.geometry}
        material={nodes.Sphere007.material}
        position={[23.87, 1.34, 1.23]}
        rotation={[Math.PI, -0.18, Math.PI]}
        scale={[-1.18, 2.74, 2.7]}
      />
      <mesh
        geometry={nodes.Cylinder005.geometry}
        material={nodes.Cylinder005.material}
        position={[22.07, -4.52, 1.41]}
        rotation={[-1.61, 0.3, -1.41]}
        scale={[0.38, 2.44, 0.28]}
      />
      <mesh
        geometry={nodes.Cylinder006.geometry}
        material={nodes.Cylinder006.material}
        position={[14.14, -4.52, 2.83]}
        rotation={[-1.5, -0.3, 1.82]}
        scale={[0.38, 2.44, 0.28]}
      />
      <mesh
        geometry={nodes.Cylinder007.geometry}
        material={nodes.Cylinder007.material}
        position={[14.14, -3.57, 2.83]}
        rotation={[-1.5, -0.3, 1.82]}
        scale={[0.38, 2.44, 0.28]}
      />
      <mesh
        geometry={nodes.Cylinder011.geometry}
        material={nodes.Cylinder011.material}
        position={[14.55, -0.02, 2.49]}
        rotation={[2.25, -0.66, 1.83]}
        scale={[0.38, 2.12, 0.28]}
      />
      <mesh
        geometry={nodes.Sphere008.geometry}
        material={nodes.Sphere008.material}
        position={[10.51, -5.08, 3.62]}
        rotation={[Math.PI, -0.18, Math.PI]}
        scale={[-1.18, 2.74, 2.7]}
      />
      <mesh
        geometry={nodes.Sphere012.geometry}
        material={nodes.Sphere012.material}
        position={[12.24, 2.09, 3.31]}
        rotation={[Math.PI, -0.18, Math.PI]}
        scale={[-1.18, 2.74, 2.7]}
      />
      <mesh
        geometry={nodes.Cylinder012.geometry}
        material={nodes.Cylinder012.material}
        position={[27.37, -4.7, 0.2]}
        rotation={[0.87, 0.64, -1.29]}
        scale={[0.35, 1.42, 0.25]}
      />
      <mesh
        geometry={nodes.Sphere013.geometry}
        material={nodes.Sphere013.material}
        position={[29.18, -3.05, -0.26]}
        rotation={[Math.PI, -0.18, Math.PI]}
        scale={[-0.75, 2, 2.05]}
      />
      <mesh
        geometry={nodes.Cylinder013.geometry}
        material={nodes.Cylinder013.material}
        position={[22.67, 2.78, 1.04]}
        rotation={[2.21, -0.7, 1.76]}
        scale={[0.35, 1.42, 0.25]}
      />
      <mesh
        geometry={nodes.Sphere014.geometry}
        material={nodes.Sphere014.material}
        position={[21.25, 3.96, 1.16]}
        rotation={[Math.PI, -0.18, Math.PI]}
        scale={[-0.75, 2, 2.05]}
      />
      <mesh
        geometry={nodes.Sphere015.geometry}
        material={materials['oxigeno.005']}
        position={[4.66, 11.66, 1.49]}
        scale={[-1.18, 2.74, 2.7]}
      />
      <mesh
        geometry={nodes.Cylinder014.geometry}
        material={materials['bond.015']}
        position={[5.99, 12.69, 1.34]}
        rotation={[0.83, 0.59, -1.21]}
        scale={[0.35, 1.42, 0.25]}
      />
      <mesh
        geometry={nodes.Cylinder015.geometry}
        material={materials['bond.016']}
        position={[3.36, 12.69, 1.53]}
        rotation={[2.37, -0.5, 2.03]}
        scale={[0.35, 1.42, 0.25]}
      />
      <mesh
        geometry={nodes.Sphere016.geometry}
        material={materials['hidrogeno.005']}
        position={[1.49, 14.08, 2.02]}
        scale={[-0.75, 1.9, 2.05]}
      />
      <mesh
        geometry={nodes.Sphere017.geometry}
        material={materials['hidrogeno.006']}
        position={[7.86, 14.08, 2.02]}
        scale={[-0.75, 1.9, 2.05]}
      />
    </group>
  )
}

useGLTF.preload(model)
