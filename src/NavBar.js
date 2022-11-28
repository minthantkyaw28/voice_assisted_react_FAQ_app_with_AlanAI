import React from 'react';
import {Box,Flex,Heading,Spacer} from '@chakra-ui/react';
import {ColorModeSwitcher} from './ColorModeSwitcher.js';

export const NavBar = ({toggleColorFlag}) => {
  return (
   <Flex align="center" boxShadow="base" p="2" mb="2">
        <Box p="2">
            <Heading size="lg">E-commerce support</Heading>
        </Box>
        <Spacer></Spacer>
        <Box>
            <ColorModeSwitcher toggleColorFlag={toggleColorFlag}/>
        </Box>
   </Flex>
  )
}
