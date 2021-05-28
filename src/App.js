import './App.css';
import logo from './logo.png'
import React, { useRef, useState, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {OrbitControls, Sky, TransformControls, Loader} from '@react-three/drei'
import {default as BoxObj} from './components/Box'
import { Box, Button, Center, Wrap, HStack, Image, Stack, Text, color } from '@chakra-ui/react';
import {easyList, mediumList, hardList} from './moleculeLists/moleculeLists'
import {elements} from './elementList/elementList'
import Atom from './components/Atom'
import AvailableAtom from './components/AvaliableAtom'
import StaticSingleBond from './components/StaticSingleBond'
import StaticDoubleBond from './components/StaticDoubleBond'
import StaticTripleBond from './components/StaticTripleBond'

import Bond from './components/Bond'
import Answer from './components/Answer'


function App() {

   //document.addEventListener('keydown', (e)=>{enableMove = (e.keyCode === 16) ? true : false})
    //document.addEventListener('keyup',()=>{enableMove=false})
  
  const [enableMove, setEnableMove] = useState(true)
  document.addEventListener('keydown', (e)=>{ setEnableMove((e.keyCode === 16) ? false : true) })  
  document.addEventListener('keyup',()=>{ setEnableMove(true) })

  const [showMolecule, setShowMolecule] = useState(false)
  const [molecule,setMolecule] = useState({})
  const [showAnswer, setShowAnswer] = useState(false)
  const [isEasy, setEasy] = useState(true)
  const [isMedium, setMedium] = useState(false)
  const [isHard, setHard] = useState(false)

  const [inCanvasAtoms, setinCanvasAtoms] = useState([])
  const [inCanvasBonds, setinCanvasBonds] = useState([])

  function newMolecule(){
    setShowMolecule(true)
    setShowAnswer(false)
    setinCanvasAtoms([])
    setinCanvasBonds([])

    let m
    // Get Molecule from predefined Array
    
    do {
      if(isEasy){
        m = easyList[Math.floor(Math.random() * easyList.length)];
      } else if(isMedium) {
        m = mediumList[Math.floor(Math.random() * mediumList.length)];
      } else {
        m = hardList[Math.floor(Math.random() * hardList.length)];
      }
    } while (m.notation == molecule.notation);
    
    setMolecule(m)
  }

  function addAtomToCanvas(element){
    const newinCanvasAtoms = inCanvasAtoms.concat(element)
    setinCanvasAtoms(newinCanvasAtoms)
  }

  function addBondToCanvas(bond){
    const newinCanvasBonds = inCanvasBonds.concat(bond)
    setinCanvasBonds(newinCanvasBonds)
  }

  return (
    <>
      <Stack w='100vw' h='100vh' bg='blackAlpha.800'>
        <HStack mt='10px' justifyContent='space-evenly'>
          <Stack alignSelf='start' w='18vw'>
            <Stack >
              <Box >
                <Image w='18vw' src={logo} />
              </Box>
              <Text fontWeight='800' fontSize='2em' align='center' color='white' userSelect={'none'} >Kimi kpp</Text>
            </Stack>
            {showMolecule &&
              <Box bg='white' borderRadius='16px' h='10vh'>
                <Stack>
                  <Text fontWeight='600' fontSize='1em' align='center' userSelect={'none'} >Form the molecule: </Text>
                  <Text fontWeight='800' fontSize='2em' align='center' userSelect={'none'} >{molecule.notation}</Text>
                </Stack>
              </Box>
            }
            {showAnswer &&
              <Box  bg='white' borderRadius='16px'>
                <Stack>
                  <Text fontWeight='600' fontSize='1em' align='center' userSelect={'none'} >Answer:</Text>
                  <Box display={showAnswer}>
                    <Suspense fallback={null}>
                      <Canvas>
                        {/*ANSWER CANVAS*/}
                        <ambientLight />
                        <Answer {...molecule} />
                        <OrbitControls rotateSpeed={.2} panSpeed={.2} />
                      </Canvas>
                    </Suspense>
                  </Box>
                </Stack>
              </Box>
            }
            {showMolecule && <Button onClick={()=>{setShowAnswer(true)}} >Show Answer</Button>}
            <Button onClick={newMolecule} bg='green.300' _hover={{bg:'green.400'}} >New Molecule</Button>
            {showMolecule && <Button onClick={()=>{setinCanvasAtoms([]);setinCanvasBonds([])}} bg='red.300'  _hover={{bg:'red.400'}} >Reset</Button>}
          </Stack>
          <Box w='60vw' h='90vh' bg='whiteAlpha.900' borderRadius='16px'>
            <Canvas  >
              {/*MOLECULE CANVAS*/}
              
              {
                inCanvasAtoms.map((element)=>(
                  <Atom key={element.notation} {...element} position={[1,0,0]} enableMove={enableMove} />
                ))
              }
              {
                inCanvasBonds.map((bond)=>(
                  <Bond key={bond.i} bond={bond} enableMove={enableMove} />
                ))
              }
              
              <ambientLight />
              <OrbitControls enableRotate={false} enablePan={false} />
            </Canvas>
            {showAnswer && <Text mt='-80px' textAlign={'center'} fontWeight='600' fontSize='2em' >Does it look alike?   Try another molecule...</Text>}
          </Box>
          <Stack alignSelf='start' w='18vw'>
            <Box bg='whiteAlpha.900' borderRadius='16px' h='45vh'>
              {/*ATOM SELECTION*/}
              <Stack>
                <Text  fontWeight='600' fontSize='1em' align='center' userSelect={'none'} >Add an atom</Text>
                <Wrap px='5%'>
                  {
                    elements.map((element)=>(
                      <AvailableAtom key={element.notation} {...element} handleClick={addAtomToCanvas} />
                    ))
                  }

                </Wrap>
              </Stack>
            </Box>
            <Box bg='whiteAlpha.900' borderRadius='16px' h='45vh'>
              {/*BOND SELECTION*/}
              <Stack>
                <Text  fontWeight='600' fontSize='1em' align='center' userSelect={'none'} >Add a bond</Text>
                <Box px='10px'>
                  <Stack>
                    <Box onClick={()=>{addBondToCanvas({type:'s', i: inCanvasBonds.length})}} >
                      <Box h='75px'>
                        <Canvas>
                          <ambientLight />
                          <StaticSingleBond />
                        </Canvas>
                      </Box>
                      <Text textAlign='center' userSelect={'none'} >Single bond</Text>
                    </Box>
                    <Box onClick={()=>{addBondToCanvas({type:'d', i: inCanvasBonds.length})}} >
                      <Box h='75px'>
                        <Canvas>
                          <ambientLight />
                          <StaticDoubleBond />
                        </Canvas>
                      </Box>
                      <Text textAlign='center' userSelect={'none'} >Double bond</Text>
                    </Box>
                    <Box onClick={()=>{addBondToCanvas({type:'t',i: inCanvasBonds.length})}} >
                      <Box h='75px'>
                        <Canvas>
                          <ambientLight />
                          <StaticTripleBond /> 
                        </Canvas>
                      </Box>
                      <Text textAlign='center' userSelect={'none'} >Triple bond</Text>
                    </Box>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </HStack>
        <HStack justifyContent='center' spacing='32px' >
          <Button onClick={()=>{setEasy(true);setMedium(false);setHard(false)}} isActive={isEasy} _active={{bg:'green.200'}} >Easy</Button>
          <Button onClick={()=>{setEasy(false);setMedium(true);setHard(false)}} isActive={isMedium} _active={{bg:'yellow.200'}} >Medium</Button>
          <Button onClick={()=>{setEasy(false);setMedium(false);setHard(true)}} isActive={isHard} _active={{bg:'red.200'}} >Hard</Button>
        </HStack>
      </Stack>
    </>
  );
}

export default App;
