import './App.css';
import logo from './logo.png'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {OrbitControls, Sky, TransformControls} from '@react-three/drei'
import {default as BoxObj} from './components/Box'
import { Box, Button, Center, Wrap, HStack, Image, Stack, Text } from '@chakra-ui/react';
import {easyList, mediumList, hardList} from './moleculeLists/moleculeLists'
import {elements} from './elementList/elementList'
import Atom from './components/Atom'
import AvailableAtom from './components/AvaliableAtom'

function App() {

  const [showMolecule, setShowMolecule] = useState(false)
  const [molecule,setMolecule] = useState('')
  const [showAnswer, setShowAnswer] = useState(false)
  const [isEasy, setEasy] = useState(true)
  const [isMedium, setMedium] = useState(false)
  const [isHard, setHard] = useState(false)

  const [inCanvas, setInCanvas] = useState([])

  function newMolecule(){
    setShowMolecule(true)
    setShowAnswer(false)
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
    } while (m.notation == molecule);
    
    setMolecule(m.notation)
  }

  function addToCanvas(element){
    const newInCanvas = inCanvas.concat(element)
    setInCanvas(newInCanvas)
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
              <Text fontWeight='800' fontSize='2em' align='center' color='white'>Kimi kpp</Text>
            </Stack>
            {showMolecule &&
              <Box bg='white' borderRadius='16px' h='10vh'>
                <Stack>
                  <Text fontWeight='600' fontSize='1em' align='center'>Form the molecule: </Text>
                  <Text fontWeight='800' fontSize='2em' align='center'>{molecule}</Text>
                </Stack>
              </Box>
            }
            {showAnswer &&
              <Box  bg='white' borderRadius='16px'>
                <Stack>
                  <Text fontWeight='600' fontSize='1em' align='center' >Answer:</Text>
                  <Box display={showAnswer}>
                    <Canvas>
                      {/*ANSWER CANVAS*/}
                    </Canvas>
                  </Box>
                </Stack>
              </Box>
            }
            <Button onClick={()=>{setShowAnswer(true)}} >Show Answer</Button>
            <Button onClick={newMolecule} >New Molecule</Button>
          </Stack>
          <Box w='60vw' h='90vh' bg='white' borderRadius='16px'>
            <Canvas>
              {/*MOLECULE CANVAS*/}
              
              
              {
                inCanvas.map((element)=>(
                  <Atom {...element} position={[1,0,0]} />
                ))
              }
              
              <ambientLight />
            </Canvas>
          </Box>
          <Stack alignSelf='start' w='18vw'>
            <Box bg='white' borderRadius='16px' h='45vh'>
              {/*ATOM SELECTION*/}
              <Stack>
                <Text  fontWeight='600' fontSize='1em' align='center' >Add an atom</Text>
                <Wrap px='5%'>
                  {
                    elements.map((element)=>(
                      <AvailableAtom {...element} handleClick={addToCanvas} />
                    ))
                  }

                </Wrap>
              </Stack>
            </Box>
            <Box bg='white' borderRadius='16px' h='45vh'>
              {/*BOND SELECTION*/}
              <Stack>
                <Text  fontWeight='600' fontSize='1em' align='center' >Add a bond</Text>
              </Stack>
            </Box>
          </Stack>
        </HStack>
        <HStack justifyContent='center' spacing='32px' >
          <Button onClick={()=>{setEasy(true);setMedium(false);setHard(false)}} >Easy</Button>
          <Button onClick={()=>{setEasy(false);setMedium(true);setHard(false)}} >Medium</Button>
          <Button onClick={()=>{setEasy(false);setMedium(false);setHard(true)}} >Hard</Button>
        </HStack>
      </Stack>
    </>
  );
}

export default App;
