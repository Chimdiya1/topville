import React from 'react';
import { Flex, Heading } from "@chakra-ui/react"


const Hero = ({text}) => {
    return ( 
        <div className="home">
            <Flex
                background= "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/assets/home.jpg')"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                height='50vh'
                align='center'
                justify='center'
                direction='column'
            >
                <Heading as="h2" fontWeight='400' letterSpacing='wide' textAlign='center' fontSize={["3xl", "null", "4xl", "5xl"]} color="white" mb={5}>
                    {text}
                </Heading>
            </Flex>            
        </div>
     );
}
 
export default Hero;