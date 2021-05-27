import React from 'react'
import SingleBond from './SingleBond'
import DoubleBond from './DoubleBond'
import TripleBond from './TripleBond'
import { Object3D } from 'three'
import StaticSingleBond from './StaticSingleBond'

function Yeet(){

    return(
        <Object3D>
            
        </Object3D>
    )
}

export default function Bond(props) {
    switch (props.bond.type){
        case 's':
            console.log('singleBond')
            return(<SingleBond position={[0,0,0]} />)
        case 'd':
            console.log('doubleBond')

            return(<DoubleBond position={[0,0,0]} />)
        case 't':
            console.log('tripleBond')

            return(<TripleBond position={[0,0,0]} />)
        case 'yeet':
            return(<Yeet />)
    }
}
