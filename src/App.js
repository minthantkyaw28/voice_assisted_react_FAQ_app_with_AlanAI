import React from 'react'
import { ChakraProvider,theme } from '@chakra-ui/react'
import { NavBar } from './NavBar.js';
import { Faq } from './Faq.js';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect,useState } from 'react';
import { Scroller } from 'react-scroll/modules/mixins/scroller.js';
import { scroller } from 'react-scroll';

const App = () => {

  useEffect(() => {
    alanBtn({
        key: 'e56fd11b0ed4eb47ff49c1bd8dfab2b02e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
          if (commandData.command === 'gotoFaq') {
            // Call the client code that will react to the received command

            scroller.scrollTo(`accordion-item-${commandData.faqId}`,{
              duration:800,
              delay:0,
              smooth:'easeInOutquart'
            })

            setIndex(commandData.faqId-1);
          } else if(commandData.command==="toggleColorMode"){
            setToggleColorFlag(flag=>!flag);
          }
        }
    });
  }, []);

  const[index,setIndex]=useState(null);
  const[toggleColorFlag,setToggleColorFlag]=useState(false);


  return (
    <ChakraProvider theme={theme}>
      <NavBar toggleColorFlag={toggleColorFlag}/>
      <Faq index={index} setIndex={setIndex}></Faq>
    </ChakraProvider>
  )
}

export default App;