import React from 'react'
import SingleBond from './SingleBond'
import DoubleBond from './DoubleBond'
import TripleBond from './TripleBond'


function Yeet(){

    return(
        <group rotation={[0,-1,1]}>
            <mesh position={[1,0,0]}>
                <boxGeometry attach='geometry' ></boxGeometry>
                <meshStandardMaterial  attach='material' color={'red'} ></meshStandardMaterial>
            </mesh>
            <mesh position={[0,2,0]}>
                <boxGeometry attach='geometry' ></boxGeometry>
                <meshStandardMaterial  attach='material' color={'yellow'} ></meshStandardMaterial>
            </mesh>
        </group>
    )
}

export default function Bond(props) {

    const bondColor = 'gray'

    switch (props.bond.type){
        case 's':
            console.log('singleBond')
            return(<SingleBond position={[0,0,0]} init={[.1,.1,2,64]} color={bondColor} enableMove={props.enableMove} />)
        case 'd':
            console.log('doubleBond')

            return(<DoubleBond position={[0,0,0]} init={[.1,.1,2,64]} color={bondColor} enableMove={props.enableMove} />)
        case 't':
            console.log('tripleBond')

            return(<TripleBond position={[0,0,0]} init={[.1,.1,2,64]} color={bondColor} enableMove={props.enableMove} />)
        case 'yeet':
            return(<Yeet />)
    }
}
