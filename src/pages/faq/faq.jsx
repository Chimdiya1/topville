import React from 'react';
import Hero from '../../components/hero/hero'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
    Box,
  Heading
} from "@chakra-ui/react"

const FAQ = () => {
    return ( 
        <Box >
            <Hero text="FAQs" /> 
            <Heading as="h2" fontWeight='400' letterSpacing='wide' textAlign='center' fontSize={["xl", "null", "2xl", "3xl"]} color="black" marginTop={20} my={5}>
                Here are some questions we are frequently asked
            </Heading>
            <Accordion px={['10',null,null,null,'10']} size="xl" my={30} maxW={["md", null, null,null,"xl"]} mx='auto' allowToggle>
                <AccordionItem>
                    <AccordionButton>
                    <Box flex="1" textAlign="left">
                        Section 1 title
                    </Box>
                    <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton>
                    <Box flex="1" textAlign="left">
                        Section 2 title
                    </Box>
                    <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton>
                    <Box flex="1" textAlign="left">
                        Section 2 title
                    </Box>
                    <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton>
                    <Box flex="1" textAlign="left">
                        Section 2 title
                    </Box>
                    <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            
        </Box>
     );
}
 
export default FAQ;