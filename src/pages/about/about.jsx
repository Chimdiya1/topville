import React from 'react';
import Hero from '../../components/hero/hero'
import {
    Box,
    SimpleGrid,
    Flex,
    Image,
    Text,
    Heading
    
} from "@chakra-ui/react"
import AboutCard from '../../components/aboutCard/aboutCard'
import dollar from '../../assets/dollar.png'

let text = 'Some vague text about how using our service helps people and some other stuff. TBH this is just to fill up space, content would come much later '

const About = () => {
    return ( 
        <Box bg='gray.100' >
            <Hero text="About Us" /> 
            <SimpleGrid minChildWidth= "300px" paddingY='50px' spacing="40px" m='auto' justifyContent='space-between' width={['90%','80%',null ]}>
                <AboutCard img={dollar} text={text} heading='Affordable'/>
                <AboutCard img={dollar} text={text} heading='Affordable'/>
                <AboutCard img={dollar} text={text} heading='Affordable'/>
                <AboutCard img={dollar} text={text} heading='Affordable'/>
                <AboutCard img={dollar} text={text} heading='Affordable'/>
                <AboutCard img={dollar} text={text} heading='Affordable'/>                
            </SimpleGrid>
            
        </Box>
     );
}
 
export default About;