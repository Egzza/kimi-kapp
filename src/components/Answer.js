import React from 'react'

// EASY
import H2o from './answerModels/H2o'
import Co2 from './answerModels/Co2'
import Nh3 from './answerModels/Nh3'
import Ch4 from './answerModels/Ch4'

// MEDIUM
import Hno3 from './answerModels/Hno3'
import Caco3 from './answerModels/Caco3'
import Agno3 from './answerModels/Agno3'
import Cloroformo from './answerModels/Cloroformo'

// HARD
import Acido from './answerModels/Acido'
import SuperF from './answerModels/Superf'
import NitroG from './answerModels/Nitrog'


export default function Answer(props) {

        switch(props.notation){
            
            // EASY

            case 'H2O':
                return ( <H2o /> )
                
            case 'CO2':
                return ( <Co2 /> )
                
            case 'NH3':
                return ( <Nh3 /> )                
                
            case 'CH4':
                return ( <Ch4 /> )
            
            // MEDIUM

            case 'HNO3':
                return ( <Hno3 /> ) 
                
            case 'CaCO3':
                return ( <Caco3 /> )

            case 'AgNO3':
                return ( <Agno3 /> )

            case 'Cloroformo':
                return ( <Cloroformo /> )
            
            // HARD

            case 'Acido acetico':
                return ( <Acido /> ) 
                
            case 'Superfosfato de calcio':
                return ( <SuperF /> )

            case 'Nitroglicerina':
                return ( <NitroG /> )
            
            default:
                break
        }
}
