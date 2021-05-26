import React, {useState, useRef} from 'react'
import { useFrame } from '@react-three/fiber'

//import { render } from 'react-dom'
//import * as THREE from 'three'
import { Canvas, useThree } from 'react-three-fiber'
import { Html } from '@react-three/drei'
import {Text} from '@chakra-ui/react'
import { useDrag } from '@use-gesture/react'

const textProps = {
    fontSize: 3.9,
    font: 'http://fonts.gstatic.com/s/modak/v5/EJRYQgs1XtIEskMA-hI.woff'
  }

export default function Hydrogen(props) {
    // This reference will give us direct access to the THREE.Mesh object
    const mesh = useRef()
    useEffect(() => {
        mesh.current.lookAt(0, 0, 0)
      }, [])
    // Set up state for the hovered and active state
    //const [hovered, setHover] = useState(false)
    //const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    //useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
    // Return the view, these are regular Threejs elements expressed in JSX

    const [position, setPosition] = useState([0, 0, 0]);
    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;
    

    const bind = useDrag(({ offset: [x, y] }) => {
      const [,, z] = position;
      setPosition([x / aspect, -y / aspect, z]);
    }, { pointerEvents: true });

    return (
      <mesh
        {...props}
        position = {position}
        bind={bind}
        ref={mesh}
        >
        <Html>
          <Text fontWeight='600' fontSize='2em'>H</Text>
        </Html>
        <sphereGeometry attach='geometry' args={[1, 16, 16]} />
        <meshStandardMaterial color={'skyblue'}
        onPointerOver={e => console.log('hover')}
        onPointerOut={e => console.log('unhover')}
        />
      </mesh>
    )
  }